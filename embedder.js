const targets = document.getElementsByClassName("nav")
const res = await fetch("/super-PAC-site-2026/nav.html")
const htmlText = await res.text()
for (let pt = 0; pt < targets.length; pt++) {
	targets[pt].innerHTML = htmlText
}
