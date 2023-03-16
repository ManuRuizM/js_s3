const p = document.createElement('p');
// document.body.insertBefore(p,document.body.firstChild);
document.body.appendChild(p);
let texto = document.createTextNode("Soy dinámico!");
p.appendChild(texto);
