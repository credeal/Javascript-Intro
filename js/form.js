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

    var erro = ValidarPaciente(paciente);
    //Validando Formulário
    if(erro.length != 0){
        ErroMensagem(erro);
        return
    }

    let msgErro = document.querySelector("#msgErro");
    msgErro.innerHTML = "";
    msgErro.classList.remove("mensagemDeErro");

    AdicionaPacienteNaTabela(paciente);

    //Desenvolvido por mim: LimparCampos(form);
    form.reset();
    
});

function ErroMensagem(mensagem){
    let ul = document.querySelector("#msgErro");
    ul.innerHTML = "";

    mensagem.forEach(function(elemento) {
        let li = document.createElement("li");
        li.textContent = elemento;
        ul.appendChild(li);
    });

    ul.classList.add("mensagemDeErro");
}

function AdicionaPacienteNaTabela(paciente){
    //Cria a (TR) a (TD) do paciente
    var pacienteTr =  montaTr(paciente);
      //Pegando a tabela MÃE
    let tabela = document.querySelector("#tabela-pacientes");
    tabela.appendChild(pacienteTr);
}

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

function ValidarPaciente(paciente){

    var erros = [];

    if(paciente.nome.length == 0){
        erros.push(" * campo nome está em branco ");
    }

    if(paciente.gordura.length == 0)
        erros.push(" * campo gordura está em branco ");
    
    if(paciente.peso.length == 0){
        erros.push(" * campo peso está em branco ");
    }
    else{
        if(ValidaPeso(paciente.peso))
            erros.push("* Peso Invalído ");
    }

    if(paciente.altura.length == 0){
        erros.push(" * campo Altura está em branco ");
    }
    else{
        if(ValidaAltura(paciente.altura))
        erros.push(" * Altura Invalída ");
    }

    return erros;
    
}