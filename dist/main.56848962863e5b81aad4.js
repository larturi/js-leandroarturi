(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(a,'__esModule',{value:!0})},b.t=function(a,c){if(1&c&&(a=b(a)),8&c)return a;if(4&c&&'object'==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,'default',{enumerable:!0,value:a}),2&c&&'string'!=typeof a)for(var e in a)b.d(d,e,function(b){return a[b]}.bind(null,e));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=5)})([function(a,b,c){var d=c(1),e=c(2);e=e.__esModule?e.default:e,'string'==typeof e&&(e=[[a.i,e,'']]);d(e,{insert:'head',singleton:!1});a.exports=e.locals||{}},function(a,b,c){'use strict';function d(a){for(var b=-1,c=0;c<m.length;c++)if(m[c].identifier===a){b=c;break}return b}function e(a,b){for(var c={},e=[],f=0;f<a.length;f++){var g=a[f],h=b.base?g[0]+b.base:g[0],i=c[h]||0,k=''.concat(h,' ').concat(i);c[h]=i+1;var l=d(k),n={css:g[1],media:g[2],sourceMap:g[3]};-1===l?m.push({identifier:k,updater:j(n,b),references:1}):(m[l].references++,m[l].updater(n)),e.push(k)}return e}function f(a){var b=document.createElement('style'),d=a.attributes||{};if('undefined'==typeof d.nonce){var e=c.nc;e&&(d.nonce=e)}if(Object.keys(d).forEach(function(a){b.setAttribute(a,d[a])}),'function'==typeof a.insert)a.insert(b);else{var f=l(a.insert||'head');if(!f)throw new Error('Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.');f.appendChild(b)}return b}function g(a){return null!==a.parentNode&&void a.parentNode.removeChild(a)}function h(a,b,c,d){var e=c?'':d.media?'@media '.concat(d.media,' {').concat(d.css,'}'):d.css;if(a.styleSheet)a.styleSheet.cssText=n(b,e);else{var f=document.createTextNode(e),g=a.childNodes;g[b]&&a.removeChild(g[b]),g.length?a.insertBefore(f,g[b]):a.appendChild(f)}}function i(a,b,c){var d=c.css,e=c.media,f=c.sourceMap;if(e?a.setAttribute('media',e):a.removeAttribute('media'),f&&btoa&&(d+='\n/*# sourceMappingURL=data:application/json;base64,'.concat(btoa(unescape(encodeURIComponent(JSON.stringify(f)))),' */')),a.styleSheet)a.styleSheet.cssText=d;else{for(;a.firstChild;)a.removeChild(a.firstChild);a.appendChild(document.createTextNode(d))}}function j(a,b){var c,d,e;if(b.singleton){var j=p++;c=o||(o=f(b)),d=h.bind(null,c,j,!1),e=h.bind(null,c,j,!0)}else c=f(b),d=i.bind(null,c,b),e=function(){g(c)};return d(a),function(b){if(b){if(b.css===a.css&&b.media===a.media&&b.sourceMap===a.sourceMap)return;d(a=b)}else e()}}var k=function(){var a;return function(){return'undefined'==typeof a&&(a=!!(window&&document&&document.all&&!window.atob)),a}}(),l=function(){var a={};return function(b){if('undefined'==typeof a[b]){var c=document.querySelector(b);if(window.HTMLIFrameElement&&c instanceof window.HTMLIFrameElement)try{c=c.contentDocument.head}catch(a){c=null}a[b]=c}return a[b]}}(),m=[],n=function(){var a=[];return function(b,c){return a[b]=c,a.filter(Boolean).join('\n')}}(),o=null,p=0;a.exports=function(a,b){b=b||{},b.singleton||'boolean'==typeof b.singleton||(b.singleton=k()),a=a||[];var c=e(a,b);return function(a){if(a=a||[],'[object Array]'===Object.prototype.toString.call(a)){for(var f=0;f<c.length;f++){var g=c[f],h=d(g);m[h].references--}for(var i=e(a,b),j=0;j<c.length;j++){var k=c[j],l=d(k);0===m[l].references&&(m[l].updater(),m.splice(l,1))}c=i}}}},function(a,b,c){var d=c(3);b=d(!1),b.push([a.i,'/* Screenwidth less than 1024px\n-------------------------------------------------------------------- */\n@media only screen and (max-width: 1024px) {\n    header .banner-text h1 {\n        font: 80px/1.1em \'Open Sans\', sans-serif;\n        letter-spacing: -1px;\n        margin: 0 auto 12px auto;\n        font-weight: 800;\n    }\n}\n\n/* Screenwidth less than 900px\n--------------------------------------------------------------------- */\n@media only screen and (max-width: 900px) {\n\n    /* header styles\n   ------------------------------------------------------------------ */\n    header .banner { padding-bottom: 12px; }\n    header .banner-text h1 {\n        font: 78px/1.1em \'Open Sans\', sans-serif;\n        letter-spacing: -1px;\n        font-weight: 800;      \n    }\n    header .banner-text h3 {\n        font: 17px/1.9em \'Open Sans\', sans-serif;\n        width: 80%;\n    }\n    header .banner-text hr {\n        width: 65%;\n        margin: 12px auto;\n    }\n    #nav-wrap {\n        font: 11px \'Open Sans\', sans-serif;\n        letter-spacing: 1.5px;\n        font-weight: 800;\n    }\n    #twitter li span {\n        line-height: 1;\n        font-size: 12px;\n    }\n    .capcha{\n        margin-left: 120px;\n        margin-bottom: 33px;\n    }\n    \n    /* About Section\n    ------------------------------- */\n    #about .profile-pic {\n        width: 100px;\n        height: 100px;\n        margin-left: 12px;\n    }\n    #about .contact-details { width: 50%; }\n    #about .download { width: 50%; }\n\n    /* Contact Section\n    ------------------------------- */\n    #contact .section-head { margin-bottom: 30px; }\n    #contact .header-col h1:before {\n        font-size: 66px;\n        line-height: 66px;\n    }\n    #contact .section-head p.lead { font: 17px/33px \'Open Sans\', sans-serif; }\n\n}\n\n/* Screenwidth less than 767px\n--------------------------------------------------------------------- */\n@media only screen and (max-width: 767px) {\n    \n    /* GENERAL\n    ------------------------------- */\n\n    .row {\n        width: 460px;\n        margin: 0 auto;\n        padding: 0;\n    }\n\n    .education {\n        padding-bottom: 50px;\n    }\n\n    .column, .columns {\n        width: auto !important;\n        float: none;\n        margin-left: 0;\n        margin-right: 0;\n        padding: 0 30px;\n    }\n\n    .row .row { width: auto; max-width: none; margin: 0 -30px; }\n\n    h3 {\n        font-size: 17.5px;\n        line-height: 30px;\n        margin-bottom: 12px;\n        font-weight: 800;\n    }\n\n    h5 {\n        font-size: 16px;\n        line-height: 30px;\n        font-weight: 800!important;\n    }\n\n    .bars li em {\n        font: 13.5px \'Open Sans\', sans-serif;\n        color: #313131;\n        text-transform: uppercase;\n        letter-spacing: 2px;\n        font-weight: 800;\n        position: relative;\n        top: -28px;\n    }\n\n    [class*="column"] + [class*="column"]:last-child { float: none; }\n    [class*="bgrid"] [class*="column"] + [class*="column"]:last-child { float: none; }\n\n    /* Offsets */\n    .row .offset-1    { margin-left: 0%; }\n    .row .offset-2    { margin-left: 0%; }\n    .row .offset-3    { margin-left: 0%; }\n    .row .offset-4    { margin-left: 0%; }\n    .row .offset-5    { margin-left: 0%; }\n    .row .offset-6    { margin-left: 0%; }\n    .row .offset-7    { margin-left: 0%; }\n    .row .offset-8    { margin-left: 0%; }\n    .row .offset-9    { margin-left: 0%; }\n    .row .offset-10   { margin-left: 0%; }\n    .row .offset-11   { margin-left: 0%; }\n\n\n    /* ESPECIFICO\n    ------------------------------- */\n    #nav-wrap {\n        font: 12px \'Open Sans\', sans-serif;\n        background: transparent !important;\n        letter-spacing: 1.5px;  \n        width: auto;\n        position: fixed;\n        top: 0;\n        right: 0;\n    }\n    #nav-wrap > a {\n        width: 48px;\n        height: 48px;\n        text-align: left;\n        background-color: #CC5200;\n        position: relative;\n        border: none;\n        float: right;\n\n        font: 0/0 a;\n        text-shadow: none;\n        color: transparent;\n\n        position: relative;\n        top: 0px;\n        right: 30px;\n    }\n\n    #nav-wrap > a:before,\n    #nav-wrap > a:after {\n        position: absolute;\n        border: 2px solid #fff;\n        top: 35%;\n        left: 25%;\n        right: 25%;\n        content: \'\';\n    }\n    #nav-wrap > a:after { top: 60%; }\n\n    /* toggle buttons */\n    #nav-wrap:not( :target ) > a:first-of-type,\n    #nav-wrap:target > a:last-of-type  {\n        display: block;\n    }\n\n    /* hide menu panel */\n    #nav-wrap ul#nav {\n        height: auto;\n        display: none;\n        clear: both;\n        width: auto; \n        float: right;     \n        position: relative;\n        top: 12px;\n        right: 0;\n    }\n\n    /* display menu panels */\n    #nav-wrap:target > ul#nav\t{\n        display: block;\n        padding: 30px 20px 48px 20px;\n        background: #1f2024;\n        margin: 0 30px;\n        clear: both;\n    }\n\n    ul#nav li {\n        display: block;\n        height: auto;      \n        margin: 0 auto; \n        padding: 0 4%;           \n        text-align: left;\n        border-bottom: 1px solid #2D2E34;\n        border-bottom-style: dotted; \n    }\n\n    ul#nav li a {  \n        display: block;    \n        margin: 0;\n        padding: 0;      \n        margin: 12px 0; \n        line-height: 16px; /* reset line-height from 48px */\n        border: none;\n    }  \n\n    #col_cen {\n        font-size: 14px;\n        font-family: sans-serif;\n        margin-left: 50px;\n        font-weight: bold;\n        line-height: 3;\n    }\n\n    #col_der {\n        line-height: 2.9;\n        font-size: 14px;\n        margin-right: 10px;\n        float: right;\n    }\n\n    #twitter li span {\n        line-height: 1;\n        font-size: 15px;\n    }\n\n    /* Header\n    ------------------------------- */\n    header .banner {\n        padding-bottom: 12px;\n        padding-top: 6px;\n    }\n    header .banner-text h1 { \n        font: 55px/1.1em \'Open Sans\', sans-serif; \n        font-weight: 800;\n    }\n    header .banner-text h3 {\n        font: 16px/1.9em \'Open Sans\', serif;\n        width: 85%;\n    }\n    header .banner-text hr {\n        width: 33%;\n        margin: 30px auto;\n    }\n\n    /* header social links */\n    header .social {\n        margin: 18px 0 24px 0;\n        font-size: 24px;\n        line-height: 36px;      \n    }\n    header .social li { margin: 0 10px; }\n\n    /* scrolldown link */\n    header .scrolldown { display: none; }\n\n\n   /* About Section\n    ------------------------------- */\n    #about .profile-pic {\n        text-align: center;\n        margin-left: 33%;\n        margin-bottom: 20px;\n        margin-top: -50px;\n    }\n\n    #about .download .button {\n        width: 100%;\n        text-align: center;\n        padding: 15px 20px;\n    }\n    #about .main-col { padding-right: 30px; }\n\n    .seccion-profile .header-col {\n        padding-top: 0;\n        margin-bottom: 48px;\n        text-align: center;\n    }\n\n    #resume h1 { letter-spacing: 3px; }\n    #resume .main-col { padding-right: 30px; }\n    #resume h3, #resume .info { text-align: left; }\n\n    .bars { width: 100%; }\n\n    /* Portfolio Section\n    ------------------------------- */\n    #portfolio-wrapper .columns { margin-bottom: 40px; }\n    .popup-modal {\tmax-width: 85%; }\n\n    /* Control Nav */\n    .flex-control-nav {\n        text-align: center;\n        margin-left: -30px;\n    }\n\n   /* Contact Section\n    ------------------------------- */\n    #contact { padding-bottom: 66px; }\n    #contact .section-head { margin-bottom: 12px; }\n    #contact .section-head h1 {\n        font: 16px/24px \'Open Sans\', sans-serif;            \n        text-align: center;   \n        margin-bottom: 30px;\n        text-shadow: 0px 1px 3px rgba(0, 0, 0, 1);\n    }  \n    #contact h1 span { display: block; }\n    #contact .header-col { padding-top: 0; }\n    #contact .header-col h1:before { content: none;\t}\n    #contact .section-head p.lead { text-align: center;}\n\n    /* Footer\n    ------------------------------- */\n    /* copyright */\n    footer .copyright li:before { content: none; }\n    footer .copyright li { margin-right: 12px; }\n\n    /* social links */\n    footer .social-links { font-size: 22px; }\n    footer .social-links li { margin-left: 18px; }\n\n    /* Go To Top Button */\n    #go-top { margin-left: -22px; }\n    #go-top a {\n        width: 54px;\n        height: 54px;\n        font-size: 18px;\n        line-height: 54px;\n    }\n\n    /*Contact Form*/\n    .capcha{\n        margin-left: 1px;\n        margin-bottom: 3px;\n    }\n\n    .copyright {\n        margin-top: -10px !important;\n    }\n\n}\n\n/* Screenwidth less than 480px\n--------------------------------------------------------------------- */\n\n@media only screen and (max-width: 480px) {\n\n    .row { width: auto; }\n\n    #nav-wrap ul#nav { width: auto; float: none; }\n\n     /* Header\n    ------------------------------- */\n    header .banner { padding-top: 24px; }\n    header .banner-text h1 {\n        font: 40px/1.1em \'Open Sans\', sans-serif;      \n        margin: 0 auto 24px auto;\n        font-weight: 800 !important;\n    }\n    header .banner-text h3 {\n        font: 14px/1.9em \'Open Sans\', sans-serif;\n        width: 83%;\n    }\n\n    /* header social links */\n    header .social { font-size: 20px;}\n    header .social li { margin: 0 6px; }\n\n    /* Footer\n    ------------------------------- */\n    /* social links */\n    footer .social-links { font-size: 20px; }\n    footer .social-links li { margin-left: 14px; }   \n\n    .fa{\n        font-size: 16px;\n    }\n\n    .owl-pagination{\n        display: none !important;\n    }\n\n    .owl-wrapper-outer{\n        height: 200px !important;\n    }\n\n    .item img{\n        width: 150px !important;\n    }\n\n    /*Contact Form*/\n    .capcha{\n        margin-left: 1px;\n        margin-bottom: 3px;\n        margin-top: 30px;\n    }\n\n    .education {\n        padding-bottom: 50px;\n    }\n\n    .copyright {\n        margin-top: -10px !important;\n    }\n\n}\n\n/* Screenwidth less than 900px\n--------------------------------------------------------------------- */\n@media only screen and (max-width: 900px) {\n\n    /* block grids on small screens */\n    .s-bgrid-sixths [class*="column"]   { width: 16.66667%; }\n    .s-bgrid-quarters [class*="column"] { width: 25%; }\n    .s-bgrid-thirds [class*="column"]   { width: 33.33333%; }\n    .s-bgrid-halves [class*="column"]   { width: 50%; }\n\n    /* block grids left clearing */\n    .first { clear: none; }\n    .s-first { clear: left; }\n\n}\n\n/* Larger Screens > 1200px\n--------------------------------------------------------------------- */\n@media screen and (min-width: 1200px) {\n    .wide .row { max-width: 1180px; }\n}\n\n\n/* General\n--------------------------------------------------------------------- */\n.cf:before,\n.cf:after {\n    content: " ";\n    display: table;\n}\n.cf:after {\n    clear: both;\n}\n\n.remove-bottom { margin-bottom: 0 !important; }\n.half-bottom { margin-bottom: 12px !important; }\n.add-bottom { margin-bottom: 24px !important; }\n.no-border { border: none; }\n\n.text-center  { text-align: center !important; }\n.text-left    { text-align: left !important; }\n.text-right   { text-align: right !important; }\n.pull-left    { float: left !important; }\n.pull-right   { float: right !important; }\n.align-center {\n    margin-left: auto !important;\n    margin-right: auto !important;\n    text-align: center !important;\n}\n','']),a.exports=b},function(a){'use strict';function b(a,b){var d=a[1]||'',e=a[3];if(!e)return d;if(b&&'function'==typeof btoa){var f=c(e),g=e.sources.map(function(a){return'/*# sourceURL='.concat(e.sourceRoot||'').concat(a,' */')});return[d].concat(g).concat([f]).join('\n')}return[d].join('\n')}function c(a){var b=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),c='sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(b);return'/*# '.concat(c,' */')}a.exports=function(a){var c=[];return c.toString=function(){return this.map(function(c){var d=b(c,a);return c[2]?'@media '.concat(c[2],' {').concat(d,'}'):d}).join('')},c.i=function(a,b,d){'string'==typeof a&&(a=[[null,a,'']]);var e={};if(d)for(var f,g=0;g<this.length;g++)f=this[g][0],null!=f&&(e[f]=!0);for(var h,i=0;i<a.length;i++)(h=[].concat(a[i]),!(d&&e[h[0]]))&&(b&&(h[2]?h[2]=''.concat(b,' and ').concat(h[2]):h[2]=b),c.push(h))},c}},function(){},function(a,b,c){'use strict';function d(a,b){switch(b){case'es':return 12===a?'doce':13===a?'trece':14===a?'catorce':15===a?'quince':16===a?'diecis\xE9is':17===a?'diecisiete':18===a?'dieciocho':19===a?'diecinueve':20===a?'veinte':21===a?'veintiun':22===a?'veintidos':23===a?'veintitres':24===a?'veinticuatro':25===a?'veinticino':26===a?'veintiseis':27===a?'veintidossiete':28===a?'veintidosocho':29===a?'veintidosnueve':30===a?'treinta':31===a?'treinta y un':32===a?'treinta y dos':33===a?'treinta y tres':34===a?'treinta y cuatro':35===a?'treinta y cinco':36===a?'treinta y seis':37===a?'treinta y siete':38===a?'treinta y ocho':39===a?'treinta y nueve':40===a?'cuarenta':'mas de cuarenta';break;case'en':return 12===a?'twelve':13===a?'thirteen':14===a?'fourteen':15===a?'fifteen':16===a?'sixteen':17===a?'seventeen':18===a?'eighteen':19===a?'nineteen':20===a?'twenty':21===a?'twenty one':22===a?'twenty two':23===a?'twenty three':24===a?'twenty four':25===a?'twenty five':26===a?'twenty six':27===a?'twenty seven':28===a?'twenty eigth':29===a?'twenty nine':30===a?'thirty':31===a?'thirty one':32===a?'thirty two':33===a?'thirty three':34===a?'thirty four':35===a?'thirty five':36===a?'thirty six':37===a?'thirty seven':38===a?'thirty eigth':39===a?'thirty nine':40===a?'forty':'more then forty';}}function e(a){const b=new Date('September 1, 2006'),c=new Date;let e=c.getFullYear()-b.getFullYear();const f=c.getMonth()-b.getMonth();return(0>f||0==f&&c.getDate()<b.getDate())&&e--,d(e,a)}function f(){let a='';const b=document.getElementsByTagName('meta');for(let c=0;c<b.length;c++)'version'===b[c].getAttribute('name')&&(a=b[c].getAttribute('content'));return a}function g(){return localStorage.getItem('lang')?localStorage.getItem('lang'):(localStorage.setItem('lang','es'),localStorage.getItem('lang'))}function h(){1>v&&(v+=.075,setTimeout(function(){h()},50)),document.getElementById('contenido').style.opacity=v}function i(a,b){f();k(a,b),l(a,b),m(a,b),setTimeout(function(){$('.fa.fa-chevron-circle-down').removeClass('hidden').hide().fadeIn(50)},50),n(a,b),o(a,b),p(a,b.cursos),q(a,b),r(a,b);var c=$('#nav li.current').text();s(a,b),'Skills'===c&&$('.bar-expand').removeClass('progress').addClass('progress'),t(a,b.portfolio);let d=new Date().getFullYear();$('#footerYear').html(d)}function j(a,b){const c=g();c!==a&&localStorage.setItem('lang',a),k(a,b),l(a,b),m(a,b),n(a,b),o(a,b),p(a,b.cursos),q(a,b),r(a,b),s(a,b),t(a,b.portfolio)}function k(a,b){$('#loading').text(b.content.loading[a])}function l(a,b){$('#link-home').html(b.content.menu.inicio[a]).hide().fadeIn(1e3),$('#link-acerca').html(b.content.menu.acerca[a]).hide().fadeIn(1e3),$('#link-education').html(b.content.menu.educacion[a]).hide().fadeIn(1e3),$('#link-work').html(b.content.menu.trabajo[a]).hide().fadeIn(1e3),$('#link-skills').html(b.content.menu.skills[a]).hide().fadeIn(1e3),$('#link-portfolio').html(b.content.menu.portfolio[a]).hide().fadeIn(1e3),$('#lang').html(b.content.menu.idioma[a]).hide().fadeIn(1e3)}function m(a,b){$('#content-header').hide(),$('#header1').text(b.content.header1[a]),$('#header2').text(b.content.header2[a]),$('#headerAnios').text(e(a)),$('#content-header').fadeIn(1e3)}function n(a,b){$('#aboutTitulo').text(b.content.aboutTitulo[a]).hide().fadeIn(1e3),$('#aboutParrafo').text(b.content.aboutParrafo[a]).hide().fadeIn(1e3),$('#aboutContacto').text(b.content.aboutContacto[a]).hide().fadeIn(1e3),$('#aboutLinks').hide().fadeIn(1e3)}function o(a,b){$('#education').hide(),$('#educationTitulo').text(b.content.educationTitulo[a]),$('#educationLicenciado').text(b.content.educationLicenciado[a]),$('#educationLicUBA').text(b.content.educationLicUBA[a]),$('#educationLicPeriodo').text(b.content.educationLicPeriodo[a]),$('#educationTecnicatura').text(b.content.educationTecnicatura[a]),$('#educationUCES').text(b.content.educationUCES[a]),$('#educationUCESPeriodo').text(b.content.educationUCESPeriodo[a]),$('#educationPendienteUces').text(b.content.educationPendienteUces[a]),$('#educationCursosTitulo').text(b.content.educationCursosTitulo[a]),$('#education').fadeIn(1e3)}function p(a,b){var c,d;let e=0;var f='';$('#cursosContentVisible').html(''),$('#cursosContentOculto').html(''),$('#cursosContentVisible').hide(),$('#cursosContentOculto').hide(),b.forEach((b)=>{e++,'es'===a?(d=b.nombre,f='Mostrar mas'):(d=b.name,f='Show more'),c=1<b.url.length?`<a href="${b.url}" target="_blank">
                                <h3>${d}</h3>
                            </a>`:`<h3>${d}</h3>`,10>=e?$('#cursosContentVisible').append(`
                <div class="row item">
                    <div class="twelve columns"> ${c}
                        <p class="detalle-cursos">
                                <em class="detalle-cursos-em">${b.anio} • ${b.horas}h • ${b.institucion}</em>
                                <br/>
                        </p>
                    </div>
                </div>
            `):$('#cursosContentOculto').append(`
                <div class="row item">
                    <div class="twelve columns"> ${c}
                        <p class="detalle-cursos">
                                <em class="detalle-cursos-em">${b.anio} • ${b.horas}h • ${b.institucion}</em>
                                <br/>
                        </p>
                    </div>
                </div>
            `)}),0<$('#cargarMasCursos').length&&$('#cargarMasCursos').remove(),$('#cursosContentMostrarMas').append(`
        <div>
            <a id="cargarMasCursos" style="cursor: pointer;">${f}</a>
        </div>
    `),$('#cursosContentVisible').fadeIn(1e3)}function q(a,b){$('#work').hide(),$('#trabajoTitulo').text(b.content.trabajoTitulo[a]),$('#trabajoITLead').text(b.content.trabajoITLead[a]),$('#trabajoItLeadSector').text(b.content.trabajoItLeadSector[a]),$('#trabajoItLeadFecha').text(b.content.trabajoItLeadFecha[a]),$('#trabajoItLeadText').text(b.content.trabajoItLeadText[a]),$('#trabajoPM').text(b.content.trabajoPM[a]),$('#trabajoProjectManagerSector').text(b.content.trabajoProjectManagerSector[a]),$('#trabajoProjectManagerFecha').text(b.content.trabajoProjectManagerFecha[a]),$('#trabajoProjectManagerText').text(b.content.trabajoProjectManagerText[a]),$('#trabajoWebDeveloper').text(b.content.trabajoWebDeveloper[a]),$('#trabajoDesaWebSector').text(b.content.trabajoDesaWebSector[a]),$('#trabajoDesaWebFecha').text(b.content.trabajoDesaWebFecha[a]),$('#trabajoDesaWebText').text(b.content.trabajoDesaWebText[a]),$('#trabajoNet').text(b.content.trabajoNet[a]),$('#trabajoDesaDeskSector').text(b.content.trabajoDesaDeskSector[a]),$('#trabajoDesaDeskFecha').text(b.content.trabajoDesaDeskFecha[a]),$('#trabajoDesaDeskText').text(b.content.trabajoDesaDeskText[a]),$('#trabajoFuncional').text(b.content.trabajoFuncional[a]),$('#trabajoAnalisisSector').text(b.content.trabajoAnalisisSector[a]),$('#trabajoAnalisisFecha').text(b.content.trabajoAnalisisFecha[a]),$('#trabajoAnalisisText').text(b.content.trabajoAnalisisText[a]),$('#trabajoFreelance').text(b.content.trabajoFreelance[a]),$('#trabajoFreelanceSector').text(b.content.trabajoFreelanceSector[a]),$('#trabajoFreelanceFecha').text(b.content.trabajoFreelanceFecha[a]),$('#trabajoFreelanceText').text(b.content.trabajoFreelanceText[a]),$('#work').fadeIn(1e3)}function r(a,b){$('#docenciaTitulo').text(b.content.docenciaTitulo[a]).hide().fadeIn(1e3),$('#docenciaFecha').text(b.content.docenciaFecha[a]).hide().fadeIn(1e3),$('#docenciaText').text(b.content.docenciaText[a]).hide().fadeIn(1e3)}function s(a,b){$('#skillsTitulo').text(b.content.skillsTitulo[a]).hide().fadeIn(1e3),$('#skillsLiderTitle').text(b.content.skillsLiderTitle[a]).hide().fadeIn(1e3),$('#skillsWebTitle').text(b.content.skillsWebTitle[a]).hide().fadeIn(1e3),$('#skillsDBTitle').text(b.content.skillsDBTitle[a]).hide().fadeIn(1e3),$('#skillsDeskTitle').text(b.content.skillsDeskTitle[a]).hide().fadeIn(1e3),$('#skillsMobileTitle').text(b.content.skillsMobileTitle[a]).hide().fadeIn(1e3),$('#skillsOtrosTitle').text(b.content.skillsOtrosTitle[a]).hide().fadeIn(1e3),$('#skillsResponsabilidad').text(b.content.skillsResponsabilidad[a]).hide().fadeIn(1e3),$('#skillsProactividad').text(b.content.skillsProactividad[a]).hide().fadeIn(1e3),$('#skillsComunicacion').text(b.content.skillsComunicacion[a]).hide().fadeIn(1e3),$('#skillsMotivacion').text(b.content.skillsMotivacion[a]).hide().fadeIn(1e3),$('#skillsDelegation').text(b.content.skillsDelegation[a]).hide().fadeIn(1e3),$('#skillsAgile').text(b.content.skillsAgile[a]).hide().fadeIn(1e3),$('#skillsHtml').text(b.content.skillsHtml[a]).hide().fadeIn(1e3),$('#skillsCss').text(b.content.skillsCss[a]).hide().fadeIn(1e3),$('#skillsJs').text(b.content.skillsJs[a]).hide().fadeIn(1e3),$('#skillsJquery').text(b.content.skillsJquery[a]).hide().fadeIn(1e3),$('#skillsPhp').text(b.content.skillsPhp[a]).hide().fadeIn(1e3),$('#skillsLaravel').text(b.content.skillsLaravel[a]).hide().fadeIn(1e3),$('#skillsAngular').text(b.content.skillsAngular[a]).hide().fadeIn(1e3),$('#skillsNode').text(b.content.skillsNode[a]).hide().fadeIn(1e3),$('#skillsMySql').text(b.content.skillsMySql[a]).hide().fadeIn(1e3),$('#skillsOracle').text(b.content.skillsOracle[a]).hide().fadeIn(1e3),$('#skillsSqlServer').text(b.content.skillsSqlServer[a]).hide().fadeIn(1e3),$('#skillsVb').text(b.content.skillsVb[a]).hide().fadeIn(1e3),$('#skillsVbNet').text(b.content.skillsVbNet[a]).hide().fadeIn(1e3),$('#skillsC').text(b.content.skillsC[a]).hide().fadeIn(1e3),$('#skillsJava').text(b.content.skillsJava[a]).hide().fadeIn(1e3),$('#skillsAndroid').text(b.content.skillsAndroid[a]).hide().fadeIn(1e3),$('#skillsIonic').text(b.content.skillsIonic[a]).hide().fadeIn(1e3),$('#skillsGit').text(b.content.skillsGit[a]).hide().fadeIn(1e3),$('#skillsVisio').text(b.content.skillsVisio[a]).hide().fadeIn(1e3),$('#skillsJira').text(b.content.skillsJira[a]).hide().fadeIn(1e3),$('#skillsDocker').text(b.content.skillsDocker[a]).hide().fadeIn(1e3)}function t(a,b){$('#portfolioTitle').text('Portfolio').hide().fadeIn(1e3),$('#portfolioContentVisible').html(''),$('#portfolioContentOculto').html(''),$('#portfolioContentVisible').hide(),$('#portfolioContentOculto').hide();let c=0;var d,e,f;b.forEach((b)=>{'es'===a?(d=b.nombre,e=b.resumen,f='Mostrar mas'):'en'===a?(d=b.name,e=b.summary,f='Show more'):void 0;c++,10>=c?$('#portfolioContentVisible').append(`
                <div class="row">
                    <div class="twelve columns">
                    <h3><a href="${b.url}" target="_blank">${d}</a></h3>
                        <p class="detalle-cursos">
                            <em class="detalle-cursos-em hash-lenguaje"><span>${b.lenguaje}</em></span><br />
                            ${e}
                        </p>
                    </div>
                </div>
            `):$('#portfolioContentOculto').append(`
                <div class="row">
                    <div class="twelve columns">
                        <h3><a href="${b.url}" target="_blank">${d}</a></h3>
                            <p class="detalle-cursos">
                                <em class="detalle-cursos-em hash-lenguaje"><span>${b.lenguaje}</em></span><br />
                                ${e}
                            </p>
                    </div>
                </div>
            `)}),0<$('#cargarMasPortfolio').length&&$('#cargarMasPortfolio').remove(),$('#portfolioContent').append(`
        <div>
            <a id="cargarMasPortfolio" style="cursor: pointer;">${f}</a>
        </div>
    `),$('#portfolioContentVisible').fadeIn(1e3)}function u(){var a=document.createElement('img');a.src='../src/assets/images/home-background/home-background-1.jpg',a.onload=function(){$('header').css('background','url(\'../src/assets/images/home-background/home-background-1.jpg\') no-repeat top center'),h(),$('.loading').css('display','none')}}c.r(b);var v=0;$('body').on('click','#cargarMasCursos',function(){$('#cursosContentOculto').css('display','block'),$('#cargarMasCursos').remove()}),$('body').on('click','#cargarMasPortfolio',function(){$('#portfolioContentOculto').css('display','block'),$('#cargarMasPortfolio').remove()});const w=f(),x=async function(){const a=await $.ajax({url:'../src/services/content.json?v='+w});return a},y=async function(){const a=await $.ajax({url:'../src/services/portfolio.json?v='+w});return a},z=async function(){const a=await $.ajax({url:'../src/services/cursos.json?v='+w});return a};c(0);let A=[],B={},C=[],D=[];jQuery(document).ready(function(a){a('.flexslider').flexslider({namespace:'flex-',controlsContainer:'.flex-container',animation:'slide',controlNav:!0,directionNav:!1,smoothHeight:!0,slideshowSpeed:7e3,animationSpeed:400,randomize:!1}),a('.smoothscroll').on('click',function(b){b.preventDefault();var c=this.hash,d=a(c);a('html, body').stop().animate({scrollTop:d.offset().top},600,'swing',function(){window.location.hash=c})});var b=a('section'),c=a('#nav-wrap a');b.waypoint({handler:function(b,d){var e;e=a(this),'up'===d&&(e=e.prev());var f=a('#nav-wrap a[href="#'+e.attr('id')+'"]');c.parent().removeClass('current'),f.parent().addClass('current');var g=e.attr('id');'home'===g?(a('meta[name=theme-color]').remove(),a('head').append('<meta name="theme-color" content="#24004a">')):'about'===g?(a('meta[name=theme-color]').remove(),a('head').append('<meta name="theme-color" content="#292929">')):'education'===g?(a('meta[name=theme-color]').remove(),a('head').append('<meta name="theme-color" content="#24004a">')):'work'===g?(a('meta[name=theme-color]').remove(),a('head').append('<meta name="theme-color" content="#24004a">')):'docencia'===g?(a('meta[name=theme-color]').remove(),a('head').append('<meta name="theme-color" content="#24004a">')):'skills'===g?(a('meta[name=theme-color]').remove(),a('head').append('<meta name="theme-color" content="#24004a">')):'portfolio'===g?(a('meta[name=theme-color]').remove(),a('head').append('<meta name="theme-color" content="#292929">')):void 0;'skills'===g&&a('.bar-expand').removeClass('progress').addClass('progress')},offset:'35%'}),a('header').css({height:a(window).height()}),a(window).on('resize',function(){a('header').css({height:a(window).height()}),a('body').css({width:a(window).width()})}),a(window).on('scroll',function(){var b=a('header').height(),c=a(window).scrollTop(),d=a('#nav-wrap');c>.2*b&&c<b&&768<a(window).outerWidth()?d.fadeOut('fast'):c<.2*b?d.removeClass('opaque').fadeIn('fast'):d.addClass('opaque').fadeIn('fast')}),a('#lang').click(function(b){let c='es';switch(b.target.innerText){case'ENGLISH':c='en',b.target.innerText='ESPA\xD1OL';break;case'ESPA\xD1OL':c='es',b.target.innerText='ENGLISH';}var d=a('#nav li.current').children().attr('href'),e=a('#nav-wrap').children().eq(1);a('#lang').parent().removeClass('current'),j(c,A),e.click(),a(this).attr('href',d)})});c(4);(async function(){Promise.all([x(),z(),y()]).then((a)=>{const b=g();B=a[0],D=a[1],C=a[2],A={content:B,cursos:D,portfolio:C},i(b,A),u()})})()}]);