package com.kst.wordamentresolver.style

import com.kst.wordamentresolver.Styles
import javafx.scene.paint.Color
import tornadofx.*

class ResultStyle : Stylesheet() {
    companion object {
        val button by cssclass()
        val viewport by cssclass()
        val thumb by cssclass()
        val scrollBar by cssclass("scroll-bar")
        val progressBar by cssclass("progress-bar")
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
        progressBar {
            child(".track") {
                backgroundColor += Color.BLACK
            }
            child(".bar") {
                backgroundColor += Styles.primaryColor
                backgroundInsets = multi(box(3.px))
            }
        }
    }
}