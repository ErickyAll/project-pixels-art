function createPallete() {
  const pallete = document.querySelector('#color-palette');

  const colorPallete = ['black', 'red', 'yellow', 'blue'];

  const colorElements = colorPallete.map((item) => {
    const element = document.createElement('div');
    element.style.backgroundColor = item;
    element.classList.add('color');
    if (item == 'black') {
      element.classList.add('selected');
    }
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

    const getInput = document.getElementById('board-size');

    if (!getInput.value) {
      alert('Board inválido!');

      return;
    }

    const clearPB = document.querySelectorAll('.line');

    clearPB.forEach((item) => item.remove());
    const inputNumber = Number(getInput.value);

    creatPixelBoard(inputNumber);
    drawPixels();
  });
}

getBoardLength();

function selectColor() {
  const elements = document.querySelectorAll('.color');
  elements.forEach((element) => {
    element.addEventListener('click', (ev) => {
      const prevElement = document.querySelector('.selected');
      prevElement.classList.remove('selected');
      ev.target.classList.add('selected');
    });
  });
}

selectColor();

function drawPixels() {
  const pixelSelected = document.querySelectorAll('.pixel');
  pixelSelected.forEach((pixel) => {
    pixel.addEventListener('click', (ev) => {
      const colorSelected = document.querySelector('.selected');
      const colorOfColor = colorSelected.style.backgroundColor;
      ev.target.style.backgroundColor = colorOfColor;
    });
  });
}

drawPixels();

function clearBoard() {
  const button = document.querySelector('#clear-board');
  button.addEventListener('click', (ev) => {
    const clearPB = document.querySelectorAll('.pixel');
    clearPB.forEach((item) => {
      item.style.backgroundColor = 'white';
    });
  });
}

clearBoard();
