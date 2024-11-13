// Log "successful" to the console if the response's status is 200. 
//  Otherwise, log "not successful" to the console.

function responseReceivedHandler() {
    if (this.status === 200) {
        console.log("successful");
    } else {
        console.log("not successful");
    }
}

let xhr = new XMLHttpRequest();
xhr.addEventListener("load", responseReceivedHandler);
xhr.addEventListener("error", responseReceivedHandler);
xhr.open("GET", "https://wp.zybooks.com/weather.php?zip=90210");
xhr.send();