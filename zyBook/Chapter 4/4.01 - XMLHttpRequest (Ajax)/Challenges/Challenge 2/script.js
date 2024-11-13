// Using the xhr variable, initialize a connection to GET https://wp.zybooks.com/todos.php?day=Monday,
//  set the response type to json, then send the request.

function responseReceivedHandler() {
    console.log("Reponse received");
}

let xhr = new XMLHttpRequest();
xhr.addEventListener("load", responseReceivedHandler);

xhr.open("GET", "https://wp.zybooks.com/todos.php?day=Monday");
xhr.responseType = "json";
xhr.send();