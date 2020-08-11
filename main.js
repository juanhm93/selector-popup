
import {data} from './array.js';
let modal = document.getElementById("modal");
let selector = document.getElementById("selector");
let abrir = document.querySelectorAll(".selector")[0];
let modalS = document.querySelectorAll(".modal-selector")[0];

function addDataModal(){
    modal.innerHTML='';
    data.forEach(element => {
        modal.innerHTML +=   ' <div class="selector__content" value="'+element.id+'" alt="'+element.selection+'">'+
        element.image+
        '<div class="selector__content--text">'+
        ' <h5>'+element.title+' <span>'+element.subtitle+'</span> </h5>'+
        '<p>'+element.description+'</p></div></div>'
        
        });
}
function addDataSelector(){
        selector.innerHTML=''
        const toShow = data.find(el => el.selection) || null;
        selector.innerHTML +=  toShow.image+
        '<div class="selector__content--text">'+
        ' <p>'+toShow.title+' <span>'+toShow.subtitle+'</span> </p> </div>';

}
    
 

function ahora(){
    const lista = modal.children;
    console.log("lista");   
        for(let i=0 ; i < lista.length; i++){  
            lista[i].addEventListener("click",function(e){
    
                console.log(selector.classList); 
                recorrido(lista[i].getAttribute("value"))
                addDataModal();
                showHiddenSelector();
                addDataSelector();
                console.log(selector.classList); 
                });
                    
        }
}        

function showHiddenSelector(){
    
    console.log("clases ",selector.getAttribute("value")) 

    if(selector.getAttribute("value") == "false"){
        modalS.style.visibility = "visible";
        modal.classList.toggle("selector-close");
        selector.setAttribute("value",true);  
        console.log("opcion 1",selector)    
    }else{
        modal.classList.toggle("selector-close");
        setTimeout(function(){
            modalS.style.visibility = "hidden";
        },1000);
        selector.setAttribute("value",false);
        console.log("opcion 2",selector)    
    }   
    
}
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
    
    addDataSelector();
    addDataModal();
    
    abrir.addEventListener("click",showHiddenSelector);
    window.addEventListener( "click", ahora)


  