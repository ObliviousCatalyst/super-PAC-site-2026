async function embedNav () {
	const targets = document.getElementsByClassName("nav")
	console.log("c1")
	const res = await fetch("/super-PAC-site-2026/nav.html")
	console.log("c2")
	const htmlText = await res.text()
	console.log("c3")
	console.log(targets.length)
	console.log(targets)
	for (let pt = 0; pt < targets.length; pt++) {
		console.log(`c3.${pt}`)
		console.log(targets[pt])
		targets[pt].innerHTML = htmlText
	}
	console.log("c4")

}

embedNav()