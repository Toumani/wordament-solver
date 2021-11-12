package com.example.view

import com.example.style.ResultStyle
import javafx.scene.paint.Color
import javafx.scene.text.FontWeight
import tornadofx.*

class HeaderView : View() {
    override val root = hbox {
        text("WORDAMENT RESOLVER") {
            style {
                fontSize = 28.px
                fontWeight = FontWeight.BOLD
                fontFamily = "Segoe"
                fill = Color.WHITE
            }
        }
        style {
            padding = box(20.px)
            backgroundColor += ResultStyle.resultBackgroundColor
        }
    }
}