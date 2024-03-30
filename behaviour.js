import {
  setGridElementActive,
  isGridElementCorrect,
} from "./modules/grid_utilities.mjs";

let fullNumber;
let currentNumber;

const form = document.getElementsByTagName("form")[0];
const resetBtn = document.getElementById("reset-btn");
const nextBtn = document.getElementById("next-btn");
const hideBtn = document.getElementById("hide-btn");
const gridElements = document.querySelectorAll(".number-element");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const numberInput = document.querySelector('form input[type="number"]');
  fullNumber = numberInput.value.replace(/\D/g, ""); // Solo digitos
  currentNumber = fullNumber;

  if (currentNumber.length <= 0) {
    alert("Introduce algún número");
    return;
  }
  numberInput.value = "";

  const currentNumberP = document.querySelector("p.current-number");
  currentNumberP.textContent = fullNumber;

  //Inicializar grid
  setGridElementActive(currentNumber.charAt(0));
  currentNumber = currentNumber.slice(1);
});

resetBtn.addEventListener("click", (e) => {
  currentNumber = fullNumber;

  //Inicializar grid
  if (!previousChecks()) return;
  setGridElementActive(currentNumber.charAt(0));
  currentNumber = currentNumber.slice(1);
});

nextBtn.addEventListener("click", (e) => {
  if (!previousChecks()) return;
  setGridElementActive(currentNumber.charAt(0));
  currentNumber = currentNumber.slice(1);
});

hideBtn.addEventListener("click", (e) => {
  const currentNumberP = document.querySelector("p.current-number");
  currentNumberP.classList.toggle("hide");

  const name = e.target.textContent;
  e.target.textContent = name == "Hide" ? "Show" : "Hide";
});

gridElements.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (!previousChecks()) return;

    if (isGridElementCorrect(e.target, currentNumber.charAt(0))) {
      setGridElementActive(currentNumber.charAt(0));
      currentNumber = currentNumber.slice(1);
    }
  });
});

function previousChecks() {
  if (currentNumber === undefined) {
    alert("Introduzca un numero");
    return false;
  } else if (currentNumber.length <= 0) {
    alert("Último número de la secuencia");
    return false;
  }

  return true;
}
