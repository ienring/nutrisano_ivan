document.addEventListener('DOMContentLoaded', function(){
    eventListeners();
    navFija();
    crearGaleria();
    scrollNav();
});

window.addEventListener('DOMContentLoaded', function(){

});
//Slider
    const slider = [...document.querySelectorAll('.slider__body')];
    const arrowNext = document.querySelector('#next');
    const arrowBefore = document.querySelector('#before');

    let value;

    arrowNext.addEventListener('click', ()=>changePosition(1));
    arrowBefore.addEventListener('click', ()=>changePosition(-1));

    function changePosition(change){
        const currentElement = Number(document.querySelector('.slider__body--show').dataset.id);

        value = currentElement;
        value+= change;

        if( value === 0 || value == slider.length+1){
            value = value === 0 ? slider.length : 1;
        }
        slider[value-1].classList.toggle('slider__body--show');
        slider[currentElement-1].classList.toggle('slider__body--show');
    }
//
function eventListeners(){
    const mobileMenu = document.querySelector('.mobile-menu');
    mobileMenu.addEventListener('click', navegacionResoponsive);
}
function navegacionResoponsive(){
    const navegacion = document.querySelector('.navegacion-principal');
    navegacion.classList.toggle('mostrar');
}

function navFija(){
    const barra = document.querySelector('.header-container');
    const portada = document.querySelector('.portada-container');
    const body = document.querySelector('body');
    const logo = document.querySelector('.logo');

    window.addEventListener('scroll', function(){
        if(portada.getBoundingClientRect().top<-10){
            barra.classList.add('fijada');
            body.classList.add('body-scroll');
            logo.classList.add('logo-scale');
        }else {
            barra.classList.remove('fijada');
            body.classList.remove('body-scroll');
            logo.classList.remove('logo-scale');
        }
    });
}

//Galeria
function crearGaleria() {
    const galeria = document.querySelector('.galeria-imagenes');
    for(let i = 1; i <= 12; i++ ) {
        const imagen = document.createElement('picture');
        imagen.innerHTML = `
            <source srcset="build/img/thumb/${i}.webp" type="image/avif"> 
            <source srcset="build/img/thumb/${i}.webp" type="image/webp"> 
            <img loading="lazy" width="300" height="200" src="build/img/thumb/${i}.jpg" alt="Imagen Galeria">
            `;
        imagen.onclick = function() {
            mostrarImagen(i);
        }
        imagen.classList.add('imagen-galeria');
        galeria.appendChild(imagen);
    }
}
function mostrarImagen(id){
        const imagen = document.createElement('picture');
            imagen.innerHTML = `
                <source srcset="build/img/galeria/${id}.avif" type="image/avif"> 
                <source srcset="build/img/galeria/${id}.webp" type="image/webp"> 
                <img loading="lazy" width="200" height="500" src="build/img/grande/${id}.jpg" alt="Imagen Galeria">
            `;
        const overlay = document.createElement('DIV');
        overlay.appendChild(imagen);
        overlay.classList.add('overlay');
        overlay.onclick = function() {
            const body = document.querySelector('body');
            body.classList.remove('fijar-body');
            overlay.remove();
        }

        const cerrarModal = document.createElement('P');
        cerrarModal.textContent = "X";
        cerrarModal.classList.add('boton-cerrar');
        cerrarModal.onclick = function(){
            const body = document.querySelector('body');
            body.classList.remove('fijar-body');
            overlay.remove();
        }
        overlay.appendChild(cerrarModal);
    
    
        const body = document.querySelector('body');
        body.appendChild(overlay);
        body.classList.add('fijar-body');
}
function scrollNav() {
    const enlace = document.querySelector('.footer a #salto');
        enlace.addEventListener('click', function(e){
            e.preventDefault();
            
            const href = e.target.attributes.href.value;
            const seccion = document.querySelector(href);
            seccion.scrollIntoView({behavior: "smooth"});
        } )
}

















// document.addEventListener('DOMContentLoaded', function(){
//     iniciarApp();
// });
// function iniciarApp() {
//     scrollNav();
//     navegacionFija()
// }

// function navegacionFija(){
//     const barra =document.querySelector('.header')
//     const sobreFestival = document.querySelector('.sobre-festival');
//     const body = document.querySelector('body')

//     window.addEventListener('scroll', function(){

//         if( sobreFestival.getBoundingClientRect().top < 0 ){
//             barra.classList.add('fijo');
//             body.classList.add('body-scroll');
//         } else {
//             barra.classList.remove('fijo');
//             body.classList.remove('body-scroll');
//         }
//     })
// }

// function scrollNav() {
//     const enlaces = document.querySelectorAll('.navegacion-principal a');

//     enlaces.forEach( enlace => {
//         enlace.addEventListener('click', function(e) {
//             e.preventDefault();

//             const seccionScroll = e.target.attributes.href.value;
//             const seccion = document.querySelector(seccionScroll);
//             seccion.scrollIntoView({ behavior: "smooth"});
//         });
//     });
// }


 

