// en tom array
// var arrUserInfo = [];
console.log(arrUserInfo);
// deklarera en klass
class Addinput {
  constructor(names, subtitle, textinput) {
    this.names = names;
    this.subtitle = subtitle;
    this.textinput = textinput;
  }

  // metod for att skriva ut inputs från användaren i sidan
  allFunc() {
    return `<h3>Names:</h3> <h6>${this.names}</h6> <br> <h3>Title:</h3> <h6>${this.subtitle}</h6> <br> <h3>Text:</h3> <h6>${this.textinput}</h6><br><br>`;
  }
}

// Funktion för att hämta inputs ifrån formel
function getInput() {
  var names = document.getElementById("names").value;
  var subtitle = document.getElementById("subtitle").value;
  var textinput = document.getElementById("textinput").value;

  //validerar om det finns tillräckligt med inkommande information för att skriva ut
  if (names === "" && subtitle === "" && textinput === "") {
    return false;
  }
  return new Addinput(names, subtitle, textinput, null);
}
// funktion för att skria ut data ifrån arrayen
function writeData() {
  // vi deklarerar om funtionen till en variabel för arbeta den i funtionen
  let objGetInputs = this.getInput();

  // validation om det finns inkommande data så pushar vi in den i arrayen för att sedan skriva ut den
  if (objGetInputs) {
    arrUserInfo.push(objGetInputs);
    for (let i = 0; i < arrUserInfo.length; i++) {
      document.getElementById("myTable").innerHTML +=
        arrUserInfo[i].allFunc() + "<br>";
    }
    // om det inte finns data skrivs en "pop up" fönste
  } else {
    alert("Something is missing in you'r form");
    return false;
  }
}

//funktion för att kontrollera om det skrivna mejlet, med "regex expression" utrryck
function validation() {
  var form = document.getElementById("form");
  var email = document.getElementById("email").value;
  var text = document.getElementById("text");
  var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  //med "match" metoden jämför vi mot "regex expression" uttrycket och hämtar ikoner för att visa valida eller invalida mejl, samtidit skrivs string ut för att förtydla
  if (email.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "<h6>Thank's! Your email Address is valid .</6>";
  } else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "<h6>Please Enter a valid emai laddress .</6>";
  }
  // det skriv inte ut något om input är tom
  if (email == "") {
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text.innerHTML = "";
  }
}
