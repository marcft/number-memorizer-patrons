let fullNumber;
let currentNumber;

const form = document.getElementsByTagName('form')[0];
const resetBtn = document.getElementById('reset-btn');
const grid = document.querySelector('.number-grid');
const nextBtn = document.getElementById('next-btn');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const numberInput = document.querySelector('form input[type="number"]');
  fullNumber = numberInput.value.replace(/\D/g, ''); // Solo digitos
  currentNumber = fullNumber;

  if (currentNumber.length <= 0) {
    alert('Introduce algún número');
    return;
  }

  const currentNumberP = document.querySelector('p.current-number');
  currentNumberP.textContent = fullNumber;

  //Inicializar grid
  setGridElementActive(currentNumber.charAt(0));
  currentNumber = currentNumber.slice(1);
});

resetBtn.addEventListener('click', (e) => {
  currentNumber = fullNumber;

  //Inicializar grid
  if (currentNumber.length > 0) {
    setGridElementActive(currentNumber.charAt(0));
    currentNumber = currentNumber.slice(1);
  } else {
    alert('Introduce algún número');
  }
});

nextBtn.addEventListener('click', (e) => {
  if (currentNumber.length > 0) {
    setGridElementActive(currentNumber.charAt(0));
    currentNumber = currentNumber.slice(1);
  } else {
    alert('Último número de la secuencia');
  }
});

const gridElements = {
  0: document.document.getElementById('zero'),
  1: document.document.getElementById('one'),
  2: document.document.getElementById('two'),
  3: document.document.getElementById('three'),
  4: document.document.getElementById('four'),
  5: document.document.getElementById('five'),
  6: document.document.getElementById('six'),
  7: document.document.getElementById('seven'),
  8: document.document.getElementById('eight'),
  9: document.document.getElementById('nine'),
};

function setGridElementActive(digit) {
  const element = gridElements[digit];
  if (!element) {
    alert('Avisar a Marc');
    throw new Error('Digit does not correspond with any grid element');
  }
  for (let i = 0; i < grid.children.length; i++) {
    grid.children[i].classList.remove('active');
  }
  element.classList.add('active');
}
