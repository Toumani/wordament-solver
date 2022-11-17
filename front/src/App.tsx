import type { Component } from 'solid-js';

import { Header } from './Header';
import { ResultsView } from './ResultsView';
import { BoardView } from './view/BoardView';

const App: Component = () => {
	return(
		<div class="flex flex-col w-full h-full">
			<Header />
			<div class="flex flex-row grow">
				<BoardView class="grow h-full" />
				<ResultsView class="grow h-full" />
			</div>
		</div>
	)
};

export default App;
