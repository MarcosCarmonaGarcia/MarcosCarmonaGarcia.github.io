# 📝 Configuración de Comentarios con Giscus

Este documento explica cómo configurar completamente el sistema de comentarios Giscus en tu blog.

## 🚀 Paso 1: Habilitar GitHub Discussions

1. Ve a tu repositorio: [https://github.com/MarcosCarmonaGarcia/MarcosCarmonaGarcia.github.io](https://github.com/MarcosCarmonaGarcia/MarcosCarmonaGarcia.github.io)
2. Haz clic en **Settings** (Configuración)
3. En la sección **Features**, marca la casilla **Discussions**
4. Haz clic en **Set up discussions** si aparece

## 🔧 Paso 2: Instalar la aplicación Giscus

1. Ve a: [https://github.com/apps/giscus](https://github.com/apps/giscus)
2. Haz clic en **Install**
3. Selecciona **Only select repositories**
4. Elige tu repositorio: `MarcosCarmonaGarcia.github.io`
5. Haz clic en **Install**

## ⚙️ Paso 3: Configurar Giscus

1. Ve a: [https://giscus.app/es](https://giscus.app/es)
2. En **Repositorio**, ingresa: `MarcosCarmonaGarcia/MarcosCarmonaGarcia.github.io`
3. Espera a que aparezcan las comprobaciones en verde ✅
4. En **Mapeo Página ↔️ Discussions**, selecciona: `pathname`
5. En **Categoría de Discussion**, elige o crea una categoría (recomendado: "Comentarios" o "General")
6. En **Características**, marca las opciones que prefieras:
   - ✅ Habilitar reacciones
   - ✅ Cargar los comentarios de forma lazy
7. En **Tema**, selecciona: `preferred_color_scheme`

## 📋 Paso 4: Copiar la configuración

Una vez configurado, giscus.app te mostrará un código como este:

```html
<script src="https://giscus.app/client.js"
        data-repo="MarcosCarmonaGarcia/MarcosCarmonaGarcia.github.io"
        data-repo-id="R_kgDOL..." 
        data-category="Comentarios"
        data-category-id="DIC_kwDOL..."
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="preferred_color_scheme"
        data-lang="es"
        crossorigin="anonymous"
        async>
</script>
```

## 🔄 Paso 5: Actualizar la configuración en el código

Edita el archivo `src/data/giscus-config.ts` y actualiza estos valores:

```typescript
export const giscusConfig = {
    repo: "MarcosCarmonaGarcia/MarcosCarmonaGarcia.github.io",
    repoId: "R_kgDOL...", // 👈 Copia este valor de giscus.app
    category: "Comentarios", // 👈 El nombre que elegiste
    categoryId: "DIC_kwDOL...", // 👈 Copia este valor de giscus.app
    // ... resto de la configuración
};
```

## ✅ Verificación

Una vez actualizada la configuración:

1. Reinicia el servidor de desarrollo: `npm run dev`
2. Ve a cualquier post de tu blog
3. Desplázate hasta abajo y deberías ver la sección de comentarios
4. Si tienes una cuenta de GitHub, prueba a dejar un comentario

## 🎨 Personalización

El sistema de comentarios ya está configurado para:
- ✅ Adaptarse automáticamente al tema claro/oscuro de tu sitio
- ✅ Usar el idioma español
- ✅ Cargar de forma lazy para mejor rendimiento
- ✅ Mostrar reacciones (👍, ❤️, 😄, etc.)
- ✅ Posicionar la caja de comentarios al final

## 🐛 Solución de problemas

**Problema**: No aparecen los comentarios
- ✅ Verifica que GitHub Discussions esté habilitado
- ✅ Verifica que la app Giscus esté instalada
- ✅ Verifica que `repoId` y `categoryId` estén bien copiados

**Problema**: Aparece "Discussion not found"
- ✅ Verifica que la categoría exista en GitHub Discussions
- ✅ Verifica que `categoryId` sea correcto

## 📚 Más información

- [Documentación oficial de Giscus](https://github.com/giscus/giscus)
- [GitHub Discussions](https://docs.github.com/es/discussions)