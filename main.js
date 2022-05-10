let main = [
	"hey",
	"what",
	"whatttt",
	"ihavenoideas",
	"noooo",
	"stopit",
	"stop",
];
randomnumberr = 0;
function getrandomword() {
	randomnumberr = Math.floor(Math.random() * main.length);
	console.log(main[randomnumberr]);
	document.getElementById("vieww").innerHTML = main[randomnumberr];
}
