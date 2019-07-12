function forloop(value, condition, update, result) {
    let i = value;
    let condcheck = ((val) => {
        console.log('condition', val);
        // if (val[1] === '<') {
        //     if (i <= 0) return false;
        //     return true;
        // }
    })(condition);
    update = (...val) => {
        console.log('update', val[1]);
        if (val[1] === '-')
            return (i = i - 1);
        return (i = i + 1);
    }
    result = (...val) => {
        console.log('result', val[2]);
        if (val[2] === 'log')
            console.log(val);
    }
    // while (i != 0) {
    //     let con = condition.bind(this, i)();
    //     if (con) {
    //         i = update.bind(this, i)();
    //         result.bind(this, i)();
    //     }
    // }
}

let loop = new forloop(3, 'n > 0', 'n - 1', 'console.log');