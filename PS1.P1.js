const reverseOrder = w =>
{
    let s = w.split('').sort().reverse().join('');
    return s;
}

module.exports = {reverseOrder}

/*
console.log(`Reverse alphabetical order is:  ${reverseOrder('supercalifragilisticexpialidocious')}`);
*/
