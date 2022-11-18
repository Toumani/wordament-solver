import BoardData from "../model/BoardData";

interface ResultsViewProps {
	class?: string | undefined,
	boardData: BoardData,
}

export function ResultsView(props: ResultsViewProps) {
	return (
		<div class={`bg-neutral-800 ` + props.class}>
			<div class="flex flex-row mx-8 pb-8 space-x-4 border-b-2 border-b-white">
				<Button name="Clear" />
				<Button name="Randomize" />
				<Button name="Solve" onClick={() => {
					let s = '';
					for (let i = 0; i < 4; i++) {
						for (let j = 0; j < 4; j++)
							s += props.boardData.boxes[4*i + j].value + ' '
						s += '\n';
					}
					console.log(s);
				} } />
			</div>
			<div class="flex flex-row flex-wrap justify-start w-full p-4">
				<Word class="w-1/3" word="Word" />
				<Word class="w-1/3" word="Word" />
				<Word class="w-1/3" word="Word" />
				<Word class="w-1/3" word="Word" />
				<Word class="w-1/3" word="Word" />
				<Word class="w-1/3" word="Word" />
				<Word class="w-1/3" word="Word" />
				<Word class="w-1/3" word="Word" />
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
		<span class={`text-white text-center ${props.class}`}>{ `${props.word}` }</span>
	)
}