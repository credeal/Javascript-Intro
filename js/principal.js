let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida - Nutricionista";
console.log(titulo);

var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes)


for (let i = 0; i < pacientes.length; i++) {
    var peso = pacientes[i].querySelector(".info-peso").textContent;
    var altura = pacientes[i].querySelector(".info-altura").textContent;
    var imc = pacientes[i].querySelector(".info-imc");

    if(peso < 0 || peso > 1000){
        pacientes[i].classList.add("cor-de-erro");
        imc.textContent = "Peso Inválido.";
    }
    else if(altura < 0 || altura > 3.00){
        pacientes[i].classList.add("cor-de-erro"); //Boa pratica é adicionar uma classe para mudar o visual
        imc.textContent = "Altura Invalída.";
    }
    else
        imc.textContent =((peso / (altura * altura))).toFixed(2);
}
