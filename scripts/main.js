let main = [
	"Excalibur",
	"Gramr",
	"Zulfiqar",
	"Durendal",
	"Harpe",
	"Ame-no-Habakiri",
	"Kusanagi-no-Tsurugi",
];
let randomnumberr = 0;
function getrandomword() {
	randomnumberr = Math.floor(Math.random() * main.length);
	console.log(main[randomnumberr]);
	document.getElementById("display-text").innerHTML = main[randomnumberr];
}
