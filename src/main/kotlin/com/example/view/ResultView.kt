package com.example.view

import com.example.MyApp
import com.example.model.Move
import com.example.model.Path
import com.example.model.Position
import javafx.scene.text.Text
import tornadofx.*

class ResultView : View() {
    val controller: ResultController by inject()
    val resultPane = flowpane { vgap = 40.0 }
    override val root = vbox {
        button("Resolve!") {
            action { controller.resolve() }
        }
        label("Results:") {
            style {
                fontSize = 28.px
            }
        }
        add(resultPane)
        spacing = 20.0
        padding = insets(20)
        prefWidth = 800.0
    }
}

class ResultController : Controller() {
    fun resolve() {
        println("Resolving!")
//        for (i in WORD_MIN_LENGTH..WORD_MAX_LENGTH) {
            val words = findWordsFromStartingPosition(Position(0, 0))
//        }
        val resultView = find<ResultView>()
        resultView.resultPane.clear()
        for (word in words) {
            val text = Text(word)
            text.wrappingWidth = 200.0
            resultView.resultPane.add(text)
        }
    }

    private fun findWordsFromStartingPosition(startingPosition: Position): Set<String> {
        val board = find<BoardView>()

        val words = mutableSetOf<String>()
        val visitedPaths = mutableListOf<Path>()

        do {
            val currentPosition = Position(startingPosition)
            val visitedPositions = mutableListOf<Position>()
            var word = board.getValue(startingPosition)
            val currentPath = Path()

            do {
                var moved = false
                for (move in listOf(Move.RIGHT, Move.DOWN, Move.LEFT, Move.UP)) {
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
                            if (stringValidity.isValidWord)
                                words += nextWord
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

        for (word in MyApp.dictionaryWords) {
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
