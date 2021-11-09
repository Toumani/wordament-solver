package com.example.view

import com.example.Styles
import com.example.style.TileStyle
import javafx.beans.property.SimpleStringProperty
import javafx.event.EventHandler
import javafx.scene.control.TextField
import javafx.scene.input.MouseEvent
import javafx.scene.layout.StackPane
import javafx.scene.paint.Color
import tornadofx.*

class MainView : View("Wordament Resolver") {
    override val root = gridpane {
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
    }
}

class Tile : Fragment() {
    val textfield = TileTextField()
    val input = SimpleStringProperty("-")
    val turnToEdit = EventHandler { event: MouseEvent -> root.children.setAll(textfield) }

    override val root: StackPane = stackpane {
        text(input) {
            addClass(TileStyle.tileText)
            onMouseClicked = turnToEdit
        }
        addClass(TileStyle.tile)
    }

}

class TileTextField(text: String = "") : TextField(text) {
    init {
        addClass(TileStyle.tileTextField)
    }
    override fun getUserAgentStylesheet() = TileStyle().base64URL.toExternalForm()
}