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
import { element } from 'prop-types';
let modal = document.getElementById("modal");
let selector = document.getElementById("selector");
let abrir = document.querySelectorAll(".selector")[0];
let modalS = document.querySelectorAll(".modal-selector")[0];

    function ahora(){
        const lista = modal.children;
        console.log("lista");
        
            for(let i=0 ; i < lista.length; i++){  
                lista[i].addEventListener("click",function(e){
                
                lista[i].setAttribute("alt",true);
               console.log("atributo ",lista[i].getAttribute("value"));
               console.log(lista[i]); 
            //    recorrido(lista[i].getAttribute("value"));
               // let j = lista[i].getAttribute("value");
                // for(let i=0 ; i < lista.length; i++){
                    //     if(i == j-1){
                        
                        
                        // data[j-1]['selection'] = true;
                        // console.log(data[j-1]);
                        //     } 
                        //     data[i]['selection'] = false;
                        // }
                    });
            }
    }
            
            function inicio() {
                const toShow = data.find(el => el.selection) || null;
                selector.innerHTML +=  toShow.image+
                '<div class="selector__content--text">'+
                ' <p>'+toShow.title+' <span>'+toShow.subtitle+'</span> </p> </div>';
                
                data.forEach(element => {
                    modal.innerHTML +=   ' <div class="selector__content prueba" value="'+element.id+'" alt="'+element.selection+'">'+
                    element.image+
                    '<div class="selector__content--text">'+
                    ' <h5>'+element.title+' <span>'+element.subtitle+'</span> </h5>'+
                    '<p>'+element.description+'</p></div></div>'
                    
        });
        ahora();
    }

    function modalFunction(){
        
        if(selector.classList.length <= 1){
            modalS.style.visibility = "visible";
            modal.classList.toggle("selector-close");
            selector.classList.add("prueba");
        }else{
            modal.classList.toggle("selector-close");
            selector.classList.remove("prueba");
            setTimeout(function(){
                modalS.style.visibility = "hidden";
            },1000);
        }   
        
    }
    
    document.addEventListener("DOMContentLoaded", inicio);
    
    
    abrir.addEventListener("click",modalFunction);
    
    
    function seleccionador(e){
        const lista = modal.children;
        const hijo = lista.children;

        const referencia = document.querySelectorAll("div.modals > div.selector__content > svg");

        console.log(e.target);
    
        for(let i=0 ; i < lista.length; i++){  
            for(let j = 0; j < lista[i].children.length; j++ ){
                for(let k = 0; k < lista[i].children.length; k++ ){
                    if(e.target == lista[i] || e.target == lista[i].children || e.target == lista[i].children.item(1).children.item(0)){
                            console.log(lista[i].children.length); 
                               console.log(1);
                               console.log(lista[i].children.item(1).children.item(0));
                           }
                }

            }

        }
    }
    
    // window.addEventListener( "click", seleccionador)

  