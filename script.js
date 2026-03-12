const container = document.querySelector('#container')
const btn = document.querySelector('#newGrid')
btn.addEventListener("click", makeGrid)


  function makeGrid() {
    let num = prompt('Please enter a number between 2 and 100')
     if(num <2 || num > 100){
      alert('The number must be between 2 and 100')
     }
    const squareSize = 640/num
  for (let i = 1; i <= num *num ; i++) {
    const div = document.createElement('div')
    div.classList.add('divSquare')
     div.style.width = `${squareSize}px`
     div.style.height = `${squareSize}px`
    container.appendChild(div)
    }
  } 




  const colorDiv = document.querySelectorAll('.divSquare')
colorDiv.forEach(div => 
  div.addEventListener('mouseover',  (event) => {
    div.style.backgroundColor = 'black'

  })
)
  
