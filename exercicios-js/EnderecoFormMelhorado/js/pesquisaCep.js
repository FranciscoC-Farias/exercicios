import { cep } from "./main.js";
import { preencheCamposForm } from "./preencheCampos.js";
import { validaCep } from "./validaCep.js";

const span_error = document.querySelector("span.erro");

export async function pesquisaCep(){
  let cepLimpo =  cep.value.replace("-","");
  if(cep.value){
    if(validaCep(cep.value)){
      let response = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`);
      var endereco = await response.json();
      
      // se houver erro durante a requisição
      if(endereco.erro){
        chamaErro();
        document.querySelector("#cep").addEventListener("input",e => {
          if(e.target.value == ""){
            removeErro();
          }
        });
      }else{
        removeErro();
        preencheCamposForm(endereco);
      }
    }else{
      chamaErro();
    }
  }
}
function chamaErro(){
  cep.classList.add("invalid");
  span_error.innerHTML = "CEP Inválido";
}
function removeErro(){
  cep.classList.remove("invalid");
  span_error.innerHTML = "";
}