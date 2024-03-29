const formatOperand = (operand) => {
    const INTEGER_FORMATTER = new Intl.NumberFormat("en-us", {
        maximumFractionDigits: 0,
      })

    if(operand == null) {
        return 
    }

    const [integer, decimal] = operand.split('.')
    if(decimal == null) {
        return INTEGER_FORMATTER.format(integer);
    }

    return `${INTEGER_FORMATTER.format(integer)}.${decimal}`
};

export default formatOperand;