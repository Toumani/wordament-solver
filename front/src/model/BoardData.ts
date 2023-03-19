import BoardBox from "./BoardBox";
import { letterFrequency } from "../lib/constants";

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

const getRandomLetter = (): string => {
	const randomNumber = Math.random() * 100;
	let runner = 0;
	let randomLetter = 'E'; // fallback as E (which should not happen)
	for (const [key, value] of Object.entries(letterFrequency)) {
		if (runner <= randomNumber && randomNumber < runner + value) {
			randomLetter = key;
			break;
		}
		runner += value;
	}
	return randomLetter;
}

export const createRandomizedBoardData = (): BoardData => ({ boxes: [
		{ x: 0, y: 0, value: getRandomLetter() },
		{ x: 1, y: 0, value: getRandomLetter() },
		{ x: 2, y: 0, value: getRandomLetter() },
		{ x: 3, y: 0, value: getRandomLetter() },
		{ x: 0, y: 1, value: getRandomLetter() },
		{ x: 1, y: 1, value: getRandomLetter() },
		{ x: 2, y: 1, value: getRandomLetter() },
		{ x: 3, y: 1, value: getRandomLetter() },
		{ x: 0, y: 2, value: getRandomLetter() },
		{ x: 1, y: 2, value: getRandomLetter() },
		{ x: 2, y: 2, value: getRandomLetter() },
		{ x: 3, y: 2, value: getRandomLetter() },
		{ x: 0, y: 3, value: getRandomLetter() },
		{ x: 1, y: 3, value: getRandomLetter() },
		{ x: 2, y: 3, value: getRandomLetter() },
		{ x: 3, y: 3, value: getRandomLetter() },
]} as BoardData);