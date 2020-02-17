var x = document.getElementsByClassName("lorem").length;
//console.log(x); //checking the no. of times lorem class is present

var i, j, k;
var word = "";
var sentence = "";
//var h1 = [""];
var n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//random funtion
function random(items) {
	return items[Math.floor(Math.random() * items.length)];
}

var z = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est."
//45 words

var words = z.split(" ");
//45 words ready to deploy
//console.log(words);

for (var i = 0; i < words.length; i++) {
	words[i] += " ";
}

var a = document.getElementsByClassName("lorem")[k].innerHTML;
var ipsum = parseInt(a, 10);
//how many words needed


for (j = 0; j < ipsum; j++) {
	sentence = sentence + words[k] + " ";
}
console.log(sentence);



//looping no. of times 'lorem' is there

for (k = 0; k < x; k++) {

	//var a = document.getElementsByClassName("lorem")[k].innerHTML;
	//console.log(a);

	var ipsum = parseInt(a, 10);
	//console.log(ipsum);

	//no. of words
	for (i = 1; i <= ipsum; i++) {

		//no. of letters
		var l = random(n);

		for (j = 1; j <= l; j++) {
			//var letter = random(h1);

			word = word + letter;
		}

		sentence = sentence + " " + word;
		word = "";
	}
	document.getElementsByClassName("lorem")[k].innerHTML = sentence;
	sentence = "";
}