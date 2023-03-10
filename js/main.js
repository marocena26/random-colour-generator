"use strict";

//CONSTANT
const button = document.querySelector(".js-button");
const background = document.querySelector(".js-background");
const message = document.querySelector(".hidden");
const color = document.querySelector(".color");

//VARIABLES
//Variable to generate random colour
var randomColor = Math.floor(Math.random() * 16777215).toString(16);

//FUNCTIONS
//Render a random colour
const setBg = () => {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
};

//Handler function
const handleColor = (ev) => {
  ev.preventDefault();
  const result = setBg();
  background.style.background = result;
  message.classList.remove("hidden");
  color.innerHTML = `${result}`;
  color.style.color = result;
  button.style.color = result;
  button.style.borderColor = result;
};

//EVENTS
button.addEventListener("click", handleColor);
