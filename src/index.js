module.exports = function reverse(n) {
    const stNum = Math.abs(n).toString();
    let revNum = "";
    for (let i = stNum.length - 1; i >= 0; i--) {
        revNum += stNum[i];
    }
    return +revNum;
};
