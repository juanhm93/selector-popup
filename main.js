// let cerrar = document.querySelectorAll(".close")[0];
// let abrir = document.querySelectorAll(".cta")[0];
// let modal = document.querySelectorAll(".modal")[0];
// let modalC = document.querySelectorAll(".modal-container")[0];

// abrir.addEventListener("click",function(e){
//     e.preventDefault();
//     modalC.style.opacity = "1";
//     modalC.style.visibility = "visible";
//     modal.classList.toggle("modal-close");
// });

// cerrar.addEventListener("click", function(){
//     modal.classList.toggle("modal-close");
//     setTimeout(function(){
//         modalC.style.opacity = "0";
//         modalC.style.visibility = "hidden";
//     },900)
// });

// window.addEventListener("click",function(e){
//     // console.log(e.target);
//     // e.target = muestra en este caso en consola en codigo la parte que estas tocando con el cursor
//     if(e.target == modalC){
//         modal.classList.toggle("modal-close");
//         setTimeout(function(){
//             modalC.style.opacity = "0";
//             modalC.style.visibility = "hidden";
//         },900)
//     }

// });

let data = [
    {
        id: 1,
        title: "No require",
        subtitle: "",
        description: "Para tu servicio no necesitas ninguno en especial.",
        image: "img/senal-de-stop.svg"
    },
    {
        id: 2,
        title: "Sobre",
        subtitle: "(Carta u Oficio)",
        description: "Si necesitas enviar documentos, esta es tu mejor opcion.",
        image: "img/sobre.svg"
    },
    {
        id: 3,
        title: "Maleta",
        subtitle: "(40x38x38 cms)",
        description: "Ideal para productos que no superen los 38 cms.",
        image: "img/entrega.svg"
    },
    {
        id: 4,
        title: "Baul o maletero",
        subtitle: "(30x30x30 cms)",
        description: "Ideal para paquetes pequenos como una caja de zapatos.",
        image: "img/entrega.svg"
    },
    {
        id: 5,
        title: "Parrilla",
        description: "Ideal si necesitas llevar paquetes de hasta 50x50x50cms.",
        image: "img/entrega.svg"
    }
];

document.addEventListener("DOMContentLoaded", function(event) {
        
  });