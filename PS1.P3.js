const func = (s, f) => f(s);

let f1 = func('supercalifragilisticexpialidocious', w => {
    let r = w.replace(/c/g,'zc');
    let output = r.split('z');
    console.log(output);
    return output;
})

let f2 = func('supercalifragilisticexpialidocious', w => {
    let mod_str = w.replace(/a/g, 'A');
    let count = (mod_str.match(/A/g)).length;
    const object = {
        originalString: w,
        modifiedString: mod_str,
        numberReplaced: count,
        length: mod_str.length
    }
    console.log(object);
    return object
})

module.exports = {func, f1, f2}

/*
console.log(f1)
console.log(f2)
 */

