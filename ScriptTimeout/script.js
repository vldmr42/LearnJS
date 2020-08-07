// let timerId = setTimeout(function log() {
//     console.log('Hello');
//     setTimeout(log, 2000);
// });

let btn = document.querySelector(".btn"),
	elem = document.querySelector(".box");

function myAnimation() {
	let pos = 0;

	let id = setInterval(frame, 10);

	function frame() {
		if (pos == 300) {
			clearInterval();
		} else {
			pos++;
			elem.style.top = pos + "px";
			elem.style.left = pos + "px";
		}
	}
}

btn.addEventListener("click", myAnimation);

let btnBlock = document.querySelector(".btn-block");
let btns = document.getElementsByTagName("button");

btnBlock.addEventListener("click", function (event) {
	// if (event.target && event.target.tagName == 'BUTTON') {
	//     console.log('Hello');
	// }
	// if (event.target && event.target.classList.contains("first")) {
	// 	console.log("Hello");
	// }
	if (event.target && event.target.matches("button.first")) {
		console.log("Hello");
	}
});