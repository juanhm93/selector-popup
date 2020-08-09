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
        Selection: false,
        image: "img/senal-de-stop.svg"
    },
    {
        id: 2,
        title: "Sobre",
        subtitle: "(Carta u Oficio)",
        description: "Si necesitas enviar documentos, esta es tu mejor opcion.",
        Selection: true,
        image: "img/sobre.svg"
    },
    {
        id: 3,
        title: "Maleta",
        subtitle: "(40x38x38 cms)",
        description: "Ideal para productos que no superen los 38 cms.",
        Selection: false,
        image: "img/entrega.svg"
    },
    {
        id: 4,
        title: "Baul o maletero",
        subtitle: "(30x30x30 cms)",
        description: "Ideal para paquetes pequenos como una caja de zapatos.",
        Selection: false,
        image: "img/entrega.svg"
    },
    {
        id: 5,
        title: "Parrilla",
        description: "Ideal si necesitas llevar paquetes de hasta 50x50x50cms.",
        Selection: false,
        image: "img/entrega.svg"
    }
];

document.addEventListener("DOMContentLoaded", function(event) {
       let modal = document.getElementById("modal");
       let selector = document.getElementById("selector");
       const toShow = data.find(el => el.Selection) || null;
        console.log(toShow);
       selector.innerHTML +=  '<img src='+toShow.image+' width="40px" alt="">'+
                                '<div class="selector__content--text">'+
                                ' <h5>'+toShow.title+' <span>'+toShow.subtitle+'</span> </h5> </div>';

       data.forEach(element => {
           modal.innerHTML +=   ' <div class="selector__content">'+
                                '<img src='+element.image+' width="40px" alt="">'+
                                '<div class="selector__content--text">'+
                                ' <h5>'+element.title+' <span>'+element.subtitle+'</span> </h5>'+
                                '<p>'+element.description+'</p></div></div>'

       });
    //    modal.appendChild(div);
    //    console(modal);
  });
