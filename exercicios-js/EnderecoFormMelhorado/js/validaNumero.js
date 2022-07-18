document.querySelector("#numero").addEventListener("keypress", event => {
  var fieldNumValue = event.target.value.toString();
  console.log(fieldNumValue.length);
  if(fieldNumValue.length > 6){
    event.preventDefault();
  }
});