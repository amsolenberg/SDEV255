function loadData(filename) {
    console.log('Loading data...');
    let promise = loadFromCloudAsync(filename);
    promise.then(function (data) {
        console.log('Data loaded: ' + data);
    });
}

// or

async function loadDataAsync(filename) {
    console.log('Loading data...');
    let data = await loadFromCloudAsync(filename);
    console.log('Data loaded: ' + data);
}
