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
  para.textContent = 'ACTUALMENTE REALIZÓ UN CURSO DE DESARROLLO DE SITIOS WEB, CON EIDOS Y CÓDIGO PALANTE.';
  document.body.appendChild(para);
} 









/*for(let i = 0; i < 5; i++) {
  console.log( i );

 
const buttons = document.querySelectorAll('button');
for(let i = 0; i < buttons.length ; i++) {
  buttons[i].addEventListener('click', );
}

/*function crearHTMLButton = document.querySelector('#verde');
item.addEventListener('click', function() {
document.body.style.backgroundColor('0, 255, 179');
});


/*const changeFontBtn = document.querySelector('#verde');
changeFontBtn.addEventListener('click', function() {
  document.body.style.backgroundColor('0, 255, 179');
});*/
