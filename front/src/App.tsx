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
			<div class="flex flex-row grow">
				<BoardView boardData={boardData()} class="grow h-full" />
				<ResultsView boardData={boardData()} class="grow h-full" />
			</div>
		</div>
	)
};

export default App;
