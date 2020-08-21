
import {data} from './array.js';
let modal = document.getElementById("modal");
let selector = document.getElementById("selector");
let abrir = document.querySelectorAll(".selector")[0];
let modalS = document.querySelectorAll(".modal-selector")[0];



function addDataModal(){
    modal.innerHTML='';
    data.forEach(element => {
        modal.innerHTML +=   ' <div class="selector__content-modal '+element.selection+'" value="'+element.id+'" alt="">'+
        element.image+
        '<div class="selector__content--text">'+
        ' <h5>'+element.title+' <span>'+element.subtitle+'</span> </h5>'+
        '<p>'+element.description+'</p></div></div>'
        
        });
}
function addDataSelector(){
        selector.innerHTML=''
        const toShow = data.find(el => el.selection) || "";
        selector.innerHTML +=  toShow.image+
        '<div class="selector__content--text">'+
        ' <p>'+toShow.title+' <span>'+toShow.subtitle+'</span> </p> </div>';

}
    
 

function ahora(){
    const lista = modal.children;
    // let optionSelector = document.querySelector("#selector.selector__content--text");
    let optionActive = document.querySelector(".selector__content-modal.active");
    let num = 0;
 
        for(let i=0 ; i < lista.length; i++){  
            lista[i].addEventListener("click",function(e){

                num = this.getAttribute("value") - 1;
                tacks(num);
                optionActive.classList.remove("active");
                this.classList.add("active");
                selector.children[0].innerHTML =  data[num]["image"];
                selector.children[1].innerHTML =  ' <p>'+data[num]["title"]+' <span>'+data[num]["subtitle"]+'</span> </p>';  
                showHiddenSelector();
                });
                    
        }
}        

function showHiddenSelector(){
    
    
    if(modal.classList.length > 1){
        modalS.style.visibility = "visible";
        modal.classList.toggle("selector-close");      
    }else{
        modal.classList.toggle("selector-close");
        setTimeout(function(){
            modalS.style.visibility = "hidden";
        },1000);    
    }   
    
}
function tacks(item){
    
    for(let i=0; i < data.length; i++ ){
        if(data[i]["id"]  == item){
            data[i]["selection"] = "active"; 
        }else{
            data[i]["selection"] = ""; 
        }
    }
    
}
    
    addDataSelector();
    addDataModal();
    abrir.addEventListener("click",showHiddenSelector);
    window.addEventListener( "click", ahora);


  