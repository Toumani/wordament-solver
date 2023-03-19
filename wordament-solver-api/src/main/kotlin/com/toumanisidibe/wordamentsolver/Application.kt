package com.toumanisidibe.wordamentsolver

import io.ktor.server.application.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import com.toumanisidibe.wordamentsolver.plugins.*

const val NB_COLS = 4
const val NB_ROWS = 4

fun main() {
	embeddedServer(Netty, port = System.getenv("PORT")?.toIntOrNull() ?: 8080, host = "0.0.0.0", module = Application::module)
		.start(wait = true)
}

fun Application.module() {
	val devMode = System.getenv("DEV")
	if (devMode != null && devMode == "true")
		configureCors()
	configureSerialization()
	configureRouting()
}
