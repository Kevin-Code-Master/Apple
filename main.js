//Designing the input field for search

function focusIn(){
	document.getElementById("search").style.width = "130px";
	document.getElementById("fname").style.transition = "2s";
}

function focusOut(){
	document.getElementById("search").style.width = "95px";
	document.getElementById("fname").style.transition = "2s";
}