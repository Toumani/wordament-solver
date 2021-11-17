package com.kst.wordamentresolver.style

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
            minWidth = 200.px
            minHeight = 200.px
            maxWidth = 200.px
            maxHeight = 200.px

            backgroundColor = multi(tileBackgroundColor)
            borderWidth += box(1.px)
            borderColor += box(c("#ccc"))

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