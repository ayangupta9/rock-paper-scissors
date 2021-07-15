// // const choice = document.querySelector('.innerChoiceWrapper')
const choices = document.getElementsByClassName('choice')
const choicesP = document.getElementsByClassName('choiceP')
const playAgainButton = document.getElementById('playAgainButton')
const externalWrapper = document.querySelector('.externalWrapper')
const resultWrapper = document.querySelector('.resultWrapper')
const firstFist = document.querySelector('#firstFist')
const secondFist = document.querySelector('#secondFist')
const row2 = document.querySelector('.row2')
const result = document.getElementById('result')

let choiceMadeByUser
let choiceMadeByComputer

const whoWins = (user, computer) => {
  if (user == computer) {
    return -1
  }
  if (user > computer) return user
  return computer
}

const choicesObj = [
  'https://visualpharm.com/assets/221/Rock-595b40b65ba036ed117d233d.svg',
  'https://visualpharm.com/assets/699/Toilet%20Paper-595b40b85ba036ed117de6a9.svg',
  'https://visualpharm.com/assets/41/Surgical%20Scissors-595b40b85ba036ed117db3bb.svg'
]

for (let i = 0; i < choices.length; i++) {
  choices[i].addEventListener('click', e => {
    console.log(e.target.id)
    externalWrapper.style.transition = 'ease-out 1s'
    externalWrapper.style.transform = 'translateX(-200%)'
    externalWrapper.style.opacity = '0.0'
    resultWrapper.style.transition = 'ease-out 0.5s'
    resultWrapper.style.transitionDelay = '0.3s'
    resultWrapper.style.opacity = '1.0'

    firstFist.classList.add('animationForFirstFist')
    secondFist.classList.add('animationForSecondFist')

    setTimeout(() => {
      choiceMadeByUser = i
      choiceMadeByComputer = (Math.random() * (2 - 0 + 1)) << 0

      firstFist.src = choicesObj[choiceMadeByUser]
      secondFist.src = choicesObj[choiceMadeByComputer]

      firstFist.style.transition = 'ease 0.2s'
      secondFist.style.transition = 'ease 0.2s'

      firstFist.style.margin = '1em'
      firstFist.style.padding = '0em'
      firstFist.style.height = '150px'
      firstFist.style.width = '150px'
      firstFist.style.transform = 'rotateZ(0deg)'

      secondFist.style.margin = '1em'
      secondFist.style.padding = '0em'
      secondFist.style.height = '150px'
      secondFist.style.width = '150px'
      secondFist.style.transform = 'rotateZ(0deg)'

      if (whoWins(choiceMadeByUser, choiceMadeByComputer) == -1) {
        result.innerHTML = "IT'S A TIE 🤷‍♀️"
      } else if (
        whoWins(choiceMadeByUser, choiceMadeByComputer) == choiceMadeByUser
      ) {
        result.innerHTML = 'YOU WIN 🎉'
      } else {
        result.innerHTML = 'YOU LOSE 🤡'
      }
      row2.style.transform = 'translateY(220px)'
      console.log(result)
    }, 2500)
  })

  choices[i].addEventListener('mouseenter', e => {
    e.target.style.transform = 'scale(1.15)'
    e.target.style.transition = 'ease 0.1s'
    e.target.style.cursor = 'pointer'
  })
  choices[i].addEventListener('mouseleave', e => {
    e.target.style.transform = 'scale(1.0)'
    e.target.style.transition = 'ease 0.1s'
  })
}

playAgainButton.addEventListener('click', e => {
  resultWrapper.style.opacity = '0.0'
  resultWrapper.style.transition = 'ease-out 0.5s'
  externalWrapper.style.opacity = '1.0'
  externalWrapper.style.transition = 'ease-out 1s'
  externalWrapper.style.transform = 'translateX(0px)'

  firstFist.style.transform = 'rotateZ(90deg)'
  secondFist.style.transform = 'rotateZ(90deg) rotateX(180deg)'

  firstFist.style.transition = 'ease 0.2s'
  secondFist.style.transition = 'ease 0.2s'

  firstFist.src = './assets/fistAnim.jpg'
  secondFist.src = './assets/fistAnim.jpg'

  firstFist.classList.remove('animationForFirstFist')
  secondFist.classList.remove('animationForSecondFist')

  row2.style.transform = 'translateY(0px)'
})
