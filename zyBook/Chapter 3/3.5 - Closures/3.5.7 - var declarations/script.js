var funcsArr = [null,null,null];

function createArr() {
    for (var i = 0; i < 3; i++) {
        var iSquared = i * i;
        funcsArr[i] = function() {
            console.log(iSquared);
        };
    }
}

createArr();
for (var func of funcsArr) {
    func();
}