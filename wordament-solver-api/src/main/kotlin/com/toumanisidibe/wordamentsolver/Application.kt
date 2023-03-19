package com.toumanisidibe.wordamentsolver

import io.ktor.server.application.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import com.toumanisidibe.wordamentsolver.plugins.*

const val NB_COLS = 4
const val NB_ROWS = 4

fun main() {
	embeddedServer(Netty, port = 8080, host = "0.0.0.0", module = Application::module)
		.start(wait = true)
}

fun Application.module() {
	configureCors()
	configureSerialization()
	configureRouting()
}
