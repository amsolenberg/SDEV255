function loadFromCloudAsync(filename) {
    return new Promise(function(resolve, reject) {
        if (filename === "Hello.txt") {
            // Simulate loading taking 2 seconds
            setTimeout(() => resolve("Hello World!"), 2000);
        } else {
            reject(new Error("File does not exist"));
        }
    });
}

function loadString(filename) {
    let promise = loadFromCloudAsync(filename);
    promise.then(dataLoaded, loadFailed);
}

function dataLoaded(value) {
    console.log("data loaded from cloud: " + value);
}

function loadFailed(reason) {
    console.error(reason.toString());
}