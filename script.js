changeEl = document.getElementById("change");
containerEl = document.querySelector('.container');

let on = false;
changeEl.addEventListener("click",()=>{
   
    if(on){
        changeEl.innerHTML = "Light"
        containerEl.classList.remove('dark');
        containerEl.classList.add('light');
        on=false;
    }
    else{
         changeEl.innerHTML = "Dark"
         containerEl.classList.remove('light');
         containerEl.classList.add('dark');
         on=true;
    }
}
  
    
);