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

function setGridElementActive(digit) {
  switch (digit) {
    case '0':
      const zero = document.getElementById('zero');
      removeAllActive();
      zero.classList.add('active');
      break;

    case '1':
      const one = document.getElementById('one');
      removeAllActive();
      one.classList.add('active');
      break;

    case '2':
      const two = document.getElementById('two');
      removeAllActive();
      two.classList.add('active');
      break;

    case '3':
      const three = document.getElementById('three');
      removeAllActive();
      three.classList.add('active');
      break;

    case '4':
      const four = document.getElementById('four');
      removeAllActive();
      four.classList.add('active');
      break;

    case '5':
      const five = document.getElementById('five');
      removeAllActive();
      five.classList.add('active');
      break;

    case '6':
      const six = document.getElementById('six');
      removeAllActive();
      six.classList.add('active');
      break;

    case '7':
      const seven = document.getElementById('seven');
      removeAllActive();
      seven.classList.add('active');
      break;

    case '8':
      const eight = document.getElementById('eight');
      removeAllActive();
      eight.classList.add('active');
      break;

    case '9':
      const nine = document.getElementById('nine');
      removeAllActive();
      nine.classList.add('active');
      break;

    default:
      alert('Avisar a Marc');
      throw new Error('Not a number');
  }

  function removeAllActive() {
    for (let i = 0; i < grid.children.length; i++) {
      grid.children[i].classList.remove('active');
    }
  }
}
