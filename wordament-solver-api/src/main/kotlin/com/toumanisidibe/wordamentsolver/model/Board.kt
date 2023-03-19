package com.toumanisidibe.wordamentsolver.model

import com.toumanisidibe.wordamentsolver.NB_COLS

data class Board(val boxes: List<BoardBox>) {
	fun getValue(position: Position): String {
		return boxes[NB_COLS * position.x + position.y].value
	}
}

data class BoardBox(val x: Int, val y: Int, val value: String)