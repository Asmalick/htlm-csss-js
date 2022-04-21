const titreSpans = documentquerySelectorAll ('h1 span');
const btns = document.querySelectorAll('.btn-first');
const logo = document.querySelector('.logo');
const medias = document.querySelectorAll('.bulle');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');

window.adddEventListener('load',() => {
    const TL = gsap.timeline({paused:true}); // la mettre sur paused avant de la jouer pour éviter un bug.

    TL
    .staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease:"power2.out"}, 0.3) 
    /* staggerFrom : methode d'animations de plusieurs éléments à la suite */
    .staggerFrom(btns, 1, {opacity: 0, ease:"power2.out"}, 0.3, '-=1') 
    .from(l1, 1, {width:0, ease: "power2.out"}, '-=2')
    .from(l2, 1, {width:0, ease: "power2.out"}, '-=2')
    .from(logo, 0.4, {transform:"scale(0)", ease: "power2.out"}, '-=2')
    .staggerFrom(medias, 1, {right: -200, ease:"power2.out"}, 0.3, '-=1') 

    TL.play();
})