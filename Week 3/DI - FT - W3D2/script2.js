// Exercise 1 : Select A Kind Of Music
// <select id="genres">
//   <option value="rock">Rock</option>
//   <option value="blues" selected>Blues</option>
// </select>
// Show the value and the text of the selected option.
// Add an option: <option value="classic">Classic</option>.
// Make it selected.

let choice = document.querySelector("select")
console.log(choice)

// let selectedop = choice[1]

// console.log(selectedop.innerHTML)

let selectedop = choice.options[choice.selectedIndex].value;
console.log(selectedop)

let option = document.createElement("option")
option.setAttribute("value", "Classic")
option.innerHTML = "Classic"
choice.appendChild(option)

// Selecting Blues to remove the Attribute Selected from Blues

option.setAttribute("selected", "selected")

// let blues = document.querySelectorAll("option")[1]
// console.log(blues)
let blues = choice[1]
 // Removing Selected Attribute

blues.removeAttribute("selected")