
import {data} from './array.js';
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
                    recorrido(lista[i].getAttribute("value"))
                    deleteModal();
                    addDataModal();
                    deleteSelector();
                    addDataSelector();
                    modal.classList.toggle("selector-close");
                    selector.classList.remove("prueba");
                    setTimeout(function(){
                        modalS.style.visibility = "hidden";
                    },1000);
                    });
                     
            }
    }
    function deleteModal(){
        modal.innerHTML='';
    }        
    function addDataModal(){
        data.forEach(element => {
            modal.innerHTML +=   ' <div class="selector__content" value="'+element.id+'" alt="'+element.selection+'">'+
            element.image+
            '<div class="selector__content--text">'+
            ' <h5>'+element.title+' <span>'+element.subtitle+'</span> </h5>'+
            '<p>'+element.description+'</p></div></div>'
            
            });
    }
    function deleteSelector(){
        selector.innerHTML=''
    }
    function addDataSelector(){
            const toShow = data.find(el => el.selection) || null;
            selector.innerHTML +=  toShow.image+
            '<div class="selector__content--text">'+
            ' <p>'+toShow.title+' <span>'+toShow.subtitle+'</span> </p> </div>';

    }

    function inicio() {
            addDataSelector();
            addDataModal();
           
    }

    function showHiddenSelector(){
        
        if(selector.classList.length <= 1){
            modalS.style.visibility = "visible";
            modal.classList.toggle("selector-close");
            selector.classList.add("prueba");  
            console.log("opcion 1",selector.classList)    
        }else{
            modal.classList.toggle("selector-close");
            selector.classList.remove("prueba");
            setTimeout(function(){
                modalS.style.visibility = "hidden";
            },1000);
            console.log("opcion 2",selector.classList)    
        }   
        
    }
    
    document.addEventListener("DOMContentLoaded", inicio);
    
    
    abrir.addEventListener("click",showHiddenSelector);
    
    
    function seleccionador(e){
        const lista = modal.children;

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
    
    window.addEventListener( "click", ahora)

  function recorrido(item){
    console.log("item",item);
    for(let i=0; i < data.length; i++ ){
        if(data[i]["id"]  == item){
            data[i]["selection"] = true; 
        }else{
            data[i]["selection"] = false; 
        }
    }
    
  }