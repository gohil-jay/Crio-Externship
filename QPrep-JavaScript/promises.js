function getLastNames(firstName, people) {
    let arr = [];
    for(var i=0; i< people.length; i++)
    {
        if(people[i].firstName === firstName)
        {
            arr.push(people[i].lastName);
        }
    }
    arr.sort();
    let y = new Promise((resolve,reject) => {
        if(arr.length > 0)
        {
            resolve(arr);
        }
        else
        {
            reject('Invalid');
        }
    })
    return y;
}

module.exports = getLastNames;
