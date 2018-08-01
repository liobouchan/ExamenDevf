function invertir() {
  var string = document.getElementById("myText").value;
  var newstring = string.split(" ") ;
  console.log(newstring);
  var numero = newstring.length;
  console.log(numero);
  var i;
  var invertida = "";
  for (i = numero-1; i >= 0; i--) {
      invertida += newstring[i] + " ";
  }
  alert(invertida)
  console.log(invertida);
}
