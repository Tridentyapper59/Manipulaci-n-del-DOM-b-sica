const h1=document.querySelector('h1');
const p=document.querySelector('p');
const parrafito=document.getElementsByClassName('.parrafito');
const pid=document.getElementById('pid');
const input=document.querySelector('input');

console.log(input.value);

console.log({h1,p,parrafito,pid,input,});

// innerhtml sirve para modificar todo el archivo en formato html
// innertext modifica en formato de texto solamente
// getAttribute ejecuta el atributo dado al elemento
// h1.setAttribute('class', 'rojo'); cambia un atributo a un elemento en html

// h1.classList.add('rojo'); se puede agregar una clase ademas de la que ya tiene en el HTML
// h1.classList.remove('verde'); remueve la clase que se le menciona 
// h1.classList.toggle('verde');
// h1.classList.contains('verde'); devuelve V o F dependiendo de la clase que se le pregunte en los parantesis

input.value = "456"

const img = document.createElement('img');
img.setAttribute('src', 'https://static.platzi.com/static/images/conf/logo_black@2x.png');
console.log(img);

// pid.innerHTML = ""; borra todo el contenido del elemento, clase o id que esta en el HTML
pid.appendChild(img);