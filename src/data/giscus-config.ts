// Configuración de Giscus para comentarios
// Actualiza estos valores con los datos de tu configuración en https://giscus.app/es

export const giscusConfig = {
    // Repositorio (formato: "usuario/repositorio")
    repo: "MarcosCarmonaGarcia/MarcosCarmonaGarcia.github.io",

    // ID del repositorio (lo obtienes de giscus.app)
    repoId: "R_kgDOP0MlLA", // Valor real obtenido de GitHub API

    // Categoría de discussions
    category: "General", // Puedes cambiarlo por "Comentarios" o el que prefieras

    // ID de la categoría (lo obtienes de giscus.app)
    categoryId: "DIC_kwDOP0MlLM4CwRFz", // Vacío para usar la categoría por defecto

    // Mapeo de páginas a discussions
    mapping: "pathname", // Recomendado: cada página tendrá su propia discussion

    // Configuración adicional
    strict: "0", // 0 = flexible, 1 = estricto
    reactionsEnabled: "1", // 1 = habilitar reacciones, 0 = deshabilitar
    emitMetadata: "0", // 0 = no emitir metadata
    inputPosition: "bottom", // "top" o "bottom"
    theme: "preferred_color_scheme", // Se adapta al tema del sitio
    lang: "es", // Idioma español
    loading: "lazy" // Carga lazy para mejor performance
};

// Función helper para generar la configuración de script
export function getGiscusScriptConfig() {
    return {
        'data-repo': giscusConfig.repo,
        'data-repo-id': giscusConfig.repoId,
        'data-category': giscusConfig.category,
        'data-category-id': giscusConfig.categoryId,
        'data-mapping': giscusConfig.mapping,
        'data-strict': giscusConfig.strict,
        'data-reactions-enabled': giscusConfig.reactionsEnabled,
        'data-emit-metadata': giscusConfig.emitMetadata,
        'data-input-position': giscusConfig.inputPosition,
        'data-theme': giscusConfig.theme,
        'data-lang': giscusConfig.lang,
        'data-loading': giscusConfig.loading
    };
}