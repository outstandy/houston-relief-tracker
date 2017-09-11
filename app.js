const answerAccordion = document.getElementById("answer-accordion")
const answerButton = document.getElementById("answer-button")
const toDoList = document.getElementById("to-do-list")
const toDoListItems = Array.from(document.getElementsByClassName("list-item--to-do"))
const completedToDoList = document.getElementById("completed-to-do-list")

document.addEventListener("DOMContentLoaded",function(){

  function removeToDo(){
    toDoListItems.forEach(function(item, index){
      item.addEventListener("click", function(){

        let listItem = document.createElement("li")
        let listItemContent = this.querySelector("label").textContent
        listItem.append(listItemContent)
        listItem.classList.add("list-item", "list-item--complete")
        completedToDoList.append(listItem)

        this.remove();
      })
    })
  }

  answerButton.addEventListener("click", function(){
    answerAccordion.classList.toggle("open")
    answerButton.classList.toggle("open")
  })

  removeToDo();
});
