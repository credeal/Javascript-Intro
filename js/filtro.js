let campoFiltro = document.querySelector("#filtrar-tabela");


campoFiltro.addEventListener("input", function(){
        let pacientes = document.querySelectorAll(".paciente");
        if(this.value.length > 0 ){
            for (let i = 0; i < pacientes.length; i++) {
                let paciente = pacientes[i];
                let tdNome = paciente.querySelector(".info-nome");
                let nome = tdNome.textContent;
                let expressao  = new RegExp(this.value,"i")
                //Primeiro parametro da RegExp é o que vc quer que ela busca
                //Segundo parametro é como vc quer que ela busque
                if(!expressao.test(nome))
                    paciente.classList.add("invisivel");
                else
                    paciente.classList.remove("invisivel");
            
            }
        }else{
            for (let i = 0; i < pacientes.length; i++) {
                let paciente = pacientes[i];
                paciente.classList.remove("invisivel");
            }
        }
      
})