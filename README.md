# Vue Test

## Indicaciones
El presente proyecto contiene 1 componente padre y 4 componentes hijo al mismo nivel. El objetivo es construir una aplicación de To Do's (Pendientes) Que cumpla con los siguientes objetivos y/o características.

## Diseño de la prueba
No es necesario invertir mucho tiempo y esfuerzo en el diseño, pero será considerado.

## Entrega de la prueba
Al término de la prueba, será necesario subir el código a un repositorio y compartir el enlace para su posterior revisión.

## Datos de la tarea
Cada tarea debe tener un título, un estado pendiente o realizada, así como una fecha y hora a la que se deben realizar, junto con un entero que marque su prioridad en una escala del 1 al 5.

Los datos se simularán en la instancia del componente app.vue. de manera que se comuniquen/propaguen a los componentes hijos para sus presentaciones e interacciones.

## Estructura del proyecto
La siguiente estructura de archivos y funciones/métodos debe seguirse. 

### app.vue
Componente padre dónde se debe manejar toda la data.

### doneList.vue
Componente dónde se listan todas las tareas ya realizadas.
1.- Este componente debe tener un método que ordene las tareas por hora y fecha, así como alfabéticamente y por orden de prioridad. De manera ascendiente y descendiente.
2.- Los métodos de ordenamiento deberán afectar solo a la data de este componente.

### selectedToDo.vue
Componente dónde se muestra la tarea seleccionada.
Este componente debe poder mostrar la tarea seleccionada por el usuario, con la posibilidad de modificar sus datos, eliminarla o marcarla como realizada o pendiente.

### toDoList.vue
Componente dónde se listan todas las tareas pendientes de realizar. 
1.- El punto 1 del doneList.vue también se aplica a este componente.
2.- Los métodos de ordenamiento deberán afectar solo a la data de este componente.

### addToDo.vue
Componente con la funcionalidad de agregar una nueva tarea con sus respectivo estado pendiente o realizado.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
