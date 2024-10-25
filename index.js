let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
  console.log(countEl.textContent);
}

function save() {
  let countStr = " " + count + " - ";

  while (count > 0) {
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
  }
}

function reset() {
  count = 0;
  countEl.textContent = count;
  saveEl.textContent = "Previous entries: ";
}
