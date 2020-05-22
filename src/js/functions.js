var myopacity = 0;

export function numeroEnLetras(num, idioma) {

    switch (idioma) {
        case 'es':

            switch (num) {
                case 12:
                    return 'doce';
                case 13:
                    return 'trece';
                case 14:
                    return 'catorce';
                case 15:
                    return 'quince';
                case 16:
                    return 'dieciséis';
                case 17:
                    return 'diecisiete';
                case 18:
                    return 'dieciocho';
                case 19:
                    return 'diecinueve';
                case 20:
                    return 'veinte';
                case 21:
                    return 'veintiun';
                case 22:
                    return 'veintidos';
                case 23:
                    return 'veintitres';
                case 24:
                    return 'veinticuatro';
                case 25:
                    return 'veinticino';
                case 26:
                    return 'veintiseis';
                case 27:
                    return 'veintidossiete';
                case 28:
                    return 'veintidosocho';
                case 29:
                    return 'veintidosnueve';
                case 30:
                    return 'treinta';
                case 31:
                    return 'treinta y un';
                case 32:
                    return 'treinta y dos';
                case 33:
                    return 'treinta y tres';
                case 34:
                    return 'treinta y cuatro';
                case 35:
                    return 'treinta y cinco';
                case 36:
                    return 'treinta y seis';
                case 37:
                    return 'treinta y siete';
                case 38:
                    return 'treinta y ocho';
                case 39:
                    return 'treinta y nueve';
                case 40:
                    return 'cuarenta';
                default:
                    return 'mas de cuarenta';
            }
            
            break;
    
        case 'en':

            switch (num) {
                case 12:
                    return 'twelve';
                case 13:
                    return 'thirteen';
                case 14:
                    return 'fourteen';
                case 15:
                    return 'fifteen';
                case 16:
                    return 'sixteen';
                case 17:
                    return 'seventeen';
                case 18:
                    return 'eighteen';
                case 19:
                    return 'nineteen';
                case 20:
                    return 'twenty';
                case 21:
                    return 'twenty one';
                case 22:
                    return 'twenty two';
                case 23:
                    return 'twenty three';
                case 24:
                    return 'twenty four';
                case 25:
                    return 'twenty five';
                case 26:
                    return 'twenty six';
                case 27:
                    return 'twenty seven';
                case 28:
                    return 'twenty eigth';
                case 29:
                    return 'twenty nine';
                case 30:
                    return 'thirty';
                case 31:
                    return 'thirty one';
                case 32:
                    return 'thirty two';
                case 33:
                    return 'thirty three';
                case 34:
                    return 'thirty four';
                case 35:
                    return 'thirty five';
                case 36:
                    return 'thirty six';
                case 37:
                    return 'thirty seven';
                case 38:
                    return 'thirty eigth';
                case 39:
                    return 'thirty nine';
                case 40:
                    return 'forty';
                default:
                    return 'more then forty';
            }

            break;
    }
    
}

export function getExperiencia(idioma) {
    const datetimeInicioLaboral = new Date('September 1, 2006');
    const hoy = new Date();

    let antiguedad = hoy.getFullYear() - datetimeInicioLaboral.getFullYear();
    const m = hoy.getMonth() - datetimeInicioLaboral.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < datetimeInicioLaboral.getDate())) {
        antiguedad--;
    }

    return numeroEnLetras(antiguedad, idioma);
}

export function getVersionApp() {
    let version = '';
    const metas = document.getElementsByTagName('meta');
    for (let i = 0; i < metas.length; i++) {
        if (metas[i].getAttribute('name') === 'version') {
            version = metas[i].getAttribute('content');
        }
    }

    return version;
}

export function getIdiomaLocalStorage() {
    if (localStorage.getItem('lang')) {
        return localStorage.getItem('lang');
    } else {
        localStorage.setItem('lang', 'es');
        return localStorage.getItem('lang');
    }
}

export function myFadeFunction() {
    
    if (myopacity < 1) {
        myopacity += 0.075;
        setTimeout(function(){
            myFadeFunction();
        }, 50);
    }
    document.getElementById('contenido').style.opacity = myopacity;
}