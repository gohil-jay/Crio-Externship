function evenNumbers(n) {
    var ans = [];
    for (let i=0; i<n+1; i++) {
        if(i % 2 == 0) {
            ans.push(i);
        }
    }
    return ans;
}
module.exports = evenNumbers;
