# Instrucciones del repositorio

## Software necesario
Para poder ejecutar las aplicaciones es necesario que el computador tenga instalado
- Docker
- Docker Compose
- Node
- NPM
- Postman (o culaquier otra herramienta para realizar peticiones http)
- Software de gestión de base de datos (DBeaver, Heidi, etc)

## Estructura
El repositorio tiene 3 carpetas

1- airport-api
2- airport-web
3- docker

En cada carpeta se encuentra un archivo **README** con instrucciones específicas para cada carpeta

### Tareas completadas
Las siguientes son las tareas con las que me comprometí y su estado final

**Tareas Backend**

1-Desplegar una base de datos de MySQL. **Completada**
2-Desplegar una instancia de Directus, la cual se conecte al contenedor de MySQL que fue desplegado en la tarea #1. **Completada**
3-Desplegar una instancia de Flyway, la cual se conecte al contenedor de MySQL y cree por medio de un archivo de migración las tablas **Completada**
4-Crear un nuevo archivo de migración que genere datos de prueba para cada una de las tablas **Completada**
6-Crear un proyecto de node.js usando TypeScript usando el nombre "airportart-api" **Completada**
7-Crear un endpoint en node.js que permita mover aeropuertos de un operador a otro. **Completada**
8-Crear un endpoint en node.js que permita actualizar el orden de prioridad de dos o más aeropuertos de forma simultánea **Completada**

**Tareas Frontend**
5-Crear un proyecto de vue.js usando TypeScript usando el nombre "airportart-web" **Completada**
9- Actualizar la aplicación "airportart-web" para que se conecte al API de Directus corriendo en un contenedor de docker y muestre una lista de los aeropuertos **Completada**
10-Las tarjetas deben dibujarse en el orden determinado por el campo Airport.PriorityOrder **NO Completada**
11-Las tarjetas deben dibujarse en pantalla usando una grilla (grid) que permita desplegar cuantas tarjetas quepan horizontalmente y luego iniciar en la siguiente línea de acuerdo al tamaño del navegador. **NO Completada**

**Tareas Extras**
18-Extra: Crear un archivo de docker que despliegue MySQL. **Completada**
19-Extra: Crear un archivo de docker que despliegue Directus. **Completada**
20-Extra: Crear un archivo de docker que despliegue FlyWay. **Completada**
21-Extra: Crear un archivo de docker que despliegue el API "airportart-api". **NO Completada**
22-Extra: Crear un archivo de docker que despliegue el web "airportart-web". **NO Completada**
23-Extra: Crear un archivo de docker-compose que combine todos los archivos de docker en un solo sistema de contenedores conectados. **Parcialmente completada** 
    > Se creó el archivo que despliega MySQL, FlyWay y Directus.