const answerAccordion = document.getElementById('answer-accordion')
const answerButton = document.getElementById('answer-button')

document.addEventListener("DOMContentLoaded",function(){
  answerButton.addEventListener("click", function(){
    answerAccordion.classList.toggle("open")
    answerButton.classList.toggle("open")
  })
});
