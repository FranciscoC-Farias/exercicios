
const fields = document.querySelectorAll("[required]");
export function customValidation(event){
  event.preventDefault();

  const field = event.target;

  // logica de validação;
  function verifyErrors(){
    let foundError = false;
    
    for(let error in field.validity){
      // verifica se tem error
      if(field.validity[error] && !field.validity.valid){
        foundError = error;
      }  
    }
    return foundError;
  }
  
  const error = verifyErrors();
  const span_error = field.parentNode.querySelector("span.erro");
  if(error){
    field.classList.add("invalid");
    span_error.innerHTML = "Campo Obrigatório!"
    if(!field.value){
      setTimeout( () => {
        field.classList.remove("invalid");
        span_error.innerHTML = "";
      },5000)
  }else{
    field.classList.remove("invalid");
    span_error.innerHTML = "";
    }
  }
}

for(let field of fields){
  field.addEventListener("invalid",customValidation);
  field.addEventListener("blur",customValidation);
}

form.addEventListener("submit", event => {
  event.preventDefault();
  customValidation(event);
  console.log("Enviar!");
});