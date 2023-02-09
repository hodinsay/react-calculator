const evaluate = ({ currentOperand, previousOperand, operation }) => {
    const prev = parseFloat(previousOperand)
    const current = parseFloat(currentOperand)
  
    if (isNaN(prev) || isNaN(current)) {
      return "";
    }
  
    let computaion = ""
  
    switch(operation) {
      case "+":
        computaion = prev + current
        break
      case "-":
        computaion = prev - current
        break 
      case "*":
        computaion = prev * current
        break 
      case "÷":
        computaion = prev/current
        break
      default:
        console.log('Sorry, limited operations!')
    }
  
    return computaion.toString()
};

export default evaluate;