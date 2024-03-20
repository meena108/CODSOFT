// Get the input element
const inputValue = document.getElementById("user-input");

// Event listener for numbers
document.querySelectorAll(".numbers").forEach(function (item) {
    item.addEventListener("click", function (e) {
        if (inputValue.innerText === "NaN" || inputValue.innerText === "0") {
            inputValue.innerText = "";
        }
        inputValue.innerText += e.target.innerHTML.trim();
    });
});

// Event listener for operations
document.querySelectorAll(".operations").forEach(function (item) {
    item.addEventListener("click", function (e) {
        const operation = e.target.innerHTML;
        if (operation === "=") {
            try {
                inputValue.innerText = eval(inputValue.innerText);
            } catch (error) {
                inputValue.innerText = "Error";
            }
        } else if (operation === "AC") {
            inputValue.innerText = "0";
        } else if (operation === "DEL") {
            inputValue.innerText = inputValue.innerText.slice(0, -1);
            if (inputValue.innerText.length === 0) {
                inputValue.innerText = "0";
            }
        } else {
            // Handle other operations (e.g., +, -, *, /)
            inputValue.innerText += operation;
        }
    });
});
