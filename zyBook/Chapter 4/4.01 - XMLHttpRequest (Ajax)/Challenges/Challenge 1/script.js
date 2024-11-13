// Store a new XMLHttpRequest objevt in the xhr variable, then assign responseHandler function as the "load" event listener.

function responseHandler() {
    console.log("handling response: " + this.responseText);
}

let xhr = new XMLHttpRequest();

xhr.addEventListener("load", responseHandler);