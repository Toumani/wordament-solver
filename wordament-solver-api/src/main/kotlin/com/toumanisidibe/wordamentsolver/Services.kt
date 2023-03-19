package com.toumanisidibe.wordamentsolver

import com.toumanisidibe.wordamentsolver.model.Board
import com.toumanisidibe.wordamentsolver.model.Move
import com.toumanisidibe.wordamentsolver.model.Path
import com.toumanisidibe.wordamentsolver.model.Position

object Services {
	val dictionaryWords: List<String> = Services::class.java.getResource("/english-words.txt")?.readText()?.split("\n")!!

	fun resolve(board: Board): Set<String> {
		val words = mutableSetOf<String>()
		val oneStepValue = 1.0 / (NB_COLS * NB_ROWS)
		var totalProgress = 0.0
		for (i in 0 until  NB_ROWS)
			for (j in 0 until  NB_COLS) {
				totalProgress += oneStepValue
				words += findWordsFromStartingPosition(board, Position(j, i))
			}
		return words
	}

	fun findWordsFromStartingPosition(board: Board, startingPosition: Position): Set<String> {
		val words = mutableSetOf<String>()
		val visitedPaths = mutableListOf<Path>()

		do {
			val currentPosition = Position(startingPosition)
			val visitedPositions = mutableListOf<Position>()
			var word = board.getValue(startingPosition)
			val currentPath = Path(startingPosition)

			do {
				var moved = false
				for (move in listOf(Move.RIGHT, Move.DOWN_RIGHT, Move.DOWN, Move.DOWN_LEFT, Move.LEFT, Move.UP_LEFT, Move.UP, Move.UP_RIGHT)) {
					val nextPosition = currentPosition.get(move)
					val nextPath = currentPath.get(move)
					// check if movement is valid
					// movement is valid if
					//  - the movement isn't stepping out of the board
					//  - the tile haven't been visited yet
					//  - the movement is not leading to a visited path
					//  - there are words that start with the letters combinaison
					if (nextPosition.isInBoard() &&
						visitedPositions.contains(nextPosition).not() &&
						visitedPaths.contains(nextPath).not()
					) {
						val nextWord = word + board.getValue(nextPosition)
						val stringValidity = isStringValid(nextWord)
						if (stringValidity.isValidWordStart) {
							if (stringValidity.isValidWord) {
								words += nextWord
							}
							// move
							moved = true
							visitedPositions += Position(currentPosition)
							currentPosition.move(move)
							word = nextWord
							currentPath.add(move)
						}
					}

					if (moved)
						break
				}
			} while (moved)

			visitedPaths += currentPath
		} while (currentPath.length > 0)

		return words
	}

	/**
	 * Check if there is a least one word starting with the given string
	 * @param string the string to check with
	 * @return true if found at least one word, false otherwise
	 */
	private fun isStringValid(string: String): StringValidity {
		var isValidWord = false
		var isValidWordStart = false

		for (word in dictionaryWords) {
			if (word.startsWith(string, ignoreCase = true)) {
				isValidWordStart = true
				if (word.equals(string, ignoreCase = true)) {
					isValidWord = true
				}
				break
			}
		}

		return StringValidity(
			isValidWord = isValidWord,
			isValidWordStart = isValidWordStart
		)
	}
}

data class StringValidity(val isValidWord: Boolean, val isValidWordStart: Boolean)