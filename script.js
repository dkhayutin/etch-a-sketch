const container = document.querySelector('#container')

  
function newSketch() {
  prompt('Enter a number between 2 and 100')
}

  function makeGrid(num) {
    const squareSize = 640/num
  for (let i = 1; i <= num *num ; i++) {
    const div = document.createElement('div')
    div.classList.add('divSquare')
     div.style.width = `${squareSize}px`
     div.style.height = `${squareSize}px`
    container.appendChild(div)
    }
  }


  makeGrid()


  const colorDiv = document.querySelectorAll('.divSquare')
colorDiv.forEach(div => 
  div.addEventListener('mouseover',  (event) => {
    div.style.backgroundColor = 'black'

  })
)
  
