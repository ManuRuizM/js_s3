const countries = [
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
  { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
];

let titulo = [];
let imagen = [];

let div$$ = document.createElement("div");
document.body.appendChild(div$$);
for (let i = 0; i < countries.length; i++) {
  titulo[i] = countries[i].title;
  imagen[i] = countries[i].imgUrl;
  let h4$$ = document.createElement("h4");
  h4$$.textContent = titulo[i];
  let img$$ = document.createElement("img");
  img$$.setAttribute("src", imagen[i]);
  let button$$ = document.createElement("button");
  button$$.textContent = "ELIMINA ELEMENTO";
  button$$.addEventListener("click", function () {
    div$$.removeChild(h4$$);
    div$$.removeChild(img$$);
    div$$.removeChild(button$$);
  });
  div$$.appendChild(h4$$);
  div$$.appendChild(img$$);
  div$$.appendChild(button$$);
}

let boton$$ = document.querySelector("button");
boton$$.addEventListener("click", function () {
  div$$.lastElementChild.remove();
});
