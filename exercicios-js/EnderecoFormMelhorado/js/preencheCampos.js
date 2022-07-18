export function preencheCamposForm(json){
  for(let dado in json){
    if(document.querySelector("#"+dado)){
      document.querySelector("#"+dado).value = json[dado];
      if(dado == "uf"){
        var select = document.querySelector("#uf");
        for(let i = 0; i < select.options.length; i++){
          if(select.options[i].value == json[dado].toLocaleLowerCase()){
            select.selectedIndex = i;
          }
        }
      }
    }
  }
}