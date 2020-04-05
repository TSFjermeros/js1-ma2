//question 1

const myFunctionExpression = function() {
	console.log("Tom Stian Fjermeros");
};

myFunctionExpression();

//question 2

const button = document.querySelector(".btn");

function callAfterButtonClick() {
	console.log("I was clicked");
}

button.addEventListener("click", callAfterButtonClick);

//question 3
const textInput = document.querySelector(".firstName");

function callAfterAKeyIsReleased() {
	console.log("a Key");
}
firstName.addEventListener("keyup", callAfterAKeyIsReleased);

//question 4

const button = document.querySelector(".btn");

function callOnHover() {
	console.log("hover");
}
button.addEventListener("mouseover", callOnHover);

//question 5

//question 6

//question 7
const animal = "cow";

let arrayToLoopThrough;

switch (animal) {
	case "cat":
		console.log("Meow");
		brake;

	case "cow":
		console.log("Moo");
		brake;

	case "bird":
		console.log("Tweet");
		brake;

	default:
		arrayToLoopThrough = "Harrumph";
}

//question 8
const sheep = ["Malcolm", "Anders", "Marie"];

function handleEachsheep(sheep) {
	console.log(sheep);
}

sheep.forEach(handleEachsheep);

//question 9
function logTime() {
	console.log(new Date());

	if (counter === 5) {
		clearInterval(intervalId);
	}
	counter++;
}
let counter = 0;

const intervalId = setInterval(logTime, 500);

//question 10

const container = document.querySelector("div.container");

function updateDiv() {
	container.innerHTML = "Text updated";
}
setTimeout(updateDiv, 2000);
