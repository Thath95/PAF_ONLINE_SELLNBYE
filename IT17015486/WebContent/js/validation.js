function emptyCheck(name, id) {
	var inputValue = document.getElementById(name);
	if (inputValue.value == "" || inputValue.value == null
			|| inputValue.value == " ") {
		id.style.backgroundColor = "red";
	} else {
		id.style.backgroundColor = "";
	}
}