function generatePass() {
  let longitud = document.getElementById("longitud").value;
  let mayusculas = document.getElementById("mayusculas").checked;
  let minusculas = document.getElementById("minusculas").checked;
  let numeros = document.getElementById("numeros").checked;
  let simbolos = document.getElementById("simbolos").checked;

  let caracteres = "";
  if (mayusculas) {
    caracteres += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (minusculas) {
    caracteres += "abcdefghijklmnopqrstuvwxyz";
  }
  if (numeros) {
    caracteres += "0123456789";
  }
  if (simbolos) {
    caracteres += "!@#$%&*()_-|;':,. ?/";
  }

  let contraseña = "";
  for (let i = 0; i < longitud; i++) {
    let random = Math.floor(Math.random() * caracteres.length);
    contraseña += caracteres[random];
  }

  document.getElementById("pass").value = contraseña;
}
