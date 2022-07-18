import {cep} from "./main.js";

// verifica se o caracter é numero, se for permite o registro no campo, senão, não permite.
export function verificaCaracter(e){
  const char = String.fromCharCode(e.keyCode);
  let regexChar = /[0-9-]/;

  if(char.match(regexChar)){
    return true;
  }
  return false;
}

//Adiciona Digito no campo cep
export function addDigito(){
  if(cep.value.length == 5){
    cep.value += "-"
  }
}

export function validaCep(cep){
  var regex = /\d{5}-\d{3}/
  return regex.test(cep);
}