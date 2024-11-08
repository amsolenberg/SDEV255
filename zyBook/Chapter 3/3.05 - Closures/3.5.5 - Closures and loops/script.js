let funcsArr = [null,null,null];

function createArr() {
    for (let i = 0; i < funcsArr.length; i++) {
        const iSquared = i * i;
        funcsArr[i] = function() {
            console.log(iSquared);
        };
    }
}

createArr();
for (let func of funcsArr) {
    func();
}
