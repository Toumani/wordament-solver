package com.example.model

data class Path(val moves: MutableList<Move>) {
    val length
        get() = moves.size
    constructor(vararg move: Move) : this(move.toMutableList())

    fun get(move: Move) = Path(moves.plus(move).toMutableList())

    fun right() = Path(moves.plus(Move.RIGHT).toMutableList())

    fun add(move: Move) = moves.add(move)

    override fun equals(other: Any?): Boolean {
        return if (other is Path && length == other.length) {
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
    UP, RIGHT, DOWN, LEFT
}