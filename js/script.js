// SCRIPT THAT CREATES A WEB APP THAT ALLOWS THE USER
// TO ADD OR DECREASE A COUNTER, WITH A DEFAULT STEP OF 1,
// OR RESET THE COUNTER.
// THE STEP CAN ONLY BE AN INTEGER BETWEEN 1 AND 100;
// THE COUNTER CAN BECOME NEGATIVE;
// RELOADING THE PAGE RESETS THE COUNTER TO 0 AND STEP TO 1.

document.addEventListener("DOMContentLoaded", () => {
  //========== GLOBAL VARIABLES ============================
  let counter_value = 0;
  //========================================================

  //========= HTML ELEMENTS ================================
  const description_div = document.createElement("div");
  const description_title = document.createElement("h1");
  const description_text = document.createElement("p");
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
  description_div.className = "description_div";
  description_title.textContent = "Welcome!";
  description_text.textContent =
    "This app is a web counter; you can increase or decrease the number below by clicking on + or -, and the count will be modified by the step you select (the default step is one). The step is only valid when it is an integer between 1 and 100. You can also reset the counter to zero by cliking on the the prompt below.";

  app_container.className = "app_container";

  counter_div.className = "counter";
  counter_div.textContent = counter_value;

  operations_div.className = "operations";

  decrement_btn.className = "decrease";
  decrement_btn.textContent = "-";

  increment_btn.className = "increase";
  increment_btn.textContent = "+";

  step_div.className = "step";
  //STEP INPUT FORM
  step_input.className = "step_input";
  step_input.id = "step_form";
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

  document.body.appendChild(description_div);
  description_div.appendChild(description_title);
  description_div.appendChild(description_text);
  document.body.appendChild(app_container);
  app_container.appendChild(counter_div);
  app_container.appendChild(operations_div);
  operations_div.appendChild(decrement_btn);
  operations_div.appendChild(step_div);
  step_div.appendChild(step_label);
  step_div.appendChild(step_input);
  operations_div.appendChild(increment_btn);
  app_container.appendChild(reset_btn);
  //========================================================

  //============== FUNCTIONS ===============================

  // INPUT VALIDATION CRITERIA:
  function validate_input(value) {
    if (value < 1 || value > 100 || !Number.isInteger(value)) return false;
    else return true;
  }

  // FUNCTION THAT VALIDATES THE INPUT AND UPDATES THE VALUE OF THE COUNTER; IT DOES NOT UPDATE THE DOM; 
  function update_counter(step, operation) {
    if (!validate_input(step)) {
      alert("The step can only be an integer between 1 and 100");
    }
    else {
      if (operation === "+") counter_value += step;
      else if (operation === "-") counter_value -= step;
    }
    return;
  } // end update_counter

  // UPDATE THE DOM
  function update_display() {
    counter_div.textContent = counter_value;
  }

  // UPDATE COUNTER AND DISPLAY IN ONE FUNCTION; OPERATION PARAMETER IS PASSED INSIDE THE LISTENER:
  function update_and_display(step, operation) {
    update_counter(step, operation);
    update_display();
  }

  //========================================================

  //============ EVENT LISTENERS ===========================
  //
  // IF THE USER CLICKS ON +
  increment_btn.addEventListener("click", () => {
    const step = Number(step_input.value);
    update_and_display(step, "+");
  });

  // IF THE USER CLICKS ON -
  decrement_btn.addEventListener("click", () => {
    const step = Number(step_input.value);
    update_and_display(step, "-");
  });

  // IF THE USER CLICKS THE RESET BUTTON
  reset_btn.addEventListener("click", () => {
    counter_value = 0;
    update_display();
  });
  //========================================================
}); // END DOMCONTENTLOADED
