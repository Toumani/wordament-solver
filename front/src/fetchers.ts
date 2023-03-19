import BoardData from "./model/BoardData";

export async function postBoard(board: BoardData) {
	let isBoardEmpty = true
	for (let i = 0; i < 16; i++)
		if (board.boxes[i].value !== '-') {
			isBoardEmpty = false;
			break;
		}
	if (isBoardEmpty)
		return [] as string[];

	const response = await fetch(import.meta.env.DEV ? 'http://localhost:8080/board' : '/board', {
		method: 'POST',
		headers: {'Content-Type': 'application/json'},
		body: JSON.stringify(board)
	});

	const words = await response.json() as string[]
	return words.sort();
}