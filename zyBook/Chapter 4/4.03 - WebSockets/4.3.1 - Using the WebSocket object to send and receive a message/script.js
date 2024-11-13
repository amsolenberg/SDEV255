let url = "wss://echo.websocket.events/";
let websocket = new WebSocket(url);

websocket.onopen = function() {
    displayMessage("Connected");
    websocket.send("Hello, WebSockets!");
};

websocket.onclose = function() {
    displayMessage("Disconnected");
};

websocket.onmessage = function(e) {
    displayMessage(e.data);
};

setTimeout(function() {
    websocket.close()
}, 2000);

function displayMessage(message) {
    let para = document.createElement("p");
    para.innerHTML = message;
    document.getElementById("output").appendChild(para);
}