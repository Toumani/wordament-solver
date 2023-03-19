package com.toumanisidibe.wordamentsolver

import com.toumanisidibe.wordamentsolver.model.Board
import com.toumanisidibe.wordamentsolver.model.BoardBox
import com.toumanisidibe.wordamentsolver.plugins.configureRouting
import com.toumanisidibe.wordamentsolver.plugins.configureSerialization
import io.ktor.serialization.jackson.*
import io.ktor.http.*
import kotlin.test.*
import io.ktor.client.request.*
import io.ktor.client.statement.*
import io.ktor.server.testing.*
import io.ktor.client.plugins.contentnegotiation.*

class RouteTest {
	@Test
	fun testResolve() = testApplication {
		application {
			configureRouting()
			configureSerialization()
		}
		val client = createClient {
			install(ContentNegotiation) { jackson { } }
		}
		val loginResponse = client.post("/board") {
			contentType(ContentType.Application.Json)
			setBody(Board(listOf(
				BoardBox(0, 0, "S"), BoardBox(1, 0, "E"), BoardBox(4, 0, "S"), BoardBox(3, 0, "E"),
				BoardBox(0, 1, "E"), BoardBox(1, 1, "S"), BoardBox(4, 1, "E"), BoardBox(3, 1, "S"),
				BoardBox(0, 2, "S"), BoardBox(1, 2, "E"), BoardBox(4, 2, "S"), BoardBox(3, 2, "E"),
				BoardBox(0, 3, "E"), BoardBox(1, 3, "S"), BoardBox(4, 3, "E"), BoardBox(3, 3, "S"),
			)))
		}
		assertEquals(HttpStatusCode.OK, loginResponse.status)
		println(loginResponse.bodyAsText())
	}
}