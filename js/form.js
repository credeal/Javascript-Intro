let btnAdicionar = document.querySelector("#adicionar-paciente");

//1º Maneira
titulo.addEventListener("click",MostraMensagem);

function MostraMensagem(){
}

//2º Maneira - Função Anonima
titulo.addEventListener("click", function(){
})


btnAdicionar.addEventListener("click", function(event){
    event.preventDefault();//Evitar o procedimento padrao da pagina

    //Quando vc utiliza o form , vc pode pegar pelo name os inputs
    let form = document.querySelector("#form-add");
    
    //Obtem as informações do Formulario para add um paciente
    let paciente = obtemInformacaoPaciente(form);

    //Cria a (TR) a (TD) do paciente
    var pacienteTr =  montaTr(paciente);

    //Pegando a tabela MÃE
    let tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);

    //Desenvolvido por mim: LimparCampos(form);
    form.reset();
    ValidarTabela();
});

function montaTd(dado,classeNome){
    let td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classeNome)
    return td;
}

function montaTr(paciente){
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome,"info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso,"info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura,"info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura,"info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc,"info-imc"));
    
    return pacienteTr;
}

function obtemInformacaoPaciente(form){
    //MATOU A PAU KKKKKK
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: CalculaImc(form.peso.value,form.altura.value)
    }

    return paciente;    
}

function LimparCampos(form){
    form.nome.value = "";
    form.peso.value = "";
    form.altura.value = "";
    form.gordura.value = "";
}