let theInput = document.querySelector(".add-task input");
theAddButton = document.querySelector(".add-task .plus"),
tasksContainer = document.querySelector(".tasks-content"),
tasksCount = document.querySelector(".tasks-count span"),
tasksCompleted = document.querySelector(".tasks-completed span"),
deleteBtn=document.querySelector(".btn"),
//finishBtn=document.querySelector(".btn1");
locStorag=localStorage.getItem(theInput.value);

// Focus On Input Field
window.onload = function () {
  theInput.focus();
};

// Adding The Task
theAddButton.onclick = function () {
  function empty() {
    swal({
        text: "You should Enter Value Here",
        icon: "error",
        buttons: [ 'OK' ,'X'],
        dangerMode: true
      })
  }

  // If Input is Empty
  if (theInput.value === '') {
    empty();
    localStorage.setItem(theInput.value,true);
  
  }
  else if (theInput.value !== ''){
    let noTasksMsg = document.querySelector(".no-tasks-message");

    // Check If Span With No Tasks Message Is Exist
    if (document.body.contains(noTasksMsg)) {

      // Remove No Tasks Message
      noTasksMsg.remove();

    }
    

    // Create Main Span Element
    let mainSpan = document.createElement("span");

    // Create Delete Button
    let deleteElement = document.createElement("span");

    // Create The Main Span Text
    let text = document.createTextNode(theInput.value);

    // Create The Delete Button Text
    let deleteText = document.createTextNode("Delete");

    // Add Text To Main Span
    mainSpan.appendChild(text);

    // Add Class To Main Span
    mainSpan.className = 'task-box';

    // Add Text To Delete Button
    deleteElement.appendChild(deleteText);

    // Add Class To Delete Button
    deleteElement.className = 'delete';

    // Add Delete Button To Main Span
    mainSpan.appendChild(deleteElement);
    
    // Add The Task To The Container
    tasksContainer.appendChild(mainSpan);
    
    // Empty The Input
    theInput.value = '';

    // Focus On Field
    theInput.focus();

    // Calculate Tasks
    calculateTasks();
    localStorage.setItem(theInput.value,true);
  
}

};
/* //  Check if the task is exists
let y = tasksContent.lastElementChild;
let y2 = y.firstChild.textContent;
let x = tasksContent.childElementCount;
let myArray = Array.from(document.querySelectorAll(".task-box"));
let mySlicedArray = myArray.slice(0, -1);
let myArray2 = [];

for (let i = 0; i < mySlicedArray.length; i++) {
 myArray2.push(mySlicedArray[i].firstChild.textContent);
};     
console.log(myArray2);

if (myArray2.indexOf(y2) !== -1) {
 alert('this task is already exist');
 tasksContent.lastChild.remove();
} */

document.addEventListener('click', function (e) {

  // Delete Task
  if (e.target.className == 'delete') {

    // Remove Current Task
    e.target.parentNode.remove();
    localStorage.setItem(theInput.value,true);


    // Check Number Of Tasks Inside The Container
    if (tasksContainer.childElementCount == 0) {

      createNoTasks();
    localStorage.setItem(theInput.value,true);

    }

  }

  // Finish Task
  if (e.target.classList.contains('task-box')) {

    // Toggle Class 'finished'
    e.target.classList.toggle("finished");
    localStorage.setItem(theInput.value,true);

  }
  // Calculate Tasks
  calculateTasks();

});

// Function To Create No Tasks Message
function createNoTasks() {

  // Create Message Span Element
  let msgSpan = document.createElement("span");

  // Create The Text Message
  let msgText = document.createTextNode("No Tasks To Show");

  // Add Text To Message Span Element
  msgSpan.appendChild(msgText);

  // Add Class To Message Span
  msgSpan.className = 'no-tasks-message';

  // Append The Message Span Element To The Task Container
  tasksContainer.appendChild(msgSpan);
  
}

// Function To Calculate Tasks
function calculateTasks() {

  // Calculate All Tasks
  tasksCount.innerHTML = document.querySelectorAll('.tasks-content .task-box').length;
  

  // Calculate Completed Tasks
  tasksCompleted.innerHTML = document.querySelectorAll('.tasks-content .finished').length;

}
// delete All

deleteBtn.addEventListener('click', 
function(){
  tasksContainer.innerHTML = '';
  theInput.focus();
  createNoTasks()
})



/* //finish all
finishBtn.addEventListener('click',
function(){
this.classList.toggle('finished')
})
 */

