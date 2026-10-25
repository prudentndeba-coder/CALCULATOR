let input = document.getElementById("box-input");
let buttons = document.querySelectorAll("button");
let number = "";

let btnArray = Array.from(buttons);
btnArray.forEach(btn => {
  btn.addEventListener("click", (e) => {
    if (e.target.innerHTML == "=") {
      number = eval(number);
      input.value = number;
    } 
    else if (e.target.innerHTML == "AC") {
      number = "";
      input.value = number; // Fixed: Now visually clears the input box
    } 
    else if (e.target.innerHTML == "DEL") { 
      number = number.toString().substring(0, number.length - 1); // Fixed: Removed the trailing dot
      input.value = number;
    } 
    else {
      number += e.target.innerHTML;
      input.value = number;
    }
  });
});
