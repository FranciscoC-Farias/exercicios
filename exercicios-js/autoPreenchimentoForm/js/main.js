'use strict';

async function pesquisaCep(){
  const CEP = document.querySelector('#cep').value;
  if(validaCep(CEP)){
    const url = `https://viacep.com.br/ws/${formataCep(CEP)}/json/`;
    const DADOS = await fetch(url);
    const ENEDERECO = await DADOS.json();
    console.log(ENEDERECO)
    preencheCampos(ENEDERECO);
  }else{
    alert("Preecha o cep corretamente");
  }
}
function validaCep(cep){
  var regex = /\d{5}-?\d{3}/
  return regex.test(cep);
}
function formataCep(cep){
  return cep.replace('-','');
}
function preencheCampos(endereco){
  const FORM = document.querySelector("#form");

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
document.querySelector("#cep").addEventListener("focusout",pesquisaCep);