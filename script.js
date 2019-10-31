

window.onload = function countStr() {

	var output = document.getElementById("answer");
	var button2 = document.getElementById("button2");

	button2.addEventListener("click",function countStr() {

		var str = document.getElementById("input").value;
		var space = str.split(" ").length-1;
		var letter = str.replace(/\s+/g,"");
		var let = letter.length;

		output.innerHTML = "<br> <strong> " + space + " space(s) " + let+ " letter(s)</strong> <br> <br>";
	});
}


function removeSpaces() {
		var s = document.getElementById("result").innerHTML;
		var res = s.replace(/\s/g,'');
		document.getElementById("result").innerHTML = res;
	}