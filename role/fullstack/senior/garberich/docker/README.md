# Instrucciones carpeta docker

Esta carpeta tiene 3 subcarpetas

- directus
- flyway
- mysql
- all

## Carpeta directus
Entrar a la carpeta **garberich/docker/directus/** y ejecutar el comando

```
docker-compose up -d
```

Este comando levanta una instancia de MySQL, sin tablas ni datos, y levanta una instancia de Directus y la asocia a la base de datos de MySQL

Con el software de gestión de bases de datos se puede abrir la conexión a la Base de Datos y administrarla de forma gráfica.

Los datos de conexión son:

```
Server/Hostname: localhost
Puerto: 3306
User: root
Password: airportart_root_pass
Database: airportart
```

En el navegador ir a la URL

> http://localhost:8055/admin/login

Ingresar los datos de acceso:
**Email**: admin@admin.com
**Password**: admin


## Carpeta flyway
Entrar a la carpeta **garberich/docker/flyway/** y ejecutar el comando

```
docker-compose up -d
```

Este comando levanta una instancia de MySQL y ejecuta las migraciones encargadas de crear las tablas y poblarlas con datos de prueba

Con el software de gestión de bases de datos se puede abrir la conexión a la Base de Datos y administrarla de forma gráfica.

Los datos de conexión son:

```
Server/Hostname: localhost
Puerto: 3306
User: root
Password: P@ssw0rd
Database: airportart
```

## Carpeta mysql
Entrar a la carpeta **garberich/docker/mysql/** y ejecutar el comando

```
docker-compose up -d
```

Este comando levanta una instancia de MySQL y crea una base de datos vacía

Con el software de gestión de bases de datos se puede abrir la conexión a la Base de Datos y administrarla de forma gráfica.

Los datos de conexión son:

```
Server/Hostname: localhost
Puerto: 3306
User: root
Password: userpw
Database: airportart
```

## Carpeta all
Entrar a la carpeta **garberich/docker/all/** y ejecutar el comando

```
docker-compose up -d
```

Este comando levanta una instancia de MySQL, crea las tablas y las pobla de datos, además de que levanta una instancia de Directus y la asocia a la base de datos

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