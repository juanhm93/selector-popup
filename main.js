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

import {data} from './array.js';
let modal = document.getElementById("modal");
let modals = data
let selector = document.getElementById("selector");
let abrir = document.querySelectorAll(".selector")[0];
let modalS = document.querySelectorAll(".modal-selector")[0];

// function seleccionador(variable){
    //     console.log(variable);
    // }
    function ahora(){
        const lista = modal.children;
        console.log("lista");
    
        for(let i=0 ; i < lista.length; i++){  
            lista[i].addEventListener("click",function(e){
                let j = lista[i].getAttribute("value");
                for(let i=0 ; i < lista.length; i++){
                    if(i == j-1){
                        data[j-1]['selection'] = true;
                    } 
                    data[i]['selection'] = false;
                }
            });
        }
    }
    // console.log(data);
    document.addEventListener("DOMContentLoaded", function(event) {
        const toShow = data.find(el => el.selection) || null;
        // console.log(toShow);
        selector.innerHTML +=  toShow.image+
        '<div class="selector__content--text">'+
        ' <p>'+toShow.title+' <span>'+toShow.subtitle+'</span> </p> </div>';
        
        data.forEach(element => {
            modal.innerHTML +=   ' <div class="selector__content prueba" value="'+element.id+'">'+
            element.image+
            '<div class="selector__content--text">'+
            ' <h5>'+element.title+' <span>'+element.subtitle+'</span> </h5>'+
            '<p>'+element.description+'</p></div></div>'
            
        });
        ahora()
        console.log(data);
    });
    
    
    abrir.addEventListener("click",function(e){
        
        if(selector.classList.length <= 1){
            // console.log(selector.classList.length);
            modalS.style.visibility = "visible";
            modal.classList.toggle("selector-close");
            selector.classList.add("prueba");
        }else{
            // console.log(selector.classList[0]);
            modal.classList.toggle("selector-close");
            selector.classList.remove("prueba");
            setTimeout(function(){
                modalS.style.visibility = "hidden";
            },1000);
        }   
        
    });
    
