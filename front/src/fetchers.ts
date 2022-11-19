import BoardData from "./model/BoardData";

export async function postBoard(board: BoardData): Promise<string[]> {
	const response = await fetch('http://localhost:8080/board', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(board)
	});

	return await response.json() as string[]
}