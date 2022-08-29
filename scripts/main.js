let main = [
	"Excalibur",
	"Gramr",
	"Zulfiqar",
	"Durendal",
	"Harpe",
	"Ame-no-Habakiri",
	"Kusanagi-no-Tsurugi",
	"Xiphos",
	"Kopis",
];
let randomnumberr = 0;
let previousnumber = 100;
function getrandomword() {
	randomnumberr = Math.floor(Math.random() * main.length);
	if(previousnumber == randomnumberr){
		getrandomword();
		return;
	}
	console.log(main[randomnumberr] + ", The random number is "+randomnumberr);
	document.getElementById("display-text").innerHTML = main[randomnumberr];
	previousnumber = randomnumberr;
}
