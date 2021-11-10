package com.example.view

import com.example.model.Position
import com.example.style.TileStyle
import javafx.beans.property.SimpleStringProperty
import javafx.event.EventHandler
import javafx.geometry.Pos
import javafx.scene.input.MouseEvent
import javafx.scene.layout.StackPane
import javafx.scene.text.Text
import tornadofx.*

const val NB_ROWS = 4
const val NB_COLS = 4

class BoardView : View() {
    val boardData = mutableListOf<MutableList<Tile>>()

    override val root = vbox {
        gridpane {
            for (i in 1..NB_ROWS) {
                row {
                    val row = mutableListOf<Tile>()
                    for (j in 1..NB_COLS) {
                        val tile = Tile(if ((i + j) % 2 == 0) "A" else "B")
                        row += tile
                        add(tile)
                    }
                    boardData += row
                }
            }
            alignment = Pos.CENTER
        }
        alignment = Pos.CENTER
    }

    fun getValue(position: Position) = boardData[position.y][position.x].getText()
}

class Tile(value: String) : Fragment() {
    val input = SimpleStringProperty(value)
    val turnToEdit = EventHandler { _: MouseEvent -> root.children.setAll(textfield) }
    val tileText: Text = text(input) {
        addClass(TileStyle.tileText)
        onMouseClicked = turnToEdit
    }
    val textfield = textfield {
        addClass(TileStyle.tileTextField)
        textProperty().bindBidirectional(input)
        onKeyTyped = EventHandler { keyEvent ->
            run {
                if (keyEvent.character == "\r") {
                    root.children.setAll(tileText)
                }
            }
        }
    }

    override val root: StackPane = stackpane {
        add(tileText)
        addClass(TileStyle.tile)
    }

    fun getText(): String = input.get()
}