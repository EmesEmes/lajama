# La Jama

# Proyecto Lajama

## Descripción
Lajama es una aplicación web construida con React y Vite. Utiliza ESLint para el linting y Tailwind CSS para el diseño.

## Estructura del Proyecto
.gitignore
eslint.config.js
index.html
package.json
postcss.config.js
public/
    docs/
    images/
        icons/
README.md
src/
    App.jsx
    assets/
    components/
        Logout.jsx
        Pdf.jsx
    constants/
        index.js
    index.css
    main.jsx
    pages/
        Employee.jsx
        Login.jsx
        Main.jsx
tailwind.config.js
vite.config.js

## Instalación
1. Clona el repositorio:
    ```sh
    git clone <URL_DEL_REPOSITORIO>
    ```
2. Navega al directorio del proyecto:
    ```sh
    cd lajama-react
    ```
3. Instala las dependencias:
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