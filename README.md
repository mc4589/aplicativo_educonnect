# EduConnect

## Colaboradores

* Marco Antonio Chacón Yépez
* Alex Patricio Quishpe Salgado

## Descripción
EduConnect es una plataforma de red social académica diseñada para conectar estudiantes y docentes. Ofrece un espacio donde la comunidad educativa puede colaborar, compartir conocimientos y desarrollar relaciones académicas significativas. EduConnect permite la creación y gestión de publicaciones y comentarios, facilitando la comunicación y el intercambio de ideas en un entorno seguro y estructurado.

## Características
Gestión de Publicaciones: Los usuarios pueden crear y gestionar publicaciones con títulos, descripciones y contenido adicional.

Gestión de Comentarios: Los usuarios pueden comentar en publicaciones, fomentando el diálogo y la colaboración.

Gestión de Usuarios: Los administradores pueden gestionar la lista de usuarios registrados, incluyendo la eliminación de usuarios.

Persistencia de Datos: Utiliza localStorage para almacenar publicaciones y comentarios, asegurando que los datos persistan entre sesiones.

## Requisitos mínimos
Node.js versión 14 en adelante

npm versión 6 en adelante

React versión 17 en adelante

Material UI versión 5 en adelante

## Instalación

Ejcutamos los siguientes comando en cmd o la terminal de PowerShell:

Clonamos el repositorio:

git clone https://github.com/mc4589/educonnect.git
Navega al directorio del proyecto:

Navegamos a la carpeta del proyecto
cd educonnect
Instala las dependencias:

Instalamos dependencias de react:

npm install

Ejecución para iniciar el servidor de desarrollo:


npm start
Abre http://localhost:3000 en tu navegador para ver la aplicación en funcionamiento.

## Estructura del Proyecto
src/

components/: Componentes reutilizables de la interfaz de usuario.

context/: Contextos de React para gestionar el estado global.

pages/: Páginas principales de la aplicación.

Inicio.tsx: Página de bienvenida.

AcercaDe.tsx: Página de información sobre el proyecto.

Publicaciones.tsx: Página de gestión de publicaciones.

Admin.tsx: Página de administración.

services/: Servicios para interactuar con localStorage.

types/: Definiciones de tipos TypeScript.

App.css: Archivo de estilos globales.

App.tsx: Componente principal de la aplicación.

index.tsx: Punto de entrada de la aplicación.

## Uso de la aplicación

### Inicio de sesión

Ejecutar el proyecto con localhost:3000

Registrarse como usuario o como publicador en la venta de autenticación

Hacer click en guardar

Iniciar sesión con las credenciales almacenadas.

### Credenciales para probar la aplicación

Publicadores:
usuario: usuario1    contraseña: 1234
usuario: usuario2    contraseña: 1234
usuario: usuario3    contraseña: 1234
usuario: usuario4    contraseña: 1234
usuario: usuario5    contraseña: 1234

Administradores:
usuario: administrador1 contraseña: 1234

### Roles de publicador

Agregar publicaciones
Agregar comentarios

### Roles del administrador

Eliminar usuarios 
Eliminar publicaciones
Eliminar comentarios

En la interfaz de la aplicación para administradores aparece la subpágina Admin.


### Gestión de Publicaciones
Navegamos a la página de Publicaciones.

Completar el formulario para añadir una nueva publicación.

Hacer clic en "Añadir Publicación".

### Gestión de Comentarios
Navegar a una publicación específica.

Completar el campo para añadir un comentario.

Hacer clic en "Publicar".

### Gestión de Usuarios (Admin)
Navegar a la página de Administración.

Revisar la lista de usuarios registrados.

Usar el botón "Eliminar" para borrar un usuario.

