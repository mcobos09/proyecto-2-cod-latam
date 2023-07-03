var cambioColor = {
  color: "green",
  type: "button",
}


var cambioColor = {
      color: "blanco",
      type: "button",

}

var item = document.getElementById('verde');
item.addEventListener('click', function() {
  document.body.style.backgroundColor = 'rgb(104, 247, 104)';
});


var item = document.getElementById('blanco');
item.addEventListener('click', function() {
  document.body.style.backgroundColor = 'rgb(255,250,250)';
});





function createParagraph() {
  let para = document.createElement('article');
  para.textContent = 'ACTUALMENTE REALIZÓ UN CURSO DE DESARROLLO DE SITIOS WEB, CON EIDOS, CÓDIGO PALANTE Y ACCENTURE.';
  document.body.appendChild(para);
} 







function init() {
  var tema = localStorage.getItem("tema");
  this.cambiarTema(tema);
}

function cambiarTema(tema) {
  switch (tema) {
    case "dark":
      localStorage.setItem("tema", 'dark');
      document.getElementById("btn-light").style.display = "block";
      document.documentElement.setAttribute("data-theme", "dark");      
      break;
    default:
      localStorage.setItem("tema", 'light');
      document.getElementById("btn-dark").style.display = "block";
      document.documentElement.setAttribute("data-theme", "light");      
      break;
  }
}

