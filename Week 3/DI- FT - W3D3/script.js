// Exo 1

// function myMove() {
// 	let box = document.getElementById("animate");
// 	let width = document.getElementById("container").offsetWidth;
// 	let start = Date.now();

// 	let timer = setInterval(function() {
// 		let timePassed = Date.now() - start;
// 		box.style.left = timePassed + "px";
// 		if (parseInt(box.style.left) >= width-box.offsetWidth) {
// 			clearInterval(timer)
// 		}
// 	}, 1)
// }

// Exo 2

// var box = document.querySelector("#box-div");

// box.addEventListener("drag", function(event) {
//   box.style.left = event.clientX + "px";
//   box.style.top = event.clientY + "px";
//   console.log("drag" + event.clientX + " " + event.clientY);
// });

// box.addEventListener("dragover", function(event) {
//   console.log("dragover" + event.clientX + " " + event.clientY);
// });

// document.addEventListener("dragenter", function(event) {
//   console.log("dragenter" + event.clientX + " " + event.clientY);
// });

// box.addEventListener("dragend", function(event) {
//   box.style.left = event.clientX + "px";
//   box.style.top = event.clientY + "px";
//   console.log("drop" + event.clientX + " " + event.clientY);
// });



