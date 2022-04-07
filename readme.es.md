[English](readme.md)

### Extensión de Google Chrome para el Gestor de Contraseñas

Publicada como Extensión en la Chrome Web Store: https://chrome.google.com/webstore/detail/eusonlito-password-manage/mkbgfbjaoibojobjpimpkaofckkgknhi

Esta extensión se conecta a la aplicación https://github.com/eusonlito/Password-Manager para permitir el acceso a contraseñas directamente desde cualquier sitio web.

Se debe instalar desde el modo desarrollador, ya que no está publicada en el store de extensiones de Chrome.

1. Clonamos el repositorio de Github en un directorio local:

```bash
git clone https://github.com/eusonlito/Password-Manager-Chrome.git
```

2. Vamos a la opción de Chrome `Menú` > `Mas Herramientas` > `Extensiones`

3. Arriba a la derecha activamos la opción de `Modo Desarrollador`

4. Accedemos al nuevo botón de `Cargar Descomprimida`

5. Seleccionamos el directorio que acabamos de clonar.

6. En `Endpoint` indicamos la raíz de la web donde tenemos instalado el gestor de contraseñas, por ejemplo `https://password.domain.com`

7. En `API KEY` pegamos la API KEY que podemos generar desde nuestro perfil del gestor de contraseñas.

8. Guardamos y probamos a pulsar el botón de la aplicación en cualquier web que tengamos dada de alta en el gestor de contraseñas.

### Capturas

![Password-Manager-Chrome](https://user-images.githubusercontent.com/644551/128035125-32c7521c-aac1-4727-9e1d-be33984b1ac5.png)

![Password-Manager-Chrome](https://user-images.githubusercontent.com/644551/128035231-d8bc1e19-13e5-42ff-bbce-0b20caa74be9.png)
