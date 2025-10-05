#!/bin/bash

# Script para ayudar con la configuración de Giscus
# Este script te guiará paso a paso

echo "🚀 Configuración automática de Giscus"
echo "========================================"
echo ""

# Verificar si GitHub CLI está instalado
if command -v gh &> /dev/null; then
    echo "✅ GitHub CLI detectado"
    
    # Verificar si está autenticado
    if gh auth status &> /dev/null; then
        echo "✅ Autenticado en GitHub"
        
        # Obtener información del repositorio
        REPO_OWNER=$(gh repo view --json owner --jq '.owner.login')
        REPO_NAME=$(gh repo view --json name --jq '.name')
        REPO_FULL_NAME="$REPO_OWNER/$REPO_NAME"
        
        echo "📁 Repositorio: $REPO_FULL_NAME"
        
        # Verificar si Discussions está habilitado
        DISCUSSIONS_ENABLED=$(gh repo view --json hasDiscussionsEnabled --jq '.hasDiscussionsEnabled')
        
        if [ "$DISCUSSIONS_ENABLED" = "true" ]; then
            echo "✅ GitHub Discussions ya está habilitado"
            
            # Intentar crear una categoría para comentarios si no existe
            echo "📝 Verificando categorías de Discussion..."
            
            # Crear categoría si no existe (esto puede fallar si ya existe, pero está bien)
            gh api graphql -f query='
            mutation {
                createDiscussionCategory(input: {
                    repositoryId: "'$(gh repo view --json id --jq '.id')'"
                    name: "Comentarios"
                    description: "Comentarios del blog"
                    emoji: "💬"
                }) {
                    category {
                        id
                        name
                    }
                }
            }' 2>/dev/null || echo "ℹ️  La categoría ya existe o no se pudo crear"
            
            echo ""
            echo "🎯 SIGUIENTE PASO: Ve a https://giscus.app/es"
            echo "1. Ingresa tu repositorio: $REPO_FULL_NAME"
            echo "2. Selecciona la categoría 'Comentarios' (o crea una nueva)"
            echo "3. Copia los valores data-repo-id y data-category-id"
            echo "4. Ejecuta este script de nuevo con esos valores"
            
        else
            echo "❌ GitHub Discussions no está habilitado"
            echo "🔧 Habilitando Discussions..."
            
            # Intentar habilitar discussions
            gh api -X PATCH repos/$REPO_FULL_NAME -f has_discussions=true
            
            if [ $? -eq 0 ]; then
                echo "✅ GitHub Discussions habilitado exitosamente"
            else
                echo "❌ No se pudo habilitar Discussions automáticamente"
                echo "🔗 Ve manualmente a: https://github.com/$REPO_FULL_NAME/settings"
                echo "   Y habilita Discussions en la sección Features"
            fi
        fi
        
    else
        echo "❌ No estás autenticado en GitHub CLI"
        echo "🔧 Ejecuta: gh auth login"
    fi
    
else
    echo "❌ GitHub CLI no está instalado"
    echo "🔧 Instala GitHub CLI: https://cli.github.com/"
    echo ""
    echo "🔄 PROCESO MANUAL:"
    echo "1. Ve a: https://github.com/MarcosCarmonaGarcia/MarcosCarmonaGarcia.github.io/settings"
    echo "2. En Features, habilita Discussions"
    echo "3. Ve a: https://github.com/apps/giscus e instala la app"
    echo "4. Ve a: https://giscus.app/es para configurar"
fi

echo ""
echo "📋 Una vez que tengas los valores de giscus.app:"
echo "   Ejecuta: npm run setup-giscus <repo-id> <category-id>"