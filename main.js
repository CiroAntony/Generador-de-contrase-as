function generatePass() {
  let length = document.getElementById("length").value;
  let includesUppercase = document.getElementById("uppercase").checked;
  let includesLowercase = document.getElementById("lowercase").checked;
  let includesNumbers = document.getElementById("numbers").checked;
  let includesSymbols = document.getElementById("symbols").checked;

  let characters = "";
  if (includesUppercase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includesLowercase) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (includesNumbers) {
    characters += "0123456789";
  }
  if (includesSymbols) {
    characters += "!@#$%^&*()_+-=[]{}|;':\"<>,.?/\\";
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }

  document.getElementById("pass").value = password;
}

