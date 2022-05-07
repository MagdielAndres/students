# Code Challenge - Esponer cierta información de los estudiantes.

## Dependencias que se utilizarón.
1. Dependeica Jest
    Es una dependencia que nos ayuda escribir y ejecutar los test unitarios dentro de nuestro proyecto.
    * Instalación de la dependencia:
      ```
      npm instal --save-dev jest
      ```
    * Configuración en package.json, se agrega el siguiente script para correr el test unitario:
      ```
      "test": "node ./node_modules/jest/bin/jest.js"
      ```
    * Escriba  en su terminal lo siguiente para ejecutar el test unitario:
      ```
      npm test "Aquí se escribe la ruta del archivo que se va probar el test"
      ```
      por ejemplo el del proyecto para el archivo Reader.test.js:
      ```
      npm test test/reader/Reader.test.js
      ```
2. Dependecia express
    Es una framwork que nor permite crear server y a exponer información con método HTPP (GET, POST, PUT, DELETE).
    * Método HTPP:
        - GET: Lo que hace es regresar informacón
        - POST: Lo que hace es persistir información
        - PUT: lo que hace es Actualizar la informacón
        - DELETE: lo que hace es Eliminar cierta información
    * Instalación de la dependecia:
        ```
        npm install express --save
        ```
    * Agregando en el package.json el siguiente script para poder correr el server:
        ```
        "server": "node ./Aquí va la ruta de nuestro server/Aqí va el nombre de nuestro server con su extención"
        ```
    * Ejemplo con el server del proyecto:
        ```
        "server": "node ./lib/server.js"
        ```
    * Como ejecutar el server:
        ```
        npm run server
        ```
npm install express --save



3. npm install eslint --save-dev
## Explica el diseño de tus componentes.
## Explica tu API: cómo consultarla, qué formato va a responder, incluye ejemplos etc

graph TD;
    A-->B;
    A-->C;
    B-->D;
    C-->D;