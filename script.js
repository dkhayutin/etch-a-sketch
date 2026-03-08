const container = document.querySelector('#container')

  function makeGrid() {
  for (let i = 1; i <= (256); i++) {
    let div = document.createElement('div')
    div.classList.add('divSquare')
    container.appendChild(div)
  }
  }

  makeGrid()


