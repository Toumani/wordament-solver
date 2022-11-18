import {createSignal, For} from "solid-js";
import BoardData from "../model/BoardData";
import BoardBox from "../model/BoardBox";

interface BoardViewProps {
	class?: string | undefined,
	boardData: BoardData
}

export function BoardView(props: BoardViewProps) {

	return (
		<div class={`flex items-center justify-center bg-neutral-700 ` + props.class}>
			<div class="flex flex-wrap flex-row" style={{ width: '32rem', height: '32rem' }}>
				<For each={props.boardData.boxes}>{ (box) => <Tile box={box} /> }</For>
			</div>
		</div>
	);
}

interface TileProps {
	box: BoardBox
}

function Tile(props: TileProps) {
	const [edit, setEdit] = createSignal(true);

	return (
		<div class="flex items-center justify-center w-1/4 text-white text-4xl uppercase bg-blue-900 border border-blue-500">
			{ edit()
				? <input
						style={{ border: 'unset', background: 'unset', width: '4rem', "text-align": 'center' }}
						value={props.box.value}
						onChange={(e) => props.box.value = e.currentTarget.value}
						onBlur={() => setEdit(false)}
				/>
				: <span onClick={() => setEdit(true)}>{ props.box.value }</span>
			}
		</div>
	)
}