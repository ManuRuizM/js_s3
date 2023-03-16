const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];

let ul = document.createElement("ul");

document.body.insertBefore(ul, document.body.firstChild);

for (let i = 0; i < countries.length; i++) {
  const li = document.createElement("li");
  li.textContent = countries[i];
  ul.appendChild(li);
}
