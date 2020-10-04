const evaluate = expression =>
{
    const left = expression[0];
    const right = expression[2];
    const operation = expression[1];
    switch(operation)
    {
        case '+':
            return (parseInt(left) + parseInt(right));
            break;
        case '-':
            return (parseInt(left) - parseInt(right));
            break;
        case '*':
            return (parseInt(left) * parseInt(right));
            break;
        case '/':
            return (right === null) ? null : (parseInt(left) / parseInt(right));
            break;
        case '^':
            return (parseInt(left) ** parseInt(right));
            break;
    }
}
const eval = expression => {
    let operator = evaluate(expression);
    console.log(`${expression} = ${operator}`);
    return operator;
}

module.exports = {evaluate,eval}

/*
console.log(`${'4+2'} = ${evaluate('4+2')}`);
console.log(`${'5*7'} = ${evaluate('5*7')}`);
console.log(`${'6-1'} = ${evaluate('6-1')}`);
console.log(`${'9/2'} = ${evaluate('9/2')}`);
console.log(`${'2^8'} = ${evaluate('2^8')}`);
 */