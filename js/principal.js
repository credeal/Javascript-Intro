let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida - Nutricionista";
console.log(titulo);

var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

let tdImc = paciente.querySelector(".info-imc");

if(peso < 0 || peso > 1000){
    console.log("Peso Inválido.");
        tdImc.textContent = "Peso Inválido.";

}
else if(altura < 0 || altura > 3.00){
    console.log("Altura Inválida.");
    tdImc.textContent = "Peso Inválido.";
}
else{
    var imc = peso / (altura * 2);
    tdImc.textContent = imc;
}



console.log(paciente); // TR
console.log(tdPeso);// TD = que tem o peso

console.log(tdImc.textContent);