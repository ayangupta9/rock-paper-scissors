// // const choice = document.querySelector('.innerChoiceWrapper')
const choices = document.getElementsByClassName('choice')
const choicesP = document.getElementsByClassName('choiceP')
const playAgainButton = document.getElementById('playAgainButton')
const externalWrapper = document.querySelector('.externalWrapper')
const resultWrapper = document.querySelector('.resultWrapper')

for (let i = 0; i < choices.length; i++) {
  choices[i].addEventListener('click', e => {
    console.log(e.target.id)
    externalWrapper.style.transition = 'ease-out 1s'
    externalWrapper.style.transform = 'translateX(-100%)'
    externalWrapper.style.opacity = '0.0'
    resultWrapper.style.transition = 'ease-out 0.5s'
    resultWrapper.style.transitionDelay = '0.3s'
    resultWrapper.style.opacity = '1.0'
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
  console.log('clicked get back')
  resultWrapper.style.opacity = '0.0'
  resultWrapper.style.transition = 'ease-out 0.5s'
  externalWrapper.style.opacity = '1.0'
  externalWrapper.style.transition = 'ease-out 1s'
  externalWrapper.style.transform = 'translateX(0px)'
})
