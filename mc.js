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
  document.body.style.backgroundColor = 'rgb(0, 153, 0)';
});


var item = document.getElementById('blanco');
item.addEventListener('click', function() {
  document.body.style.backgroundColor = 'rgb(255,255,255)';
});

/*function crearHTMLButton = document.querySelector('#verde');
item.addEventListener('click', function() {
document.body.style.backgroundColor('0, 255, 179');
});


/*const changeFontBtn = document.querySelector('#verde');
changeFontBtn.addEventListener('click', function() {
  document.body.style.backgroundColor('0, 255, 179');
});*/
