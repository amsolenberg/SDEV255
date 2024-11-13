async function loadDataAsync(filename) {
    console.log('Loading data...');
    let data = await loadFromCloudAsync(filename);
    console.log(`Data loaded: ${data}`);
}

async function loadDataAsync(filename) {
    console.log('Loading data...');
    try {
        let data = await loadFromCloudAsync(filename);
        console.log(`Data loaded: ${data}`);
    } catch (exception) {
        console.log(exception.toString());
    }
}
