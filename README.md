## Instalación y Ejecución de Pruebas

### Instalar las dependencias necesarias para la ejecución de Playwright

- Ejecutar el siguiente comando para instalar las dependencias:
  npm i

### Ejecución de pruebas

- Ejecutar el siguiente comando para ejecutar las pruebas:
  npm run testing

## Versiones

- **Versión de npm:** 8.19.3
- **Versión de node:** 18.12.1

## Patrón de diseño

- **Patrón de diseño utilizado:** Page Object Model (POM)

## Técnica de Pruebas

- **Técnica de pruebas utilizada:** Tabla de Decisiones


CASOS DE PRUEBA:
# Casos de Prueba: Registro de empleado en OrangeHRM

## Caso de prueba 1: Inicio de sesión exitoso

- **Descripción:** Verificar que el usuario puede iniciar sesión con credenciales correctas.
- **Pasos:**
  1. Navegar a la página de inicio de sesión.
  2. Ingresar el nombre de usuario "Admin".
  3. Ingresar la contraseña "admin123".
  4. Hacer clic en el botón de inicio de sesión.
- **Resultado esperado:** El usuario inicia sesión correctamente y se redirige a la página principal del sistema.

## Caso de prueba 2: Inicio de sesión fallido

- **Descripción:** Verificar que el usuario no puede iniciar sesión con credenciales incorrectas.
- **Pasos:**
  1. Navegar a la página de inicio de sesión.
  2. Ingresar el nombre de usuario "we12ssr".
  3. Ingresar la contraseña "admssin1".
  4. Hacer clic en el botón de inicio de sesión.
- **Resultado esperado:** El usuario no puede iniciar sesión y se muestra un mensaje de error indicando que las credenciales son incorrectas.

## Caso de prueba 3: Creación de un nuevo empleado

- **Descripción:** Verificar que el administrador puede crear un nuevo empleado.
- **Pasos:**
  1. Iniciar sesión en OrangeHRM con credenciales de administrador.
  2. Hacer clic en el menú PIM.
  3. Hacer clic en el botón "Add Employee".
  4. Ingresar los detalles del nuevo empleado: 
     - Nombre: Ronaldo
     - Segundo nombre: Testing
     - Apellido: Prueba
  5. Hacer clic en el botón "Save".
  6. Buscar el empleado creado por el nombre "Ronaldo".
- **Resultado esperado:** El nuevo empleado "Ronaldo Testing" es creado exitosamente y se puede encontrar en el sistema al buscar por su nombre.
