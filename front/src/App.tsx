import { Header } from './view/Header';
import { ResultsView } from './view/ResultsView';
import { BoardView } from './view/BoardView';
import { createSignal, JSX } from "solid-js";
import BoardData, { createEmptyBoardData, createRandomizedBoardData } from "./model/BoardData";

const App: () => JSX.Element = () => {
	const [boardData, setBoardData] = createSignal<BoardData>(createEmptyBoardData());
	const clearBoard = () => setBoardData(createEmptyBoardData);
	const randomize = () => setBoardData(createRandomizedBoardData);

	return (
		<div class="flex flex-col w-full h-full">
			<Header />
			<div style={{ height: 'calc(100% - 76px)' }} class="flex flex-row flex-wrap grow">
				<BoardView boardData={boardData()} class="w-full md:w-1/2 md:h-full" />
				<ResultsView boardData={boardData()} clearBoard={clearBoard} randomize={randomize} class="w-full md:w-1/2 md:h-full" />
			</div>
		</div>
	)
};

export default App;
