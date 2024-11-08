function demoFunc3() {
    let value = "Initial string value";
    const localFunc = function() {
        console.log(value);
    };

    localFunc();
    value = "Modified string value";
    return localFunc;
}

let showValue = demoFunc3();
showValue();