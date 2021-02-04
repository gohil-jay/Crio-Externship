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
