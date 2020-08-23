import * as myFunctions from './functions.js';

const version = myFunctions.getVersionApp();

export const getContenido = async function() {
    const result = await $.ajax({
        url: '..' + global.rootDir + '/src/assets/services/content.json?v='+version
    });
    return result;
};

export const getPortfolio = async function() {
    const result = await $.ajax({
        url: '..' + global.rootDir + '/src/assets/services/portfolio.json?v='+version
    });
    return result;
};

export const getCursos = async function() {
    const result = await $.ajax({
        url: '..' + global.rootDir + '/src/assets/services/cursos.json?v='+version
    });
    return result;
};