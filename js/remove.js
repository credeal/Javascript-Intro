let pacientes = document.querySelectorAll(".paciente");

//Evento Bubbling
let tabela = document.querySelector("table");




tabela.addEventListener("dblclick",function(event){
        //console.log(event.target);
       // event.target.remove() <- dessa maneira ele remove apenas  o td
       let alvoDoEvento = event.target;
       let paiDoAlvo = alvoDoEvento.parentNode;// TR

       paiDoAlvo.classList.add("fadeOut");
       setTimeout(function(){
            paiDoAlvo.remove();
       },700)
});

/*
pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick",function(){
        this.remove();
    });
});
*/