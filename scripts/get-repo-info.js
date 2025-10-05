#!/usr/bin/env node

// Script para obtener los IDs reales de GitHub usando la API
console.log('🔍 Obteniendo información real del repositorio...');
console.log('');

const REPO_OWNER = 'MarcosCarmonaGarcia';
const REPO_NAME = 'MarcosCarmonaGarcia.github.io';

async function getRepoInfo() {
    try {
        // Obtener información del repositorio
        const repoResponse = await fetch(`https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}`);
        const repoData = await repoResponse.json();

        if (repoData.id) {
            console.log('✅ Repositorio encontrado');
            console.log(`📁 Nombre: ${repoData.full_name}`);
            console.log(`🔢 ID interno: ${repoData.id}`);
            console.log(`🔗 Node ID: ${repoData.node_id}`);
            console.log('');

            console.log('🎯 VALORES PARA GISCUS:');
            console.log('========================');
            console.log(`repo: "${repoData.full_name}"`);
            console.log(`repoId: "${repoData.node_id}"`);
            console.log('');

            // Verificar si Discussions está habilitado
            if (repoData.has_discussions) {
                console.log('✅ GitHub Discussions está habilitado');
                console.log('');
                console.log('🔄 PRÓXIMOS PASOS:');
                console.log('1. Ve a: https://giscus.app/es');
                console.log(`2. Ingresa: ${repoData.full_name}`);
                console.log('3. Selecciona una categoría existente o crea una nueva');
                console.log('4. Copia el valor data-category-id del código generado');
                console.log('5. Ejecuta: npm run setup-giscus ' + repoData.node_id + ' <category-id>');
            } else {
                console.log('❌ GitHub Discussions NO está habilitado');
                console.log('🔧 Habilítalo en: https://github.com/' + repoData.full_name + '/settings');
            }

        } else {
            console.log('❌ Error:', repoData.message || 'Repositorio no encontrado');
        }

    } catch (error) {
        console.log('❌ Error al obtener información del repositorio:', error.message);
        console.log('');
        console.log('🔄 PROCESO MANUAL:');
        console.log('1. Ve a: https://giscus.app/es');
        console.log('2. Ingresa: MarcosCarmonaGarcia/MarcosCarmonaGarcia.github.io');
        console.log('3. Sigue las instrucciones en pantalla');
    }
}

getRepoInfo();