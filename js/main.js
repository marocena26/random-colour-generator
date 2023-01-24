"use strict";

//CONSTANT
const button = document.querySelector(".js-button");
const background = document.querySelector(".js-background");

//VARIABLES
//Variable to generate random colour
var randomColor = Math.floor(Math.random() * 16777215).toString(16);

//FUNCTIONS
//Render a random colour
const setBg = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  document.body.style.backgroundColor = "#" + randomColor;
};

//Handler function
const handleColor = (ev) => {
  ev.preventDefault();
  setBg();
};

//EVENTS
button.addEventListener("click", handleColor);
