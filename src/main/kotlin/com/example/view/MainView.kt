package com.example.view

import tornadofx.*

class MainView : View("Wordament Resolver") {
    override val root = borderpane {
        center<BoardView>()
        right<ResultView>()
    }
}