// Remove the <main> element from the DOM
document.querySelector("main").remove();

// Create a new <h1> element
const newHeader = document.createElement("h1");

// Set the new element's id to 'victory'
newHeader.id = "victory";

// Set the text inside the new <h1> element
newHeader.textContent = "YOUR-NAME is the champion"; // Replace 'YOUR-NAME' with your actual name

// Append the new <h1> to the body
document.body.appendChild(newHeader);
