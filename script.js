const container = document.querySelector('#container')
const btn = document.querySelector('#newGrid')
btn.addEventListener("click", makeGrid)
const removeBtn = document.querySelector('#removeGrid')
removeBtn.addEventListener("click", () => {
  container.innerHTML = ""; 
})

 
  function makeGrid() {
    let num = prompt('Please enter a number between 2 and 100')
     if(num < 2 || num > 100){
      alert ('Number not valid')
      } else {
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
}




