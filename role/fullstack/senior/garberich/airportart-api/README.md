# Instrucciones carpeta airport-api

## Estado
Este proyecto no alcanzó a ser desplegado en un contenedor, por lo que para probarlo se deben seguir las siguientes instrucciones


## Instrucciones de ejecución
Navegar por medio de la consola a la carpeta **garberich/airportart-api/** y ejecutar en la consola el siguiente comando

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

Volver a la carpeta **garberich/airportart-api/** y ejecutar el comando

```
npm start
```

Aparecerá un mensaje en la consola que indica:

```
Servidor corriendo en el puerto 3000
Connect to BD
```

### Ejecución punto 7
Abrir Postman y realizar el siguiente request utilizando el método **GET**

```
http://localhost:3000/api/airtport/move/3/2
```
En este request se envían los parámetros **idairport** y **idoperator** que corresponden así:

> **idairport** Es el id del aeropuerto al que le quiero cambiar el operador. Para el ejemplo se envía el id 3
> **idoperator** Es el operador que se desea asignar. Para el ejemplo se envía el id 2

### Ejecución punto 8
Abrir Postman y realizar el siguiente request utilizando el método **POST**

```
http://localhost:3000/api/airtport/change_order
```
En la pestaña **Body** se envía la información del aeropuerto al que se le quiere cambiar la prioridad y la prioridad que se quiere asignar. Como muestra el siguiente ejemplo

```
[
    {
        "airportId": 1,
        "priorityOrder": 3
    },
    {
        "airportId": 9,
        "priorityOrder": 5
    }
]
```

