let equal_pressed = 0;

let button_input = document.querySelectorAll(".input-button");

let input = document.getElementById("input");
let equal = document.getElementById("equal");
let clear = document.getElementById("clear");
let erase = document.getElementById("erase");

window.onload = () => {
  input.value = "";
};

// handle all buttons (numbers + operators + %)
button_input.forEach((button) => {
  button.addEventListener("click", () => {

    if (equal_pressed === 1) {
      input.value = "";
      equal_pressed = 0;
    }

    let value = button.innerText;

    // ✅ PERCENT LOGIC
    if (value === "%") {
      input.value += "/100";
    } else {
      input.value += value;
    }
  });
});

// equal button
equal.addEventListener("click", () => {
  equal_pressed = 1;

  let inp_val = input.value;

  try {
    let solution = eval(inp_val);

    if (Number.isInteger(solution)) {
      input.value = solution;
    } else {
      input.value = solution.toFixed(2);
    }

  } catch (err) {
    input.value = "Error";
  }
});

// clear
clear.addEventListener("click", () => {
  input.value = "";
});

// erase
erase.addEventListener("click", () => {
  input.value = input.value.slice(0, -1);
});