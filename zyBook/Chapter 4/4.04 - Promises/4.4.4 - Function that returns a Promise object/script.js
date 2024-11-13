function saveToCloudAsync(userData) {
    return new Promise(function(resolve, reject) {
        if (!userData) {
            reject();
        }

        // Simulate saving taking 2 seconds
        setTimeout(resolve, 2000);
    });
}