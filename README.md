# Mayoral Frontend Assignment

Me he centrado en desarrollar siguiendo las prácticas que suelo utilizar en mi día a día e intentando extender en la medida que el tiempo me lo ha permitido las funcionalidades establecidas en el documento. He intentado implementar de la manera más correcta la lógica interna del problema propuesto, con la estructura de carpetas que normalmente uso para proyectos de React.

Para el desarrollo se ha usado la rama _develop_ y al finalizar se mergeó la rama _develop_ en la rama _master_ con todos los cambios, añadiendo un nuevo tag en _master_ con la version 1.0.0. El historial de _git_ está más o menos estructurado por las fases del desarrollo dejando en cada _commit_ una versión estable.

## Instalación

Para clonar este repositorío necesitarás tener instalado en el ordenador [Git](https://git-scm.com/) y [Node.js](https://nodejs.org/en/download/) el cual ya viene con _npm_ instalado. Aparte de _npm_ también puedes gestionar las dependencias con [yarn](https://classic.yarnpkg.com/en/docs/install/#windows-stable). Una vez tengas estas aplicaciones abre un terminal y sigue las instrucciones de abajo:

```
# Clonar este repositorio
https://github.com/migudevelop/mayoral-products.git

# Instalar las dependencias (yarn o npm)
yarn
npm i

# Levantar el proyecto
yarn start:dev
npm run start:dev
```

## Formato del código

Para asegurar la calidad del codigo y evitar errores se ha hecho uso de las librerías **ESLint** y **Prettier**. También se ha instalado **Lint Staged** y **Husky** para poder lanzar scripts antes de poder subir commits al repositorio, en este caso se ejecutará ESLint y prettier para comprobar que todo esta correcto. Además se ha añadido **Commitlint** para comprobar que los commits siguen el formato de conventional commits.

## Scripts

Se han añadido varios scripts para facilitar el desarrollo:

- _test_: ejecuta los test del proyecto y termina la ejecución
- _test:watch_: ejecuta los test del proyecto y mantiene un _watcher_ para volver a ejecutarlos cuando detecte un cambio (usado para desarrollar)

## Estilos

El estilado gráfico del proyecto se ha realizado con **Styled Components**. Se han establecido 3 breackpoints para que la aplicación sea _responsive_ y se pueda visualizar correctamente tanto en dispositivos móviles (teléfonos y tabletas) como en navegadores de escritorio con la filosofía **mobile-first**. Para la inyección de estilos globales se ha usado _createGlobalStyle_ de **Styled Components**

## Testing

Se han implementado tests a modo de demostación tanto para componentes como para el uso de funciones simulando eventos mediante acciones en los tests.

## Bocetos de las pantallas a implementar

|              Desktop              |             Mobile              |
| :-------------------------------: | :-----------------------------: |
| ![Desktop](./.github/desktop.png) | ![Mobile](./.github/mobile.png) |

## Funcionalidad a implementar:

Maquetar las imágenes adjuntas y tener en cuenta los diferentes cortes en móvil y escritorio. La prueba deberá estar subida en un repositorio de GitHub.

Tecnologías/Librerías requeridas:

- React
- Typescript
- Next.js

Funcionalidad a implementar:

- Separa en componentes de una forma óptima y organizada
- La vista debe asemejarse lo más parecido posible a las fotos adjuntas
- Implementar búsqueda de productos por nombre
- Consumir un JSON con los datos de productos (JSON local o externo)
- Cambiar la vista con los iconos indicados en la foto:
  - Escritorio de 4 a 3 elementos
  - Móvil de 3 a 2 elementos
- Implementar lógica y diseño de un componente “ordenar” (precio ascendente y descendente)
- Crea los test unitarios que creas conveniente

```
## ToDo

Por falta de tiempo queda por mejorar los siguientes puntos 😊:

- añadir más tests
- añadir el tema _dark_mode_
```
