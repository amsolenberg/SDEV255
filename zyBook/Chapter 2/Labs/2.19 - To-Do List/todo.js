window.addEventListener("DOMContentLoaded", domLoaded);

function domLoaded() {
    // Get the "Add" button and attach a click event listener to trigger addBtnClick()
    let addButton = document.getElementById("add-btn");
    addButton.addEventListener('click', addBtnClick);
    
    // Get the text input box and add a keyup event listener to trigger addBtnClick() when Enter is pressed
    let textBox = document.querySelector('#new-task');
    textBox.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            addBtnClick();
        }
    })
}

// Function to handle adding a new task
function addBtnClick() {
    // Get the input text area and check if it has a value
    let textArea = document.querySelector("#new-task");
    if (textArea.value !== "") {
        // Call addTask with the task text if there's a value
        addTask(textArea.value)
    }
    
    // Clear the text area and refocus it
    textArea.value = "";
    textArea.focus();
}

// Function to create a new list item with a "done" button
function addTask(task) {
    // Create a new <li> element with task text and a "done" button
    let li = document.createElement("li");
    li.innerHTML = `<span class="task-text">${task}</span><button class='done-btn'>&#10006;</button>`
    
    // Append the new <li> to the <ol>
    let ol = document.querySelector('ol');
    ol.appendChild(li);

    // Select all "done" buttons and attach removeTask to the most recently added button
    let doneItems = document.querySelectorAll('.done-btn');
    let lastDoneButton = doneItems[doneItems.length - 1];
    lastDoneButton.addEventListener('click', removeTask);
}

// Function to handle task removal when a "done" button is clicked
function removeTask(event) {
    // Identify the <li> element containing the clicked button
    let listItem = event.target.parentNode;
    
    // Get the <ol> element and remove the identified <li> from it
    let ol = listItem.parentNode;
    ol.removeChild(listItem);
}
