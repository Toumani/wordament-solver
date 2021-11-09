package com.example.style

import javafx.scene.paint.Color
import javafx.scene.text.TextAlignment
import tornadofx.*

class TileStyle: Stylesheet() {
    companion object {
        val tile by cssclass()
        val tileText by cssclass("text")
        val tileTextField by cssclass()

        val tileBackgroundColor = c("#0000ff")
        val tileFontSize = 28.px
    }

    init {
        tile {
            minWidth = 100.px
            minHeight = 100.px
            maxWidth = 100.px
            maxHeight = 100.px

            backgroundColor = multi(tileBackgroundColor)
            borderWidth += box(1.px)
            borderColor += box(c("#333"))

            tileText {
                fontSize = tileFontSize
                fill = Color.WHITE
            }

            tileTextField {
                backgroundColor = multi(tileBackgroundColor)

                textAlignment = TextAlignment.CENTER
                textFill = Color.WHITE
                fontSize = tileFontSize
            }
        }
    }
}