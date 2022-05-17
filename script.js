function createPallete() {
  const pallete = document.querySelector('#color-palette');

  const colorPallete = ['black', 'red', 'yellow', 'blue'];

  const colorElements = colorPallete.map((item) => {
    const element = document.createElement('div');
    element.style.backgroundColor = item;
    element.classList.add('color');

    return element;
  });

  colorElements.forEach((item) => pallete.appendChild(item));
}

createPallete();

function creatPixelBoard(bordeLength) {
  const board = document.querySelector('#pixel-board');

  const arrayFake = Array.from({ length: bordeLength });

  const arrayTrue = arrayFake.map(() => {
    const creatDiv = document.createElement('div');
    creatDiv.classList.add('line');
    return creatDiv;
  });

  arrayTrue.forEach((item) => board.appendChild(item));

  const moreLine = arrayTrue.forEach((line) => {
    arrayFake.forEach(() => {
      const creatColumn = document.createElement('div');
      creatColumn.classList.add('pixel');
      line.appendChild(creatColumn);
    });
  });
}

creatPixelBoard(5);

function getBoardLength() {
  const getForm = document.querySelector('#send');
  getForm.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const getInput = document.getElementById('lengthBoard');
    const clearPB = document.querySelectorAll('.line');
    clearPB.forEach((item) => item.remove());
    const inputNumber = Number(getInput.value);
    creatPixelBoard(inputNumber);
  });
}

getBoardLength();
