package com.example.view

import com.example.MyApp
import com.example.model.Position
import com.example.style.TileStyle
import javafx.beans.property.SimpleBooleanProperty
import javafx.beans.property.SimpleStringProperty
import javafx.event.EventHandler
import javafx.geometry.Pos
import javafx.scene.input.MouseEvent
import javafx.scene.layout.StackPane
import javafx.scene.text.Text
import tornadofx.*
import kotlin.random.Random

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
                        val tile = Tile()
                        row += tile
                        add(tile)
                    }
                    boardData += row
                }
            }
            alignment = Pos.CENTER
        }
        alignment = Pos.CENTER
        style { backgroundColor += c("#333333") }
    }

    fun clear() {
        for (i in 0 until NB_ROWS) {
            for (j in 0 until NB_COLS) {
                boardData[i][j].clear()
            }
        }
    }

    fun randomize() {
        for (i in 0 until NB_ROWS) {
            for (j in 0 until NB_COLS) {
                val randomNumber = Random.nextDouble(0.0, 100.0)
                var runner = 0.0
                var randomString = "E" // fallback as E (which should not happen)
                for (entry in MyApp.letterFrequency) {
                    if (runner <= randomNumber && randomNumber < runner + entry.value) {
                        randomString = entry.key
                        break
                    }
                    runner += entry.value
                }
                boardData[i][j].setText(randomString)
            }
        }
    }

    fun getValue(position: Position) = boardData[position.y][position.x].getText()
    fun setValue(position: Position, value: String) = boardData[position.y][position.x].setText(value)
}

class Tile : Fragment() {
    val input = SimpleStringProperty("-")
    val turnToEdit = EventHandler {
        _: MouseEvent -> isEdit.set(true)
        textfield.requestFocus()
        textfield.selectAll()
    }
    val isEdit = SimpleBooleanProperty(true)

    val tileText: Text = text(input) {
        addClass(TileStyle.tileText)
        visibleProperty().bind(isEdit.not())
    }
    private val textfield = textfield {
        addClass(TileStyle.tileTextField)
        textProperty().bindBidirectional(input)
        textProperty().addListener { _, _, newValue -> this.text = newValue.toUpperCase() }
        visibleProperty().bind(isEdit)

        onKeyTyped = EventHandler { keyEvent ->
            run {
                if (keyEvent.character == "\r")
                    isEdit.set(false)
            }
        }
        focusedProperty().addListener { _, _, new ->
            if (!new) // focus lost
                isEdit.set(false)
        }
    }

    override val root: StackPane = stackpane {
        add(textfield)
        add(tileText)
        addClass(TileStyle.tile)
        onMouseClicked = turnToEdit
    }

    fun getText(): String = input.get()
    fun setText(value: String) {
        input.set(value)
        isEdit.set(false)
    }

    fun clear() {
        input.set("-")
        isEdit.set(true)
    }
}