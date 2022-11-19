import BoardBox from "./BoardBox";

export default interface BoardData {
	boxes: BoardBox[]
}


export const createEmptyBoardData = (): BoardData => ({ boxes: [
		{ x: 0, y: 0, value: '-' },
		{ x: 1, y: 0, value: '-' },
		{ x: 2, y: 0, value: '-' },
		{ x: 3, y: 0, value: '-' },
		{ x: 0, y: 1, value: '-' },
		{ x: 1, y: 1, value: '-' },
		{ x: 2, y: 1, value: '-' },
		{ x: 3, y: 1, value: '-' },
		{ x: 0, y: 2, value: '-' },
		{ x: 1, y: 2, value: '-' },
		{ x: 2, y: 2, value: '-' },
		{ x: 3, y: 2, value: '-' },
		{ x: 0, y: 3, value: '-' },
		{ x: 1, y: 3, value: '-' },
		{ x: 2, y: 3, value: '-' },
		{ x: 3, y: 3, value: '-' },
]} as BoardData);