let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida - Nutricionista";

ValidarTabela();

function ValidarTabela(){
    var pacientes = document.querySelectorAll(".paciente");


    for (let i = 0; i < pacientes.length; i++) {
        var peso = pacientes[i].querySelector(".info-peso").textContent;
        var altura = pacientes[i].querySelector(".info-altura").textContent;
        var imc = pacientes[i].querySelector(".info-imc");

        if(ValidaPeso(peso)){
            pacientes[i].classList.add("cor-de-erro");
            imc.textContent = "Peso Inválido.";
        }
        else if(ValidaAltura(altura)){
            pacientes[i].classList.add("cor-de-erro"); //Boa pratica é adicionar uma classe para mudar o visual
            imc.textContent = "Altura Invalída.";
        }
        else
            imc.textContent = CalculaImc(peso,altura)   
    }
}

function ValidaPeso(peso){
    if(peso < 0 || peso > 1000)
        return true;
    
    return false;
}

function ValidaAltura(altura){
    if(altura < 0 || altura > 3.00)
        return true;
    
    return false;
}

function CalculaImc(p_peso,p_altura){
    return (p_peso / (p_altura * p_altura)).toFixed(2);
}