//EXO 1

// function checkDriverAge(age) {
// 	var age = 20;
// 	if (Number(age) < 18) {
// 		alert("Sorry, you are too young to drive this car. Powering off");
// 	} else if (Number(age) > 18) {
// 		alert("Powering On. Enjoy the ride!");
// 	} else if (Number(age) === 18) {
// 		alert("Congratulations on your first year of driving. Enjoy the ride!");
// 	}
// }
// checkDriverAge.call()

// // EXO 2
// // Function with parameter
// function is_Blank (myList) {
// // Establish condition 
// 	if(myList.length == 0){
// // Return conditon boolean 
// 		return true 
// 	} else {
// 		return false
// 	}
// }
// //Function creating a new outcome
// function pushingToArray(newList) {
// // Condition of new array
// 	if (is_Blank(newList) == true){
// // Pushing element in the new list
// 		newList.push('a')
// // Returning basic list
// 	}else {
// 		console.log(newList)
// 	}
// }
// pushingToArray(['hello', 'shalom'])
// // console.log(is_Blank(['a','b','c']));


// EXO 3

// abbrev_name = function (str1) {
//     var split_names = str1.trim().split(" ");
//     if (split_names.length > 1) {
//         return (split_names[0] + " " + split_names[1].charAt(0) + ".");
//     }
//     return split_names[0];
// };
// console.log(abbrev_name("Robin Singh"));

// EXO 4

// var str = 'I alove Eating ITALIAN FOOD';
// var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
// var LOWER = 'abcdefghijklmnopqrstuvwxyz';
// var result = [];
  
//   for(var x=0; x<str.length; x++)
//   {
//     if(UPPER.indexOf(str[x]) !== -1)
//     {
//       result.push(str[x].toLowerCase());
//     }
//     else if(LOWER.indexOf(str[x]) !== -1)
//     {
//       result.push(str[x].toUpperCase());
//     }
//     else 
//     {
//       result.push(str[x]);
//     }
//   }
// console.log(result.join

// EXO 5

// amazonBasket = {
//     glasses: 1,
//     books: 2,
//     floss: 100
// }

// function checkBasket(){
// 	var item = prompt('What item are you looking for?')

// 	if (item in amazonBasket) {
// 		alert('your item is in the basket')
// 	}
// 	else {
// 	alert('your item is not in the basket')
// 	}
// }
// checkBasket

// EXO 6

// function change_enough(pocket_change,price){
// 	var sum=0
// 	sum=sum+pocket_change[0]*0.25
// 	sum=sum+pocket_change[1]*0.10
// 	sum=sum+pocket_change[2]*0.5
// 	sum=sum+pocket_change[3]*0.1
// ​
// 	if (sum>=price){
// 		console.log("You have enough money.")
// 	}
// ​
// 	else{
// 		console.log("You don't have enough money.")
// 	}
// }

// change_enough([0, 0, 20, 5], 0.75)

// EXO 7 

// let shoppingList = ['banana', 'orange', 'apple'];

// 		let stock = { 
// 		    "banana": 6, 
// 		    "apple": 0,
// 		    "pear": 12,
// 		    "orange": 32,
// 		    "blueberry":1
// 		}  

// 		let prices = {    
// 		    "banana": 4, 
// 		    "apple": 2, 
// 		    "pear": 1,
// 		    "orange": 1.5,
// 		    "blueberry":10
// 		} 
// 		let sumOfPrices = 0;

// 		function myBill() {
// 			for (item of shoppingList) 
// 			{
// 				if (stock[item] > 0) {
// 					sumOfPrices = sumOfPrices + prices[item];
// 				}
// 			}
// 			return sumOfPrices;
// 		}
// 		console.log(myBill());

// EXO 8

// var sum= 0;

		// function multipleof23(number){
		// 	for(var i = 1; i < number; i++){
		// 		if((i % 23 == 0)){
		// 			sum = sum + i
		// 		}
		// 	}
		// 	return sum;
		// }
		// console.log(multipleof23(500));

// EXO 9



// EXO 10

// function hotelcost(){
// 			var night = prompt("How many night do you like to stay in this hotel?")
// 			var cost = Number(night)*140
// 			return cost;
// 		}
		
// 		var place = {
// 			"london": 183,
// 			"Paris": 220,
// 			"Other": 330,
// 		}

// 		function planeridecost(){
// 			var destination = prompt("What is your destination?")
// 			if (place[destination]){
// 				return place[destination] 
// 			}
// 			else {
// 				return place["Other"]
// 			}
// 		}

// 		function rentalcarcost(){
// 			var numberofday = prompt("How many days would you like to rent a car?")
// 			var cost = Number(numberofday)*40
// 			if (numberofday > 10){
// 				cost = cost*0.95
// 			}
// 			return cost
// 		}

// 		function totalvacationcost(){
// 			var total = hotelcost()+planeridecost()+rentalcarcost()
// 			console.log(total)
// 		}

// 		totalvacationcost()















