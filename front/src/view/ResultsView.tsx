import BoardData from "../model/BoardData";
import {createResource, createSignal, For, Show} from "solid-js";
import {postBoard} from "../fetchers";

interface ResultsViewProps {
	class?: string | undefined,
	boardData: BoardData,
}

export function ResultsView(props: ResultsViewProps) {
	const [completeBoardData, setCompleteBoardData] = createSignal(props.boardData);
	const [words] = createResource<string[], BoardData>(completeBoardData, postBoard);

	return (
		<div class={`bg-neutral-800 ` + props.class}>
			<div class="flex flex-row mx-8 py-8 md:pt-0 space-x-4 border-b-2 border-b-white">
				<Button name="Clear" />
				<Button name="Randomize" />
				<Button name="Solve" onClick={() => {
					setCompleteBoardData(() => JSON.parse(JSON.stringify(props.boardData)))
				} } />
			</div>
			<div class="flex flex-row flex-wrap justify-start w-full p-4 overflow-auto" style={{ 'max-height': 'calc(100% - 90px)' }}>
				<Show when={!words.loading} fallback={<Spinner />}>
					<For each={words()}>
						{ word => <Word class="w-1/3" word={word} />}
					</For>
				</Show>
			</div>
		</div>
	)
}

interface ButtonProps {
	name: String,
	onClick?: () => void,
}

function Button(props: ButtonProps) {
	return <button class="p-4 rounded text-neutral-100 font-bold bg-indigo-900 hover:bg-indigo-800"
		onClick={props.onClick}
	>
		{ `${props.name}` }
	</button>
}

interface WordProps {
	word: String,
	class?: string | undefined;
}

function Word(props: WordProps) {
	return (
		<span class={`text-white text-center overflow-auto ${props.class}`}>{ `${props.word}` }</span>
	)
}

function Spinner() {
	return <span class="text-neutral-200">Loading...</span>
}