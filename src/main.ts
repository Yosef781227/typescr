console.log("Script loaded successfully.");

// Create and add a button to the page
const randomButton = document.createElement("button");
randomButton.textContent = "Click Me!";
document.body.appendChild(randomButton);

// Create and add a paragraph to display random text
const output = document.createElement("p");
document.body.appendChild(output);

console.log("Button and paragraph added to the page.");

// Array of random texts
const randomTexts = ["Hello!", "How are you?", "Welcome!", "Enjoy your day!"];

// Add an event listener to the button
randomButton.addEventListener("click", () => {
  console.log("Button clicked!");
  const randomIndex = Math.floor(Math.random() * randomTexts.length);
  output.textContent = randomTexts[randomIndex];
});
