import type { Component } from 'solid-js';

import { Header } from './view/Header';
import { ResultsView } from './view/ResultsView';
import { BoardView } from './view/BoardView';
import {createSignal} from "solid-js";
import BoardData, {createEmptyBoardData} from "./model/BoardData";

const App: Component = () => {
	const [boardData] = createSignal<BoardData>(createEmptyBoardData());

	return (
		<div class="flex flex-col w-full h-full">
			<Header />
			<div style={{ height: 'calc(100% - 76px)' }} class="flex flex-row flex-wrap grow">
				<BoardView boardData={boardData()} class="w-full md:w-1/2 md:h-full" />
				<ResultsView boardData={boardData()} class="w-full md:w-1/2 md:h-full" />
			</div>
		</div>
	)
};

export default App;
