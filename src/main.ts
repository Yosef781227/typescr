const randomButton = document.createElement("button");
randomButton.textContent = "Click Me!";
document.body.appendChild(randomButton);

const output = document.createElement("p");
document.body.appendChild(output);

const randomTexts = ["Hello!", "How are you?", "Welcome!", "Enjoy your day!"];

randomButton.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * randomTexts.length);
  output.textContent = randomTexts[randomIndex];
});
