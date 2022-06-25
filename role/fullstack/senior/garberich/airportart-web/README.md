# Instrucciones carpeta airport-web

## Estado
Este proyecto no alcanzó a ser desplegado en un contenedor, por lo que para probarlo se deben seguir las siguientes instrucciones


## Instrucciones de ejecución
Navegar por medio de la consola a la carpeta **garberich/airportart-web/** y ejecutar en la consola el siguiente comando

```
npm install
```

> Este comando instalará las dependencias necesarias para poder ejecutar el proyecto

Navegar hasta la carpeta **garberich/docker/all/** de este mismo repositorio y ejecutar el comando

```
docker-compose up -d
```

> Este comando levantará la instancia de MySQL y creará las tablas necesarias, además de insertar datos de prueba. También levantará la instancia de **Directus**

Con el software de gestión de bases de datos se puede abrir la conexión a la Base de Datos y administrarla de forma gráfica.

Los datos de conexión son:

```
Server/Hostname: localhost
Puerto: 3306
User: root
Password: P@ssw0rd
Database: airportart
```

En el navegador ir a la URL

> http://localhost:8055/admin/login

Ingresar los datos de acceso:
**Email**: admin@admin.com
**Password**: admin

Dentro de Directus se debe crear el DataModel para la tabla de Airport, para eso realizar los siguientes pasos

### Instrucciones Directus
- En la barra lateral dar click en **Settings**
- Dar click en **Data Model**
- Seleccionar la tabla **Airport**
- En la barra lateral dar click en **Content**, donde debe aparecer la tabla **Airport**
- En la barra lateral dar click en **Settings**
- Entrar a la opción **Roles & Permissions**
- Seleccionar **Public**
- Habilitar la opción de lectura para la colección **Airport**
- Abrir Postman y realizar un request, usando el método GET, hacia el endpoint **http://localhost:8055/items/Airport?sort=PriorityOrder**
- Con este request estamos consumiendo la API de Directus y estamos ordenando los aeropuertos por el campo PriorityOrder

Volver a la carpeta **garberich/airportart-web/** y ejecutar el comando

```
npm serve
```

Aparecerá un mensaje en la consola que indica:

```
App running at:
Local: http://localhost:8080/
```

### Ejecución punto 9
Abrir en el navegador la URL **http://localhost:8080/**

Por el momento solo se visualiza el nombre de cada aeropuerto, ordenados por el campo **PriorityOrder**



