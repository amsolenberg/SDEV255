// If the response object's success property is true, log the first todo item from the response to
//  the console. Otherwise, log the error from the response to the console. Hint: this.response
//  is the response.

function responseReceivedHandler() {
    /* Successful request:
        {
            "success": true,
            "todos": [ '...', '...', ... ]
        }

        Unsuccessful request:
        {
            "success": false,
            "error": "..."
        } */

    if (this.response) {
        if (this.response.success) {
            console.log(this.response.todos[0]);
        } else {
            console.log(this.response.error);
        }
    } else {
        console.log("No response received.")
    }
}

let xhr = new XMLHttpRequest();
xhr.responseType = "json";
xhr.addEventListener("load", responseReceivedHandler);
xhr.open("GET", "https://wp.zybooks.com/todos.php?day=Monday");
xhr.send();