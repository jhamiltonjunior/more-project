// let errors = []
let score = []
let order = []
let clickedOrder = []

// const colors = [
//   document.querySelector('.yellow'),
//   document.querySelector('.gray'),
//   document.querySelector('.pink'),
//   document.querySelector('.green'),
// ]

   
const yellow = document.querySelector('.yellow')
const gray = document.querySelector('.gray')
const pink = document.querySelector('.pink')
const green = document.querySelector('.green')


const rand = (value) => {
  return Math.floor(Math.random() * value)
}

const shuffleOrder = () => {
  return order[order.length] = rand(4)
}

const addClassName = (element, number) => {
  setTimeout(() => {
    element.classList.add('selected')
  }, number - 250)
}

const removeClassName = (element, number) => {
  setTimeout(() => {
    element.classList.remove('selected')
  }, number)
}

const lightColor = (element, number = number * 500) => {
  
  addClassName(element, number)

  removeClassName(element, number)

  // setTimeout(() => {
  //   element.classList.add('selected')
  // }, number - 250)
  // setTimeout(() => {
  //   element.classList.remove('selected')
  // }, number)
}

// createElementHTML

const getIndexOfOrder = () => {
  shuffleOrder()
  for (let index in order) {
    let colorSelected = createElementHTML(order[index])
    lightColor(colorSelected, Number(index) + 1)
  }
}

// nextLevel

const compareOrder = () => {
  if (clickedOrder.length != order.length) {
    alert(`Pontuação: ${score}`)
    nextLevel()
  }
}

// lose

const checkOrderOfClick = () => {
  for (let index in clickedOrder) {
    if (clickedOrder[index] != order[index]) {
      lose()
      break
    }
  }

  compareOrder()
}

const IWentclicked = (color) => {
  clickedOrder[cleckedOrder.length] = color
  elementColor(color).classList.add('selected')

  // setTimeout(() => {
  //   elementColor(color).classList.remove('selected')
  // })
  removeClassName(elementColor(color))
}

console.log(shuffleOrder())