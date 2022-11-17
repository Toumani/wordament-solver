interface BoardViewProps {
	class?: string | undefined;
}

export function BoardView(props: BoardViewProps) {
	return (
		<div class={`flex items-center justify-center bg-neutral-700 ` + props.class}>
			<div class="flex flex-wrap flex-row" style={{ width: '32rem', height: '32rem' }}>
				<Tile value="s" />
				<Tile value="s" />
				<Tile value="s" />
				<Tile value="s" />
				<Tile value="s" />
				<Tile value="s" />
				<Tile value="s" />
				<Tile value="s" />
				<Tile value="s" />
				<Tile value="s" />
				<Tile value="s" />
				<Tile value="s" />
				<Tile value="s" />
				<Tile value="s" />
				<Tile value="s" />
				<Tile value="s" />
			</div>
		</div>
	);
}

interface TileProps {
	value: string | null
}

function Tile(props: TileProps) {
	return (
		<div class="flex items-center justify-center w-1/4 text-white text-4xl uppercase bg-blue-900 border border-blue-500">
			{ props.value }
		</div>
	)
}