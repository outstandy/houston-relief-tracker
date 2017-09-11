const toDoList = document.getElementById("to-do-list")
const toDoListItems = Array.from(document.getElementsByClassName("list-item--to-do"))
const completedToDoList = document.getElementById("completed-to-do-list")
const accordionButtons = Array.from(document.getElementsByClassName("tracker__button--accordion"))

document.addEventListener("DOMContentLoaded",function(){

  function removeToDo(){
    toDoListItems.forEach(function(item){
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

  function toggleAccordion(){
    accordionButtons.forEach(function(button){
      button.addEventListener("click", function(){
        console.log("click")
        this.classList.toggle("open")
        this.closest(".tracker__accordion").classList.toggle("open")
      })
    })
  }

  removeToDo();
  toggleAccordion();
});
