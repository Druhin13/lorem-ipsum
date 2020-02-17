/*var a = document.getElementById("lorem").innerHTML;
var ipsum = parseInt(a, 10);

function random(items) {
	return items[Math.floor(Math.random() * items.length)];
}


var i, j;
var word = "";
var sentence = "";var h1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


//no. of words
for (i = 1; i <= ipsum; i++) {

	//no. of letters
	var l = random(n);

	for (j = 1; j <= l; j++) {
		var letter = random(h1);
		word = word + letter;
	}

	sentence = sentence + " " + word;
	word = "";
}
console.log(sentence);*/
//document.getElementsByClassName("lorem")[0].innerHTML = "sentence";

var x = document.getElementsByClassName("lorem").length;
//console.log(x); //checking the no. of times lorem class is present

var i, j, k;
var word = "";
var sentence = "";
var h1 = [""];
var n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//random funtion
function random(items) {
	return items[Math.floor(Math.random() * items.length)];
}


//looping no. of times 'lorem' is there

for (k = 0; k < x; k++) {
	
	var a = document.getElementsByClassName("lorem")[k].innerHTML;
	//console.log(a);
	
	var ipsum = parseInt(a, 10);
	//console.log(ipsum);
	
	//no. of words
	for (i = 1; i <= ipsum; i++) {

		//no. of letters
		var l = random(n);

		for (j = 1; j <= l; j++) {
			var letter = random(h1);
			word = word + letter;
		}

		sentence = sentence + " " + word;
		word = "";
	}
	document.getElementsByClassName("lorem")[k].innerHTML = sentence;
	sentence = "";
}