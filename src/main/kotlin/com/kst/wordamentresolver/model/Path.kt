package com.kst.wordamentresolver.model

data class Path(val initialPosition: Position, val moves: MutableList<Move>) {
    val length
        get() = moves.size
    constructor(initialPosition: Position, vararg move: Move) : this(initialPosition, move.toMutableList())

    fun get(move: Move) = Path(initialPosition, moves.plus(move).toMutableList())

    fun add(move: Move) = moves.add(move)

    override fun equals(other: Any?): Boolean {
        return if (other is Path && length == other.length) {
            if (initialPosition != initialPosition)
                return false
            if (length == 0)
                return true
            for (i in 0 until length)
                if (moves[i] != other.moves[i])
                    return false
            true
        }
        else false
    }

    override fun hashCode(): Int {
        var result = moves.hashCode()
        result = 31 * result + length
        return result
    }
}

enum class Move {
    UP, RIGHT, DOWN, LEFT, UP_RIGHT, DOWN_RIGHT, DOWN_LEFT, UP_LEFT
}