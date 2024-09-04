const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){

    // Check if the input box is empty
    if(inputBox.value === ''){
        alert("You must write something!");
    }
    else 
    {
        // Create a new list item and add it to the list
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // Create a span element and add it to the list
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        li.appendChild(span);
    }

    // Clear the input box
    inputBox.value = '';

    // Save the data in the local storage
    saveData();

}

listContainer.addEventListener('click', function(e){

    // Check if the target element is a list item or a span element
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
    }

    // Remove the list item if the target element is a span element
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
}, false);

function saveData(){
    // Store the data in the local storage
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData(){
    // Get the data from the local storage
    listContainer.innerHTML = localStorage.getItem("data");
}
showData()