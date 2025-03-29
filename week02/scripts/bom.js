// Declare variables for the input, button, and list elements
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#chapter-list');

// Placeholder for future event listener
// For now, we just set up the DOM manipulation logic
function addChapter() {
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

    // Append the delete button to the li element
    li.append(deleteButton);

    // Append the li element to the unordered list
    list.append(li);

    // Clear the input field after adding the chapter
    input.value = '';
}

// Note: Event listener for the button click will be added in a future activity