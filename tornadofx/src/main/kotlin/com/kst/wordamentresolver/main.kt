package com.kst.wordamentresolver

import com.jpro.webapi.JProApplication
import javafx.stage.Stage

class MainKt : JProApplication() {
    val app = MyApp()

    override fun start(primaryStage: Stage) {
        app.start(primaryStage)
    }

    override fun stop() {
        app.stop()
        super.stop()
    }

}