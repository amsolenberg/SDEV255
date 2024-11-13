async function loadFromCloudAsync(filename) {
    if (filename === 'Hello.txt') {
        return 'Hello World!';
    } else {
        throw Error('File does not exist');
    }
}

function dataLoaded(value) {
    console.log('Data loaded: ' + value);
}

function loadFailed(reason) {
    console.error(reason.toString());
}

let filename = 'Hello.txt';

loadFromCloudAsync(filename);
