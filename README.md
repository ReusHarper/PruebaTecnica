# Prueba Técnica

Esta prueba técnica consiste en desarrollar una aplicación web con las siguientes características:

- Desarrollar la prueba con React.js e implementar Bootstrap.
- Implementar Axios / CURL / Fetch para consumo de Web Services.
- Subir la prueba en un repositorio de GitHub.

## Descripción

La aplicación se conectará con la siguiente API: https://api.devdicio.net:8444/v1/sec_dev_interview/

Para visualizar la información del servicio, se adjunta el archivo swagger que puedes visualizar en [Swagger Editor](https://editor.swagger.io).

Para las solicitudes a la API, se deben agregar los siguientes headers:

```json
{
    "Content-Type" : "application/json",
    "Host

"

         : "api.devdicio.net",
    "xc-token"     : "J38b4XQNLErVatKIh4oP1jw9e_wYWkS86Y04TMNP"
}
```

La aplicación tendrá 2 secciones principales:

1. **Alta de usuario con foto**: Se debe construir un formulario para un registro de usuarios con las características mencionadas más adelante.
2. **Visualización de datos**: Se debe visualizar la información de los usuarios ya registrados.

### Alta de Usuario

El formulario de registro de usuarios debe contener los siguientes campos con sus respectivas validaciones:

- Nombre (Campo no vacío y solo letras)
- Apellido Paterno (Campo no vacío y solo letras)
- Apellido Materno (Campo no vacío y solo letras)
- Email (Formato de email)
- Fecha de Nacimiento (AAAA-MM-DD)
- Datos:
  - Calle (Campo no vacío y solo letras)
  - Numero (Campo no vacío y solo números)
  - Colonia (Campo no vacío)
  - Delegación/Municipio (Campo no vacío)
  - Estado (Campo no vacío y solo letras)
  - CP (Campo no vacío y solo números)

Además, el usuario deberá tomar una foto desde la cámara y realizar lo siguiente:

- Poner una guía para centrar el rostro.
- Para el envío al web service, la foto se debe enviar en base64 y tener formato png. Además, se debe recortar la imagen, puede ser manual (el usuario lo gestione el recorte) o automático desde el centro de 300x300.

### Visualización de Datos

En un menú/pestaña/popup se debe mostrar la información guardada en una tabla con todos los usuarios, incluyendo información personal y fotografía. Debe haber un filtro de búsqueda por nombre.

### Edición de Datos (Opcional)

Una sección donde se pueda editar la información de los usuarios registrados.

## Consideraciones

1. Se debe construir en React JS y hacer uso de hooks.
2. Crear README con lo solicitado de las instrucciones.
3. Diseño responsivo y patrones de diseño.
4. Buen uso de git (commits bien definidos y documentados).
