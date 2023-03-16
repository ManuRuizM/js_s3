

let divs = document.querySelectorAll('.fn-insert-here');

divs.forEach(function(element){
    let p = document.createElement('p');
    p.textContent = 'Voy dentro';
    element.appendChild(p);
})

// for (const iterator of divs) {
//     let p = document.createElement('p');
//     p.textContent = 'Voy dentro';
//     iterator.appendChild(p);
// }