package com.toumanisidibe.wordamentsolver.plugins

import com.toumanisidibe.wordamentsolver.Services
import com.toumanisidibe.wordamentsolver.model.Board
import io.ktor.server.routing.*
import io.ktor.server.application.*
import io.ktor.server.http.content.*
import io.ktor.server.response.*
import io.ktor.server.request.*

fun Application.configureRouting() {

	routing {
		static("/") {
			staticBasePackage = "dist"
			resources(".")
			defaultResource("index.html")
		}

		post("/board") {
			val board = call.receive<Board>()
			val words = Services.resolve(board)
			call.respond(words)
		}
	}
}