package com.example.model

import com.example.view.NB_COLS
import com.example.view.NB_ROWS

data class Position(var x: Int, var y: Int) {
    constructor(position: Position) : this(position.x, position.y)

    fun get(move: Move) = when(move) {
        Move.RIGHT -> Position(x + 1, y)
        Move.DOWN -> Position(x, y + 1)
        Move.LEFT -> Position(x - 1, y)
        Move.UP -> Position(x, y - 1)
    }

    fun move(move: Move) {
        when(move) {
            Move.RIGHT -> x++
            Move.DOWN -> y++
            Move.LEFT -> x--
            Move.UP -> y--
        }
    }

    fun right() = Position(x + 1, y)
    fun moveRight() { x++ }

    fun left() = Position(x - 1, y)
    fun moveLeft() { x-- }

    fun isInBoard() = x in 0 until NB_COLS && y in 0 until NB_ROWS

    override fun equals(other: Any?): Boolean {
        return if (other is Position)
            x == other.x && y == other.y
        else false
    }

    override fun hashCode(): Int {
        var result = x
        result = 31 * result + y
        return result
    }
}