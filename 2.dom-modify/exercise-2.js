const div$$ = document.createElement('div');
const p$$ = document.createElement('p');

// document.body.insertBefore(div$$, document.body.firstChild);
document.body.appendChild(div$$);
div$$.appendChild(p$$);

// div$$.innerHTML =  `<p></p>`; // "MALA PRACTICA" PERO FUNSIONA