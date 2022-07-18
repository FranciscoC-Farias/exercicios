export function localStor(obj){
  let dadosFormString = localStorage.setItem("endereco",JSON.stringify(obj));
}