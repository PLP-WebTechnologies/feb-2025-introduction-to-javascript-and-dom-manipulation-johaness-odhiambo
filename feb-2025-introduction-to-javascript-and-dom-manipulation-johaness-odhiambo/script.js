// script.js

// Function to change text content dynamically
function changeText() {
    const textElement = document.getElementById('dynamicText');
    textElement.textContent = 'Text has been changed!';
}

// Function to modify CSS styles
function changeStyle() {
    const styleElement = document.getElementById('styledElement');
    styleElement.style.color = 'blue';
    styleElement.style.fontSize = '20px';
}

// Function to add a new element
function addElement() {
    const newElement = document.createElement('div');
    newElement.textContent = 'A new element has been added!';
    document.body.appendChild(newElement);
}

// Function to remove an element
function removeElement() {
    const elementToRemove = document.getElementById('elementToRemove');
    if (elementToRemove) {
        elementToRemove.remove();
    }
}

// Event listeners for buttons
document.getElementById('changeTextButton').addEventListener('click', changeText);
document.getElementById('changeStyleButton').addEventListener('click', changeStyle);
document.getElementById('addElementButton').addEventListener('click', addElement);
document.getElementById('removeElementButton').addEventListener('click', removeElement);