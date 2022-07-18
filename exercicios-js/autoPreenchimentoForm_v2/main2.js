
'use strict';
const FORM = document.querySelector("#form");
const CEP = document.querySelector('#cep');
const SPAM = document.querySelector(".spam");
const SPAN_CEP = document.querySelector("#spanCep");

// Mostra informativo do formulário;
abreSpam();

// pesquisa o cep
async function pesquisaCep(){
  let cep =  CEP.value;
  if(cep){
    if(validaCep(cep)){
      const RESPONSE = await fetch(`https://viacep.com.br/ws/${formataCep(cep)}/json/`);
      const ENEDERECO = await RESPONSE.json();
      console.log(ENEDERECO)
      if(ENEDERECO.erro){
        SPAN_CEP.textContent = "CEP inválido";
        limpaCampo(SPAN_CEP);
        return;
      }
      preencheCampos(ENEDERECO);
    }else{
      // Mostra uma mensagem, caso o cep passado  não seja válido!
      SPAN_CEP.textContent = "Preencha este Campo corretamente!";
      limpaCampo(SPAN_CEP);
    }
  }
}
function limpaCampo(campo){
  setTimeout(()=>{
    SPAN_CEP.textContent = "";
    FORM.reset();
  },3000);
}
function validaCep(cep){
  var regex = /\d{5}-?\d{3}/
  return regex.test(cep);
}
function formataCep(cep){
  return cep.replace("-","");
}
function preencheCampos(endereco){
  FORM.rua.value = endereco.logradouro;
  FORM.bairro.value = endereco.bairro;
  FORM.cidade.value = endereco.localidade;

  //selecionando UF
  var select = document.querySelector("#uf");
  for(let i = 0; i < select.options.length; i++){
    if(select.options[i].value == endereco.uf.toLowerCase()){
      select.selectedIndex = i;
    }
  }
}

//verifica se o caracter inserido no campo é válido (se é um número!);
function verificaCaracter(e){
  const char = String.fromCharCode(e.keyCode);
  let regexChar = /[0-9-]/;

  if(char.match(regexChar)){
    return true
  }
  return false
}


function abreSpam(){
  SPAM.parentNode.classList.add("ativo");
  setTimeout(fechaSpam,5000);
}
function fechaSpam(){
  SPAM.parentNode.classList.remove("ativo");
}

// para limitar a inserção de caracteres;
CEP.addEventListener("keypress", (e) => {
  if(!verificaCaracter(e)){
    e.preventDefault();
  }
});

// Recupera os valores do formulário
function pegaValoresForm(){
  const DADOS_FORM = {
    cep : FORM.cep.value,
    rua : FORM.rua.value,
    numero : FORM.numero.value,
    bairro : FORM.bairro.value,
    cidade : FORM.cidade.value,
    uf : FORM.uf.value
  }
  return DADOS_FORM;
}
// Adiciona um ("-") no campo cep
function mascaraCep(){
  if(CEP.value.length == 5){
    CEP.value += "-"
  }
}
CEP.addEventListener("keyup",mascaraCep);
//Evento responsável por preencher os demais campos do formulário
CEP.addEventListener("blur",pesquisaCep);

//evento responsável por enviar os dados para página repector.php
FORM.addEventListener("submit", (e) => {
  e.stopPropagation();
  let dadosForm = pegaValoresForm();
  if(!dadosForm.cep || !dadosForm.rua || !dadosForm.numero || !dadosForm.bairro || !dadosForm.cidade || !dadosForm.uf){
    abreSpam();
    e.preventDefault();
  }else{
    window.location.assign("receptor.html")
  }
});