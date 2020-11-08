let calcstrg = "";
let display = document.getElementById("display");
	console.log(display);
function my_f(btn){
	calcstrg = calcstrg + btn;
	display.innerHTML = calcstrg;
		console.log(calcstrg);
}

function result(){
	let calcresult = eval(calcstrg);
	display.innerHTML = calcresult;
		console.log(calcstrg + "=" + calcresult);
	calcstrg = calcresult;
}

function calcclear(){
	calcstrg = "";
	display.innerHTML = 0;
}
