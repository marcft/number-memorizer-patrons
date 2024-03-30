const grid = document.querySelector(".number-grid");

const gridElements = {
  0: document.getElementById("zero"),
  1: document.getElementById("one"),
  2: document.getElementById("two"),
  3: document.getElementById("three"),
  4: document.getElementById("four"),
  5: document.getElementById("five"),
  6: document.getElementById("six"),
  7: document.getElementById("seven"),
  8: document.getElementById("eight"),
  9: document.getElementById("nine"),
};

export const setGridElementActive = (digit) => {
  const element = gridElements[digit];
  if (!element) {
    alert("Avisar a Marc");
    throw new Error("Digit does not correspond with any grid element");
  }
  for (let i = 0; i < grid.children.length; i++) {
    grid.children[i].classList.remove("active");
  }
  element.classList.add("active");
};

export const isGridElementCorrect = (element, nextDigit) => {
  if (gridElements[nextDigit] == element) {
    return true;
  }
  return false;
};
