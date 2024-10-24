# La Jama

# Proyecto Lajama

## Antecedentes
El Restaurante La Jama es un emprendimiento familiar que lleva casi 3 años en el mercado, surgido durante la pandemia gracias a la visión emprendedora y las ganas de salir adelante de Cristian, su CEO y fundador. Bajo su liderazgo, han logrado expandirse a 5 locales, de los cuales 4 son propios y 1 es franquicia. Sin embargo, esta rápida expansión ha generado ciertas limitaciones en la gestión operativa, complicando el manejo eficiente de la información de los restaurantes en tiempo real.

Para superar estos desafíos, se plantea la implementación de un Dashborad en línea, que optimice las operaciones, la facturación y la experiencia del cliente. Actualmente, cuentan con un sistema llamado VentaFácil, que aunque resulta útil en áreas como ventas, inventarios y administración, no está integrado, lo que significa que cada restaurante maneja sus procesos por separado. Esto dificulta la gestión eficiente, ya que VentaFácil no permite al gerente visualizar en tiempo real la información de ventas, el stock ni otros aspectos clave del manejo del negocio en todos los locales.

La implementación del Dashboard será una solución integral para centralizar la información y mejorar el control de los 5 restaurantes, optimizando su crecimiento y eficiencia.

## Equipo
* Daniela Barragán (Análisis de Datos)
* Fabián (Análisis de Datos)
* Jamil Vera(Diseño UX UI)
* Alejandro Lojano (Diseño UX UI)
* Bryan Freire (FullStack)
* Emilio del Hierro (FullStack)

## Descripción
Lajama es una aplicación web construida con React y Vite. Utiliza ESLint para el linting y Tailwind CSS para el diseño.

## Estructura del Proyecto
- .gitignore
- eslint.config.js
- index.html
- package.json
- postcss.config.js
- public/
    - docs/
    - images/
        - icons/
- README.md
- src/
    - App.jsx
    - assets/
    - components/
        - Logout.jsx
        - Pdf.jsx
    - constants/
        - index.js
    - index.css
    - main.jsx
    - pages/
        - Employee.jsx
        - Login.jsx
        - Main.jsx
-tailwind.config.js
-vite.config.js

## Instalación
1. Clonar el repositorio:
    ```sh
    git clone <https://github.com/EmesEmes/lajama.git>
    ```
2. Navegar al directorio del proyecto:
    ```sh
    cd lajama-react
    ```
3. Instalar las dependencias:
    ```sh
    npm install
    ```

## Scripts Disponibles
En el archivo `package.json`, se definen los siguientes scripts:

- **dev**: Inicia el servidor de desarrollo.
    ```sh
    npm run dev
    ```
- **build**: Construye la aplicación para producción.
    ```sh
    npm run build
    ```
- **lint**: Ejecuta ESLint para analizar el código.
    ```sh
    npm run lint
    ```
- **preview**: Previsualiza la aplicación construida.
    ```sh
    npm run preview
    ```

## Configuración de ESLint
La configuración de ESLint se encuentra en `eslint.config.js`. Utiliza los plugins `eslint-plugin-react`, `eslint-plugin-react-hooks` y `eslint-plugin-react-refresh`.

## Configuración de Vite
La configuración de Vite se encuentra en `vite.config.js`. Utiliza el plugin `@vitejs/plugin-react-swc`.

## Configuración de Tailwind CSS
La configuración de Tailwind CSS se encuentra en `tailwind.config.js`. Los estilos base, componentes y utilidades de Tailwind se importan en `src/index.css`.

## Dependencias
Las principales dependencias del proyecto son:
- `react`: ^18.3.1
- `react-dom`: ^18.3.1
- `react-router-dom`: ^6.27.0

Las dependencias de desarrollo incluyen:
- `@eslint/js`: ^9.13.0
- `@types/react`: ^18.3.11
- `@types/react-dom`: ^18.3.1
- `@vitejs/plugin-react-swc`: ^3.5.0
- `autoprefixer`: ^10.4.20
- `eslint`: ^9.13.0
- `eslint-plugin-react`: ^7.37.1
- `eslint-plugin-react-hooks`: ^5.0.0
- `eslint-plugin-react-refresh`: ^0.4.13

## Estructura de Archivos
- `src/`: Contiene el código fuente de la aplicación.
  - `App.jsx`: Componente principal de la aplicación.
  - `assets/`: Recursos estáticos.
  - `components/`: Componentes reutilizables.
    - `Logout.jsx`: Componente de cierre de sesión.
    - `Pdf.jsx`: Componente para visualizar PDFs.
  - `constants/`: Constantes utilizadas en la aplicación.
    - `index.js`: Archivo de constantes.
  - `index.css`: Estilos globales de la aplicación.
  - `main.jsx`: Punto de entrada de la aplicación.
  - `pages/`: Páginas de la aplicación.
    - `Employee.jsx`: Página de empleados.
    - `Login.jsx`: Página de inicio de sesión.
    - `Main.jsx`: Página principal.

## Licencia
Este proyecto es privado y no tiene una licencia especificada.

### Componente Login
El componente Login maneja la autenticación de usuarios.

Este componente renderiza un formulario de inicio de sesión y gestiona el proceso de inicio de sesión.
Valida la entrada del usuario, verifica las credenciales de usuarios,
y redirige al usuario según su rol.
 
`@component
@example
return (
    <Login />
)`
 
`@returns {JSX.Element}` El componente del formulario de inicio de sesión renderizado.
 
`@function`
`@name Login`
 
`@description`
- Escucha el evento de envío del formulario.
- Previene el comportamiento predeterminado del envío del formulario.
- Valida que ambos campos, nombre de usuario y contraseña, estén llenos.
- Verifica las credenciales contra una lista predefinida de usuarios.
- Muestra mensajes apropiados para campos vacíos o credenciales incorrectas.
- Redirige al usuario a la página correspondiente según su rol.
- Almacena la información del usuario actual en localStorage.

### Componente Main
El componente Login maneja la autenticación de usuarios.

Este componente renderiza un formulario de inicio de sesión y gestiona el proceso de inicio de sesión.
Valida la entrada del usuario, verifica las credenciales contra una lista predefinida de usuarios,
y redirige al usuario según su rol.

`@component
@example
return (
  <Login />
)`

`@returns {JSX.Element}` El componente del formulario de inicio de sesión renderizado.

@function
@name Login

@description
- Escucha el evento de envío del formulario.
- Previene el comportamiento predeterminado del envío del formulario.
- Valida que ambos campos, nombre de usuario y contraseña, estén llenos.
- Verifica las credenciales contra una lista predefinida de usuarios.
- Muestra mensajes apropiados para campos vacíos o credenciales incorrectas.
- Redirige al usuario a la página correspondiente según su rol.
- Almacena la información del usuario actual en localStorage.


### Componente Employee

El componente Employee renderiza el diseño principal para la página del empleado.
Incluye una barra lateral con opciones de navegación y un área de contenido principal
que muestra varios manuales en PDF.
 
`@componente
@ejemplo
return (
  <Employee />
)`
 
`@returns {JSX.Element}` El componente Employee renderizado.
