const div = document.getElementById("divv");
const inp = document.getElementById("inp");

const KeyBoard = [
  "Esc",
  "F1",
  "F2",
  "F3",
  "F4",
  "F5",
  "F6",
  "F7",
  "F8",
  "F9",
  "F10",
  "F11",
  "F12",
  "`",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "=",
  "Tab",
  "Q",
  "W",
  "E",
  "R",
  "T",
  "Y",
  "U",
  "I",
  "O",
  "P",
  "[",
  "]",
  "CapsLock",
  "A",
  "S",
  "D",
  "F",
  "G",
  "H",
  "J",
  "K",
  "L",
  ";",
  "'",
  "Enter",
  "Shift",
  "Z",
  "X",
  "C",
  "V",
  "B",
  "N",
  "M",
  "<",
  ">",
  "/",
  "Shift",
  "↑",
  "Ctrl",
  "Fn",
  "Window",
  "Alt",
  "Space",
  "Alt",
  "Ctrl",
];

const arr = [
  "Esc",
  "F1",
  "F2",
  "F3",
  "F4",
  "F5",
  "F6",
  "F7",
  "F8",
  "F9",
  "F10",
  "F11",
  "F12",
  "Tab",
  "CapsLock",
  "Enter",
  "Shift",
  "↑",
  "Ctrl",
  "Fn",
  "Window",
  "Alt",
  "Alt",
];

let keys = "";
KeyBoard.forEach((value) => {
  keys += `
    <div
      class="key bg-black text-white p-2 rounded-lg py-5 text-center cursor-pointer select-none ${
        value === "Space" ? "col-span-5" : ""
      }"
      data-key="${value}"
    >${value}</div>
  `;
});

div.innerHTML = keys;

// listner

const keyElements = document.querySelectorAll(".key");

keyElements.forEach((key) => {
  key.addEventListener("click", () => {
    // console.log(key);

    let keyVal = key.textContent;

    if (keyVal === "Space") {
      inp.value += " ";
      return;
    } else {
      if (arr.includes(keyVal)) {
        inp.value += " ";
        return;
      }

      inp.value += keyVal;
    }
  });
});

window.addEventListener("keydown", (w) => {
  let inpval = w.key;

  if (inpval === "Space") {
    inp.value += " ";
  } else {
    if (arr.includes(inpval)) {
      inp.value += " ";
    }
    inp.value += w.key;
  }

  console.log(w.key);
});
