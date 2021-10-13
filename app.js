const incrementEl = document.querySelector(".increment");
const numberEl = document.querySelector(".number");
const resetEl = document.querySelector(".reset");
const saveEl = document.querySelector(".save");

incrementEl.addEventListener("click", increment);
resetEl.addEventListener("click", reset);
saveEl.addEventListener("click", save);

let count = 0;
function increment() {
  numberEl.textContent = count += 1;
}

function reset() {
  count = 0;
  numberEl.textContent = 0;
}

function save() {
  let people = numberEl.textContent;
  let paragraph = document.createElement("p");
  paragraph.textContent += `${people} - `;
  document.querySelector(".peopleEntered").appendChild(paragraph);
}
