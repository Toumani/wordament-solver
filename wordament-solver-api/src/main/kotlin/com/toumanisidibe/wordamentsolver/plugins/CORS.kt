package com.toumanisidibe.wordamentsolver.plugins

import io.ktor.http.*
import io.ktor.server.application.*
import io.ktor.server.plugins.cors.routing.*

fun Application.configureCors() {
	install(CORS) {
		headers
		allowMethod(HttpMethod.Get)
		allowMethod(HttpMethod.Post)
		allowMethod(HttpMethod.Put)
		allowMethod(HttpMethod.Delete)
		allowMethod(HttpMethod.Options)
		allowMethod(HttpMethod.Patch)

		allowHeader(HttpHeaders.Authorization)
		allowHeader(HttpHeaders.ContentType)
		allowHeader(HttpHeaders.AccessControlAllowOrigin)
		allowHeader(HttpHeaders.Accept)
		allowHeader(HttpHeaders.AcceptLanguage)
		allowHeader(HttpHeaders.AcceptCharset)
		allowHeader(HttpHeaders.AcceptEncoding)
		allowNonSimpleContentTypes = true
		allowHost("localhost:3000", listOf("http"))
	}
}