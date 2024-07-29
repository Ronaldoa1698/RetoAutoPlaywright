@Login
Feature: El usuario inicia sesión con credenciales correctas e incorrectas

    Background: El usuario inicia sesión.
        Given El usuario se encuentra en la página de inicio de sesión

    Scenario: El usuario inicia sesión con credenciales correctas
        When El usuario ingresa las credenciales "<USERNAME>" y "<PASSWORD>"
        Then El usuario inicia sesión correctamente

        Examples:
        |   USERNAME      |   PASSWORD |
        |   Admin         |   admin123 |
    
    Scenario: El usuario inicia sesión con credenciales incorrectas
        When El usuario ingresa las credenciales "<USERNAME>" y "<PASSWORD>"
        Then El usuario no inicia sesión

        Examples:
        |   USERNAME      |   PASSWORD |
        |   we12ssr       |   admssin1 |
