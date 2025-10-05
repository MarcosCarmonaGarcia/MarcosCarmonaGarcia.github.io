#!/usr/bin/env node

import { readFileSync, writeFileSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Obtener argumentos de línea de comandos
const args = process.argv.slice(2);

if (args.length < 2) {
    console.log('🚀 Configuración de Giscus');
    console.log('========================');
    console.log('');
    console.log('Uso: npm run setup-giscus <repo-id> <category-id>');
    console.log('');
    console.log('Pasos:');
    console.log('1. Ve a: https://giscus.app/es');
    console.log('2. Ingresa tu repositorio: MarcosCarmonaGarcia/MarcosCarmonaGarcia.github.io');
    console.log('3. Copia el valor de data-repo-id (empieza con R_)');
    console.log('4. Copia el valor de data-category-id (empieza con DIC_)');
    console.log('5. Ejecuta: npm run setup-giscus <repo-id> <category-id>');
    console.log('');
    console.log('Ejemplo:');
    console.log('npm run setup-giscus R_kgDOL123456 DIC_kwDOL123456');
    process.exit(1);
}

const [repoId, categoryId] = args;

// Validar formato de los IDs
if (!repoId.startsWith('R_')) {
    console.error('❌ Error: repo-id debe empezar con "R_"');
    process.exit(1);
}

if (!categoryId.startsWith('DIC_')) {
    console.error('❌ Error: category-id debe empezar con "DIC_"');
    process.exit(1);
}

try {
    // Leer el archivo de configuración actual
    const configPath = join(__dirname, '..', 'src', 'data', 'giscus-config.ts');
    let configContent = readFileSync(configPath, 'utf8');

    // Actualizar los valores
    configContent = configContent.replace(
        /repoId: "",/,
        `repoId: "${repoId}",`
    );

    configContent = configContent.replace(
        /categoryId: "",/,
        `categoryId: "${categoryId}",`
    );

    // Escribir el archivo actualizado
    writeFileSync(configPath, configContent, 'utf8');

    console.log('✅ Configuración de Giscus actualizada exitosamente!');
    console.log('');
    console.log('📁 Archivo actualizado: src/data/giscus-config.ts');
    console.log('🔧 Valores configurados:');
    console.log(`   - repo-id: ${repoId}`);
    console.log(`   - category-id: ${categoryId}`);
    console.log('');
    console.log('🚀 Reinicia el servidor de desarrollo:');
    console.log('   npm run dev');
    console.log('');
    console.log('🎉 ¡Los comentarios ya deberían estar funcionando!');

} catch (error) {
    console.error('❌ Error al actualizar la configuración:', error.message);
    process.exit(1);
}