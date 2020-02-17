var x = document.getElementsByClassName("lorem").length;
//console.log(x); //checking the no. of times lorem class is present

var i, j, k;
var word = "";
var sentence = "";
//var h1 = [""];


//random funtion
function random(items) {
	return items[Math.floor(Math.random() * items.length)];
}

var z = "Lorem ipsum dolor sit amet consetetur sadipscing elitr sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat sed diam voluptua at vero eos et accusam et justo duo dolores et ea rebum stet clita kasd gubergren no sea takimata sanctus est"
//45 words

var words = z.split(" ");
//45 words ready to deploy
//console.log(words);

for (i = 0; i < words.length; i++) {
	words[i] += " ";
}

//looping no. of times 'lorem' is there

for (k = 0; k < x; k++) {

	var a = document.getElementsByClassName("lorem")[k].innerHTML;
	var ipsum = parseInt(a, 10);
	//how many words needed

	for (j = 0; j < ipsum; j++) {
		sentence = sentence + words[j] + " ";
	}
	console.log(sentence);


	document.getElementsByClassName("lorem")[k].innerHTML = sentence.slice(0, -2) + ".";
	sentence = "";
}