## Actualizar npm
 C:\Angular\ `npm install -g npm/latest`

## Borrar cache
C:\Angular\ `npm cache clean --force `
## Desactivar auditorias de npm para evitar fallas
C:\Angular\ `npm set audit false `
## Desisnstalar los paquetes anteriores de Angilar-CLI
C:\Angular\ `npm uninstall -g angular-cli `
C:\Angular\ `npm uninstall -g @angular/cli `

## Borra cache de npm nuevamente
C:\Angular\ `npm cache clean --force `

## Instalar la última versión de angular-cli
C:\Angular\ `npm install -g @angular/cli@latest `

## Para instalar express en modo global
C:\Angular\ `npm install -g express `
C:\Angular\ `nnpm install -g express-generator `
## Instalar bootstrap
C:\Angular\ `nnpm install bootstrap `
## como bootstrap depende de otras librerias
## jquery y papper.js, instalamos todo
C:\Angular\ `nnpm install bootstrap jquery pappers.js`



## Creando el servidor
## Usando express y Node
## Creo carpeta server
C:\Angular\entidad> `mkdir server `
C:\Angular\entidad> `cd server `

## crear el archivo package.json
C:\Angular\entidad\server> ` npm init --yes`

## instalo los módulos que usaremos
C:\Angular\entidad\server> ` npm i express morgan promise-mysql cors`
## Crear carpeta src

C:\Angular\entidad\server> ` mkdir src `

C:\Angular\entidad\server> ` cd src`
## creamos un archivo index.ts
## Instalamos typescript
C:\Angular\entidad\server>` npm install -g typescript`
## necesitamos el archivo tsconfig.json
## lo creamos con
C:\Angular\entidad\server> ` tsc --init`
message TS6071: Successfully created a tsconfig.json file.
## verificamos que "target": "es6",
## y "OutDir":"./build",

## INstalo nodemon en modo desarrollo
C:\Angular\entidad\server> ` npm i nodemon -D`

## Dentro de packaje.json debe quedar

##  "script":{
##      "build":"tsc -w",
##      "dev":"nodemon build/index.js",
##  }


## Abrir dos terminales
## npm verifica los cambios de  archivos y compila
C:\Angular\entidad\server> `npm run build`

## 
C:\Angular\entidad\server> `npm run dev`


## Como VSC no entiende el módulo express 
## instalamos otros módulos llamados @types solo para desarrollo
C:\Angular\entidad\server> `npm i @types/express -D`
## lo mismo pasa con morgan y cors

C:\Angular\entidad\server> `npm i @types/morgan @types/cors -D`

## ahora importo expres
`import express from 'express'; `


##   CLIENTE

` npm i --s @angular/material @angular/cdk @angular/animations`
## Agregamos hojas de estilo en style.css
` @import '@angular/material/prebuilt-themes/indigo-pink.css';`
## Agreguemos hoja de estilo para iconos en index.html

<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

