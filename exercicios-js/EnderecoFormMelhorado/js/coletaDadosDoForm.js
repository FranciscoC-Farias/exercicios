export function coletaDadosDoForm(){
  let inputsEnderecos = document.querySelectorAll("form [name]");
  let dadosForm = {};
  
  inputsEnderecos.forEach(endereco => {
    dadosForm[endereco.name] = endereco.value;
  });
  
  return dadosForm;
}