package com.example

import com.example.style.TileStyle
import com.example.view.MainView
import tornadofx.App
import tornadofx.reloadStylesheetsOnFocus

class MyApp: App(MainView::class, Styles::class, TileStyle::class) {
    companion object {
        val dictionaryWords: List<String> = MyApp::class.java.getResource("/english-words.txt")?.readText()?.split("\n")!!
    }

    init {
        reloadStylesheetsOnFocus()
    }
}