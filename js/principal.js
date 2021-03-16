let titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida - Nutricionista";
console.log(titulo);

ValidarTabela();

function ValidarTabela(){
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
}

let btnAdicionar = document.querySelector("#adicionar-paciente");

btnAdicionar.addEventListener("click", function(event){
    event.preventDefault();//Evitar o procedimento padrao da pagina
    let form = document.querySelector("#form-add");//Quando vc utiliza o form , vc pode pegar pelo name os inputs
    let nome = form.nome.value;
    let peso = form.peso.value;
    let altura = form.altura.value;
    let gordura = form.gordura.value;

    console.log(nome,peso,altura,gordura)

    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    let nomeTd = document.createElement("td");
    nomeTd.textContent = nome;
    nomeTd.classList.add("info-nome");

    let pesoTd = document.createElement("td");
    pesoTd.textContent = peso;
    pesoTd.classList.add("info-peso");

    let alturaTd = document.createElement("td");
    alturaTd.textContent = altura;
    alturaTd.classList.add("info-altura");

    let gorduraTd = document.createElement("td");
    gorduraTd.textContent = gordura;
    gorduraTd.classList.add("info-gordura")

    let imcTd = document.createElement("td");
    imcTd.textContent = (peso / (altura * altura)).toFixed(2);
    imcTd.classList.add("info-imc");

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    console.log(pacienteTr  )

    let tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);


    ValidarTabela();
});

//1º Maneira
titulo.addEventListener("click",MostraMensagem);

function MostraMensagem(){
    alert("OLAAA");
}

//2º Maneira - Função Anonima
titulo.addEventListener("click", function(){
    console.log("IHUUU");
})