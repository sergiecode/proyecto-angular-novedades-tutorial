# NOVEDADES DE ANGULAR 16

## Signals
Angular 16 introduce signals, una forma nueva de gestionar cambios de estado en aplicaciones. Las signals son funciones que pueden actualizarse y depender de otras, creando un gráfico reactivo que se actualiza automáticamente. Con observables RxJS, las signals permiten flujos de datos declarativos y potentes.

En comparación con el mecanismo tradicional de detección de cambios en Angular, las signals permiten la detección de cambios sólo en los componentes afectados, mejorando el rendimiento y reduciendo la complejidad. Las señales también hacen que el código sea más fácil de entender y permiten un mayor control sobre los cambios de valores.

## Renderizado del lado del servidor:
Angular 16 incluye mejoras en el renderizado del lado del servidor (SSR) gracias a la hidratación no destructiva. Esta técnica permite un SSR más rápido y fluido, lo que reduce el tiempo hasta la interactividad (TTI) y mejora el SEO y la accesibilidad. Anteriormente, la implementación de SSR en Angular no era fácil, pero ahora viene soportada por defecto.

La hidratación no destructiva asegura que el contenido HTML previamente optimizado o personalizado no sea eliminado o sobrescrito durante la hidratación de la aplicación, lo que evita posibles conflictos o errores.

## Standalone Components
Standalone Components simplifican la relación entre Componentes y Módulos en Angular, eliminando la sobrecarga adicional de los NgModules. Los SC proporcionan una manera más fácil de proveer servicios, eliminando una de las tres opciones disponibles. Los NgModules ofrecen una encapsulación parcial, pero pueden ser sobrepasados, lo que no es recomendable.

La modularidad completa se puede obtener mediante la creación de librerías en Angular. Las librerías proporcionan encapsulación completa y permiten exponer componentes y NgModules al exterior.

## Input (Required)
La característica de Entradas obligatorias del componente permite especificar ciertas entradas de un componente como obligatorias. Si no se proporcionan estas entradas, se producirá un error en tiempo de compilación. Esto ayuda a detectar errores y asegura que los componentes tengan todos los datos necesarios para funcionar correctamente. Además, esta característica hace que los componentes sean más fáciles de usar y autodocumentados.

## Etiquetas autoconclusivas
Recientemente se ha agregado una característica muy deseada que permite utilizar etiquetas de cierre automático para componentes en plantillas Angular. Esta mejora en la experiencia del desarrollador puede ahorrar algo de tiempo y esfuerzo al reducir la cantidad de tipeo necesario al escribir código. Por ejemplo, ahora es posible reemplazar una etiqueta de cierre larga y compleja con una etiqueta de cierre automático más sencilla.

## Importación dinámica de enrutador
Nueva función en Angular para obtener información del enrutador sin inyectar ActivatedRoute en el componente. Puedes vincular los datos del enrutador a las entradas del componente, lo que hace que el código sea más simple y limpio.

Para utilizar esta función, debes activarla en el módulo RouterModule estableciendo la opción bindToComponentInputs en true.

## ngOnDestroy flexible
Angular tiene unos ganchos de ciclo de vida que permiten ejecutar acciones en diferentes momentos de la ejecución de la aplicación. Con OnDestroy como observable se aumenta la flexibilidad. En la versión 16 de Angular, se puede inyectar DestroyRef para registrar el gancho onDestroy de un componente, directiva, servicio o tubería. Se puede inyectar DestroyRef en cualquier parte del contexto y ejecutar onDestroy cuando se destruye el inyector correspondiente.

## Soporte CSP para estilos en línea
Angular incluye estilos inline en el DOM para los componentes, lo cual viola la política de seguridad de contenido (CSP) predeterminada style-src. Para solucionarlo, se deben incluir un atributo nonce o un hash del contenido del estilo en el encabezado CSP. Aunque Google no encontró una forma significativa de ataque a esta vulnerabilidad, muchas empresas imponen una CSP estricta, lo que ha llevado a una solicitud de función popular en el repositorio de Angular.
