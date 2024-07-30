@Reto
Feature: Registro de empleado en OrangeHRM

    Background: El usuario inicia sesión.
        Given El usuario se encuentra en la página de inicio de sesión

    @LoginSuccess
    Scenario: El usuario inicia sesión con credenciales correctas
        When El usuario ingresa las credenciales "<USERNAME>" y "<PASSWORD>"
        Then El usuario inicia sesión correctamente

        Examples:
        |   USERNAME      |   PASSWORD |
        |   Admin         |   admin123 |
    
    @LoginFail
    Scenario: El usuario inicia sesión con credenciales incorrectas
        When El usuario ingresa las credenciales "<USERNAME>" y "<PASSWORD>"
        Then El usuario no inicia sesión

        Examples:
        |   USERNAME      |   PASSWORD |
        |   we12ssr       |   admssin1 |

    @CreateEmployee
    Scenario: El usuario crea un nuevo empleado
        Given El admin está logueado en OrangeHRM
        And Hace clic en el menú PIM
        And Hace clic en el botón Add Employee
        When El usuario ingresa los detalles del nuevo empleado "<FIRSTNAME>", "<MIDDLENAME>", "<LASTNAME>"
        And Hace clic en el botón Save
        And El nuevo empleado "<FIRSTNAME>" "<MIDDLENAME>" es creado exitosamente
        And busca el empleado creado por el nombre "<FIRSTNAME>"
        Then El nuevo empleado "<FIRSTNAME>" "<MIDDLENAME>" es encontrado
            
        Examples:
        | FIRSTNAME | MIDDLENAME | LASTNAME  |
        | Juan      | Testing    | Prueba    |