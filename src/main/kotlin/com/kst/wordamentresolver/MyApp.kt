package com.kst.wordamentresolver

import com.kst.wordamentresolver.style.ResultStyle
import com.kst.wordamentresolver.style.TileStyle
import com.kst.wordamentresolver.view.MainView
import javafx.scene.Scene
import javafx.stage.Stage
import tornadofx.App
import tornadofx.FX
import tornadofx.importStylesheet
import tornadofx.reloadStylesheetsOnFocus

class MyApp: App(MainView::class) {
    companion object {
        val dictionaryWords: List<String> = MyApp::class.java.getResource("/english-words.txt")?.readText()?.split("\n")!!

        val letterFrequency = mapOf(
            "E" to 11.1607,
            "A" to 8.4966,
            "R" to 7.5809,
            "I" to 7.5448,
            "O" to 7.1635,
            "T" to 6.9509,
            "N" to 6.6544,
            "S" to 5.7351,
            "L" to 5.4893,
            "C" to 4.5388,
            "U" to 3.6308,
            "D" to 3.3844,
            "P" to 3.1671,
            "M" to 3.0129,
            "H" to 3.0034,
            "G" to 2.4705,
            "B" to 2.0720,
            "F" to 1.8121,
            "Y" to 1.7779,
            "W" to 1.2899,
            "K" to 1.1016,
            "V" to 1.0074,
            "X" to 0.2902,
            "Z" to 0.2722,
            "J" to 0.1965,
            "Q" to 0.1962,
        )
    }

    override fun start(stage: Stage) {
        val scene = Scene(MainView().root)
        importStylesheet(Styles::class)
        importStylesheet(ResultStyle::class)
        importStylesheet(TileStyle::class)
        FX.applyStylesheetsTo(scene)
        stage.scene = scene
        stage.show()
    }

    init {
        reloadStylesheetsOnFocus()
    }
}