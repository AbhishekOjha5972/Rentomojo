
let modelbtn=document.getElementById('navbar__city__button');
let modelbg=document.querySelector('.rm-city-select__background')
let modelcloss=document.querySelector('#close-city-selector-model');


modelbtn.addEventListener("click",function(){
    console.log("hello")
    modelbg.classList.add('model_active');
})
modelcloss.addEventListener("click",function(){
    modelbg.classList.remove('model_active');
})