import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

buildscript {
    repositories {
        jcenter()
        maven {
            setUrl("https://plugins.gradle.org/m2/")
            setUrl("https://sandec.jfrog.io/artifactory/repo")
        }
        gradlePluginPortal()
    }

    dependencies {
        classpath("com.sandec.jpro:jpro-plugin-gradle:2021.2.1")
        classpath("org.openjfx:javafx-plugin:0.0.10")
    }
}

apply(plugin = "com.sandec.jpro")

plugins {
    kotlin("jvm") version "1.4.32"
    application
    id("org.openjfx.javafxplugin") version "0.0.10"
}
group = "com.kst.wordamentresolver"
version = "1.0-SNAPSHOT"

val tornadofx_version: String by rootProject

repositories {
    mavenCentral()
    jcenter()
    maven(url = "https://sandec.jfrog.io/artifactory/repo")
}

javafx {
    version = "15.0.1"
    modules("javafx.base", "javafx.graphics", "javafx.controls", "javafx.fxml", "javafx.media", "javafx.web")
}

application {
    mainClassName = "com.kst.wordamentresolver.MainKt"
}

dependencies {
    implementation("no.tornado:tornadofx:$tornadofx_version")
    testImplementation(kotlin("test-junit"))
}

tasks {
    compileKotlin {
        sourceCompatibility = "11"
        kotlinOptions.jvmTarget = "11"
    }
    compileTestKotlin {
        sourceCompatibility = "11"
        kotlinOptions.jvmTarget = "11"
    }

}

configure<com.sandec.jpro.JProExtension> {
    port = 8080
}