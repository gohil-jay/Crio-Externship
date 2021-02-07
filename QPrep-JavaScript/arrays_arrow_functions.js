let modify = (array) => {
    for(let i = 0; i < array.length; i++) {
        var flag = 0;
        for(let j = 2; j <= array[i] / 2; j++)  {
            if (array[i] % j == 0) {
                flag = 1;
                break;
            }
        }
        if(array[i] !== 0)
        {
            if (flag == 0) array[i] += 1;
            else array[i] *= 2;
        }
    }
    return array;
}

module.exports = modify;
