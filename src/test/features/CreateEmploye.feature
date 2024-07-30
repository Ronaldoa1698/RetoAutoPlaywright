@CreateEmploye
Feature: El usuario crea un nuevo empleado

    Background: El usuario inicia sesión.
        Given El usuario se encuentra en la página de inicio de sesión
        When El usuario ingresa las credenciales Admin y admin123
        Then El usuario inicia sesión correctamente

    Scenario: El usuario crea un nuevo empleado
            Given El usuario está en la página del dashboard
            When El usuario navega a la página de creación de empleados
            And El usuario ingresa los detalles del nuevo empleado "<FIRSTNAME>", "<MIDDLENAME>" ,"<LASTNAME>"
            And El usuario guarda los detalles del empleado
            Then El nuevo empleado es creado exitosamente

            Examples:
            | FIRSTNAME | MIDDLENAME | LASTNAME   |
            | Juan      | Perez      | 12345      |
