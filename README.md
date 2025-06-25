# API Gestor de Eventos

API RESTful desarrollada en Node.js + Express para gestionar eventos en diferentes salas, garantizando que no haya conflictos de horarios dentro de la misma sala.

## Requisitos Previos

- Node.js instalado (versión 14 o superior)
- Postman para consumir los endpoints configurado en HEADERS: Content-Type -> application/json
- Git (opcional para clonar el proyecto)

## 🚀 Instalación

Clona el repositorio:

```bash
git clone https://github.com/bikejojo/time_events.git
```

Entra al proyecto:

``` bash
cd time_events
```

Instala las dependencias:

```bash
npm install
```

## Cómo levantar la API

En modo desarrollo:

```bash
npm run dev
```

En modo produccion :

```bash
npm start
```

El servidor se levantará en:

```bash
http://localhost:3000
```

en caso de estar ocupado el puerto 3000

```bash
http://localhost:3001
```

## 📚 Endpoints disponibles

### 1. Registrar Evento

#### Método: POST

URL: /api/events/registrar

Body (JSON):

```bash
{
    "nombreEvento": "Evento A",
    "descripcionSala": "Sala 1",
    "tiempoInicio": "09:00:00",
    "tiempoFin": "11:00:00"
}
```
Respuesta exitosa: 201

Respuesta con conflicto: 400

### 2. Actualizar Evento

#### Método: POST

URL: /api/events/actualizar

Body (JSON):

```bash
{
    "nombreEvento": "Evento A",
    "descripcionSala": "Sala 2",
    "tiempoInicio": "10:00:00",
    "tiempoFin": "12:00:00"
}
```
Respuesta exitosa: 200

Respuesta si no se encuentra: 404

### 3. Eliminar Evento (cancelar)

#### Método: POST

URL: /api/events/eliminar

Body (JSON):

```bash
{
    "nombreEvento": "Evento A"
}
```
Respuesta exitosa: 200

Respuesta si no se encuentra: 404

### 4. Listar Eventos Activos

#### Método: GET

``` bash
URL: /api/events/listar
```
Respuesta:Devuelve todos los eventos con status: 1 (activos).

### 5. Consultar Eventos Activos en Rango de Tiempo

#### Método: GET

``` bash
URL: http://localhost:3001/api/events/activos?tiempoInicio=09:00:00&tiempoFin=11:00:00
```

Query Parameters:

tiempoInicio → Hora de inicio (formato HH:mm:ss)

tiempoFin → Hora de fin (formato HH:mm:ss)

Respuesta:Devuelve todos los eventos activos que estén dentro del rango solicitado.

## ⚙️ Estructura Principal

/routes/events.js → Rutas de la API

/controllers/eventController.js → Controladores (lógica HTTP)

/services/EventManager.js → Lógica de negocio

/models/Evento.js → Modelo del evento

/utils/validaciones.js → Validaciones de solapamiento