package com.example.view

import com.example.style.TileStyle
import javafx.beans.property.SimpleStringProperty
import javafx.event.EventHandler
import javafx.geometry.Pos
import javafx.scene.input.MouseEvent
import javafx.scene.layout.StackPane
import javafx.scene.text.Text
import tornadofx.*

class BoardView : View() {
    override val root = vbox {
        gridpane {
            row {
                add(find<Tile>().root)
                add(find<Tile>().root)
                add(find<Tile>().root)
                add(find<Tile>().root)
            }
            row {
                add(find<Tile>().root)
                add(find<Tile>().root)
                add(find<Tile>().root)
                add(find<Tile>().root)
            }
            row {
                add(find<Tile>().root)
                add(find<Tile>().root)
                add(find<Tile>().root)
                add(find<Tile>().root)
            }
            row {
                add(find<Tile>().root)
                add(find<Tile>().root)
                add(find<Tile>().root)
                add(find<Tile>().root)
            }
            alignment = Pos.CENTER
        }
        alignment = Pos.CENTER
    }
}

class Tile : Fragment() {
    val input = SimpleStringProperty("-")
    val turnToEdit = EventHandler { event: MouseEvent -> root.children.setAll(textfield) }
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

}