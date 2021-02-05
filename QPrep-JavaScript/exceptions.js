//Try catch exceptions

function errorHandler(x) {
    a = getX(x);
    return a;
}

function getX(x) {
    if(x == 5) {
        return new Error("Error Occured");
    }
    return x;
}

module.exports = errorHandler;

// Throw exceptions

function isAlphabet(X) {
    if( X.toUpperCase() != X.toLowerCase() )
    {
        return 'Yes';
    }
    else
    {
        throw 'Not Alphabet';
    }
};

module.exports = isAlphabet;
