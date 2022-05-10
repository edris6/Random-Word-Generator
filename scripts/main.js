let main = [
	"hey",
	"what",
	"whatttt",
	"ihavenoideas",
	"noooo",
	"stopit",
	"stop",
];
let randomnumberr = 0;
function getrandomword() {
	randomnumberr = Math.floor(Math.random() * main.length);
	console.log(main[randomnumberr]);
	document.getElementById("display-text").innerHTML = main[randomnumberr];
}
