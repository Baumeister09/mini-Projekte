    const display = document.getElementById("display");
    const buttons = document.querySelectorAll("button");
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const value = button.value;
            if (value === "C") {
                display.value = "";
            }
            else if (value === "sqrt") {
                try {
                    display.value = Math.sqrt(eval(display.value));
                }
                catch (error) {
                    display.value = "Error";
                }
            }
            else if (value === "**") {
                display.value = display.value + "**";
            }
            else if (value === "%") {
                try {
                    display.value = eval(display.value) / 100;
                }
                catch (error) {
                    display.value = "Error";
                }
            }
            else if (value === "backspace") {
                display.value = display.value.slice(0, -1);
            }
            else if (value === "=") {
                try {
                    display.value = eval(display.value);
                }
                catch (error) {
                    display.value = "Error";
                }
            }
            else {
                display.value += value;
            }
        });
    });