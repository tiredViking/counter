// SCRIPT THAT CREATES A WEB APP THAT ALLOWS THE USER
// TO ADD OR DECREASE A COUNTER, WITH A DEFAULT STEP OF 1,
// OR RESET THE COUNTER.
// THE STEP CAN ONLY BE A NUMBER BETWEEN 1 AND 100;
// THE COUNTER CAN BECOME NEGATIVE;
// RELOADING THE PAGE RESETS THE COUNTER TO 0 AND STEP TO 1.

document.addEventListener('DOMContentLoaded', () => {
    // GLOBAL VARIABLES 
    var counter_value = 0;

    // HTML ELEMENTS 
    const app_container = document.createElement("div");
    const counter_div = document.createElement("div");
    const operations_div = document.createElement("div");
    const increment_btn = document.createElement("button");
    const decrement_btn = document.createElement("button");   
    const step_div = document.createElement("div");
    const step_label = document.createElement("label");
    const step_input = document.createElement("input");
    const reset_btn = document.createElement("button");

    //ADD CLASS,TEXT, AND APPEND CHILD
    app_container.className = "app_container";

    counter_div.className = "counter";
    counter_div.textContent = counter_value;

    operations_div.className = "operations";

    increment_btn.className = "increase";
    increment_btn.textContent = "+";

    decrement_btn.className = "decrease";
    decrement_btn.textContent = "-";

    step_div.className = "step";
    //STEP INPUT FORM
    step_input.className = "step_input";
    step_input.id = "step_form"
    step_input.type = "number";
    step_input.name = "step_input_form";
    step_input.min = 1;
    step_input.max = 100;
    step_input.value = 1;
    //STEP_LABEL FOR THE FORM
    step_label.className = "step_label";
    step_label.htmlFor = "step_form";
    step_label.textContent = "Step (1 - 100)";

    reset_btn.className = "reset";
    reset_btn.textContent = "Reset counter to zero";
    
    document.body.appendChild(app_container);
    app_container.appendChild(counter_div);
    app_container.appendChild(operations_div);
    operations_div.appendChild(increment_btn);
    operations_div.appendChild(step_div);
    step_div.appendChild(step_label);
    step_div.appendChild(step_input);
    operations_div.appendChild(decrement_btn);
    app_container.appendChild(reset_btn);

    // FUNCTIONS

    function increase(step, counter) {
        return counter + step;
    }
    
    function decrease(step, counter) {
        return counter - step;
    }

    // EVENT LISTENERS
    // 
    // IF THE USER CLICKS ON +
    increment_btn.addEventListener("click", () => { 
        if (Number(step_input.value) < 1 || Number(step_input.value) > 100 || !Number.isInteger(Number(step_input.value))) {
            alert("The step can only be an integer number between 1 and 100");
            return;
        }
        counter_value = increase(Number(step_input.value), counter_value);
        counter_div.textContent = counter_value;
        
        })

     // IF THE USER CLICKS ON -   
    decrement_btn.addEventListener("click", () => {
        if (Number(step_input.value) < 1 || Number(step_input.value) > 100 || !Number.isInteger(Number(step_input.value))) {
            alert("The step can only be an integer number between 1 and 100");
            return;
        }
        counter_value = decrease(Number(step_input.value), counter_value)
        counter_div.textContent = counter_value;
    })

    // IF THE USER CLICKS THE RESET BUTTON
     reset_btn.addEventListener("click", () => {
         counter_value = 0;
         counter_div.textContent = counter_value;
     })
}) // END DOMCONTENTLOADED
