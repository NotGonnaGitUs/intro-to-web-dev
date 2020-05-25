let last_result = 1;
document
  .querySelector(".calc-buttons")
  .addEventListener("click", function (event) {
    if (event.target.tagName === "BUTTON") {
      result = document.querySelector(".screen");
      button_clicked = event.target.innerText;
      if (
        button_clicked === "×" ||
        button_clicked === "÷" ||
        button_clicked === "+" ||
        button_clicked === "-"
      ) {
        operator = button_clicked;
        last_result = parseInt(result.innerText);
        console.log(`Operator identified! Last result is ${last_result}`);
        result.innerText = "0";
      } else if (button_clicked === "C") {
        result.innerText = "0";
        last_result = 0;
      } else if (button_clicked === "=") {
        const current_val = parseInt(result.innerText);
        if (operator === "×") {
          answer = last_result * current_val;
        } else if (operator === "÷") {
          answer = last_result / current_val;
        } else if (operator === "+") {
          answer = last_result + current_val;
        } else if (operator === "-") {
          answer = last_result - current_val;
        }
        console.log(
          `Calculating.... last result ${last_result}, ${operator}, ${current_val}`
        );
        result.innerText = answer;

        //   console.log("Lets calculate!");
      } else if (button_clicked === "←") {
        result.innerText = result.innerText.substring(
          0,
          result.innerText.length - 1
        );
      } else {
        result.innerText += button_clicked;
      }
    }

    event.stopPropagation();
    // console.log(`last result ${last_result}, current_button${button_clicked}`);
  });
