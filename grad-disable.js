function gradientDisable () {
	let contents = document.getElementsByClassName("containing-div")[0]
	for (let element of contents.children) {
		element.style.color = "white"
	}
}