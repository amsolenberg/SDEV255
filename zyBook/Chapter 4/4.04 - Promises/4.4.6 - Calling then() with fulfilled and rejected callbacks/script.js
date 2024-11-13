function saveUserData(data) {
    let promise = saveToCloudAsync(data);
    promise.then(dataSaved, saveFailed);
}

function dataSaved() {
    console.log("Data saved to cloud!");
}

function saveFailed() {
    console.error("Failed to save data to cloud");
}