const container = document.querySelector('#container')

for (let i = 1; i < 256; i++) {
  let div = document.createElement('div')
  div.style.cssText = "border : 1px solid blue; height : 20px; padding : 10px; margin : 10px "
  div.classList.add('divSquare')
  container.appendChild(div)
}


