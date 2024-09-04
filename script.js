const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const notification = document.getElementById("notification-box");

function addTask() {
    // Check if the input box is empty
    if (inputBox.value === '') {
        // Set the notification text
        notification.textContent = "You must write something!";

        // Show the notification with fade-in
        notification.style.display = 'block';
        notification.style.opacity = '1';
        notification.style.visibility = 'visible';

        // Hide the notification with fade-out after 3 seconds
        setTimeout(function() {
            notification.style.opacity = '0';
            notification.style.visibility = 'hidden';
        }, 3000);
    } else {
        // Create a new list item and add it to the list
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // Create a span element and add it to the list
        let span = document.createElement("span");
        span.innerHTML = "\u00D7";
        li.appendChild(span);

        // Clear the input box
        inputBox.value = '';

        // Save the data in the local storage
        saveData();
    }
}

// Add event listener for keyup event on the input box
inputBox.addEventListener("keyup", function(event) {
    if (event.key === "Enter") { // Check if the pressed key is "Enter"
        event.preventDefault();
        addTask();
    }
});

listContainer.addEventListener('click', function(e) {
    // Check if the target element is a list item or a span element
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }

    // Remove the list item if the target element is a span element
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData(); // Save data after removing an item
    }
}, false);

function saveData() {
    // Store the data in the local storage
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData() {
    // Get the data from the local storage
    listContainer.innerHTML = localStorage.getItem("data");
}

// Show the stored tasks when the page loads
showData();
