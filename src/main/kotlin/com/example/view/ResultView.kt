package com.example.view

import tornadofx.*

class ResultView : View() {
    override val root = vbox {
        button("Resole !") {  }
        label("Results :") {
            style {
                fontSize = 28.px
            }
        }
        flowpane {
            for (i in 1..100) {
                text(i.toString()) {
                    wrappingWidth = 200.0
                }
            }
            vgap = 40.0
        }
        spacing = 20.0
        padding = insets(20, 0, 0, 0)
        prefWidth = 800.0
    }
}