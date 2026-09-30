function gradientDisable () {
	let contents = document.getElementsByClassName("containing-div")[0]
	console.log(contents)
	for (let element of contents.children) {
		console.log(element)
		element.style.color = "white"
	}
}