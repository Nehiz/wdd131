// Declare variables for the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#chapter-list');

// Add event listener for the Enter key to improve usability
input.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        button.click();
    }
});

// Add event listener to the "Add Chapter" button
button.addEventListener('click', function() {
    // Check if the input is not blank
    if (input.value.trim() !== '') {
        // Create a new li element
        const li = document.createElement('li');

        // Create a delete button
        const deleteButton = document.createElement('button');

        // Populate the li element with the input value
        li.textContent = input.value;

        // Populate the delete button with the ❌ emoji
        deleteButton.textContent = '❌';

        // Add an aria-label to the delete button for accessibility
        deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

        // Add event listener to the delete button
        deleteButton.addEventListener('click', function() {
            list.removeChild(li);
            input.focus();
        });

        // Append the delete button to the li element
        li.append(deleteButton);

        // Append the li element to the unordered list
        list.append(li);

        // Clear the input field after adding the chapter
        input.value = '';
    }

    // Set focus to the input field (whether or not a list item was created)
    input.focus();
});