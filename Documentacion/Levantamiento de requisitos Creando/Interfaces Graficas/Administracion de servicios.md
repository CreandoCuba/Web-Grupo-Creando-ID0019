# Funcionalidad
- En esta pagina, los [[Cliente|clientes]] pueden ver que __servicios tiene contratados__ y los [[Trabajador|trabajadores]] pueden ver en que servicios deben trabajar y las tareas que tienen pendientes.
 - También podrán ver el progreso de las actividades mediante un diagrama de Gantt
 - Además los clientes y trabajadores podrán comunicarse por un chat interno para comentar sobre el servicio y los tiempos de las actividades

# Componentes de un servicio
## Diagrama de Gantt
En general, la Interfaz debe contener un diagrama de Gantt en el que se muestren los tiempos para la realización de las actividades o tareas planificadas para llevarlo a cabo.
Los diagramas solo pueden ser aprobados por un trabajador especifico pero pueden ser editados por todos los trabajadores que participan en él
#### Cada tarea tiene:
- Estado (a la espera, cumplida retrasada) el color puede representar el estado
- Fecha de inicio y duración o tiempo requerido (pueden haber varias tareas a la vez)
- Especialidad o talento humano necesario para llevarla a cabo 
- Un trabajador encargado de llevarla a cabo (esta información no es visible al cliente?)

## Chat interno
Un chat en el que se pueden comunicar los trabajadores y los clientes
#### Cada mensaje tiene
- Emisor, la persona que lo envió (los clientes no pueden ver el nombre del trabajador que lo envió) 
- La posibilidad de enviar un correo de notificación al enviar mensaje
- ? La posibilidad de ver si la persona a la que iba destinado vio el mensajes

## Bandeja de documentos
El servicio debe tener además la posibilidad de adjuntar documentos y archivos (como documentos necesarios para llevar a cabo una tarea o documentos que deba recibir el cliente y que sea resultado de una tarea)

