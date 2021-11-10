package com.example.style

import com.example.Styles
import javafx.scene.paint.Color
import tornadofx.*

class ResultStyle : Stylesheet() {
    companion object {
        val button by cssclass()
        val viewport by cssclass()
        val thumb by cssclass()
        val scrollBar by cssclass("scroll-bar")

        val resultBackgroundColor = c("#1d1d1d")
    }

    init {
        button {
            padding = box(15.px)
            backgroundColor = multi(Styles.primaryColor)

            child(".text") {
                fill = Color.WHITE
            }
        }
        viewport {
            backgroundColor = multi(resultBackgroundColor)
            child(".text") {
                fill = Color.WHITE
            }
        }
        scrollBar {
            backgroundColor = multi(resultBackgroundColor)
            prefWidth = 25.px
        }
        thumb {
            backgroundColor = multi(
                Color.WHITE,
                Color.WHITE,
                resultBackgroundColor,
            )
        }
    }
}