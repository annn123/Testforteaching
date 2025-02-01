function appendToOutput(value) {
    document.getElementById("output").value += value;
  }
  
  function clearOutput() {
    document.getElementById("output").value = "";
  }
  
  function calculate() {
    let expression = document.getElementById("output").value;
    let result;
  
    try {
      result = eval(expression);
      if (isNaN(result) || !isFinite(result)) {
        throw new Error("Invalid expression");
      }
      document.getElementById("output").value = result;
    } catch (error) {
      document.getElementById("output").value = "Error";
    }
  }