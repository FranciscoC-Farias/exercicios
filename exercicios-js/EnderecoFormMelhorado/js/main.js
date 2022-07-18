'use strict';

import {verificaCaracter, addDigito, validaCep} from "./validaCep.js";
import {localStor} from "./localStorange.js";
import {coletaDadosDoForm} from "./coletaDadosDoForm.js";
import {pesquisaCep} from "./pesquisaCep.js";

export const cep = document.querySelector("#cep");
const form = document.querySelector("#form");

cep.addEventListener("blur", pesquisaCep);
cep.addEventListener("keypress", (e) => {
  if(!verificaCaracter(e)){
    e.preventDefault();
  }
  addDigito();
});
document.querySelector("#form").addEventListener("submit", event => {
  event.preventDefault();

  if((validaCep(cep.value) && !document.querySelector("span.erro").innerHTML == "CEP Inválido")){
    var dadosForm = coletaDadosDoForm();
    localStor(dadosForm);
    window.location.assign("pag2.html");
  }else{
    throw Error(alert("Não foi possível realizar o envio das informações!"));
  }
});