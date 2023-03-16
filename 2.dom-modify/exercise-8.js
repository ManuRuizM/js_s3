let divs = document.querySelectorAll('div');

let p = document.createElement('p');

let texto = document.createTextNode('Voy en medio!');

p.appendChild(texto);

document.body.insertBefore(p,divs[1]);