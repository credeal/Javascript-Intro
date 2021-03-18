let  btnbuscar = document.querySelector("#buscar-paciente");

btnbuscar.addEventListener("click", function(){
    console.log("Buscando Pacientes..")
    
    //FAZ REQUISIÇÕES HTTP
    let xhr = new XMLHttpRequest();
    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");
    xhr.addEventListener("load", function(){
        if(xhr.status == 200){
            let resposta = xhr.responseText;
            console.log(typeof resposta);

            let pacientes = JSON.parse(xhr.responseText);
            console.log(typeof pacientes);

            pacientes.forEach(element => {
                AdicionaPacienteNaTabela(element);
            });
        }
        else{
            console.log(xhr.status);
            console.log(xhr.responseText);
            let erroajax = document.querySelector("#erroAjax");
            erroajax.classList.remove("invisivel");
        }

        

    });
    
    xhr.send();
});