let movile_icon = document.getElementById("movile_icon");
let main_menu  = document.getElementById("main_menu");

movile_icon.addEventListener("click",()=>{
    main_menu.classList.toggle('hidden');
})