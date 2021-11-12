package com.example.view

import tornadofx.*

class MainView : View("Wordament Resolver") {
    override val root = borderpane {
        top<HeaderView>()
        center<BoardView>()
        right<ResultView>()
    }
}