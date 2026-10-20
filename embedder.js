const targets = document.getElementsByClassName("nav")
const htmlText = (await fetch("/super-PAC-site-2026/nav.html")).text()
for (let target of targets) {
	target.innerHTML = htmlText
}
