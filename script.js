const myclac = (Number1, Number2, operator) => {
    switch (operator) {
      case "+":
        return Number1 + Number2;
      case "-":
        return Number1 - Number2;
      case "*":
        return Number1 * Number2;
  
      case "/":
        if (Number2 === 0) {
          return "من كل عقلك بدك تقسم على صفر";
        }
        return Number1 / Number2;
      default:
        return "حظ اوفر";
    }
  };
  
  const resut_result = () => {
  
    const result = document.getElementById("result");
  
    result.innerHTML ="";
  
  
  
  };
  
  const calculate = () => {
    const Number1 = Number(document.getElementById("number1").value);
    const Number2 = Number(document.getElementById("number2").value);
  
    const operator = document.getElementById("operator").value;
    const result = document.getElementById("result");
  
    result.innerHTML ="result="+ myclac(Number1, Number2, operator);
  
    test.innerHTML ="تجربة ممتعة";
    test2.innerHTML="";
  };