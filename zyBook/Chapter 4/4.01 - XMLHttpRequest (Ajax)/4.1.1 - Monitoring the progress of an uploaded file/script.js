function uploadProgressHandler(event) {
    if (event.lengthComputable) {
        console.log(event.loaded + " bytes uploaded out of " + event.total + " bytes total.");
    }
}

let file = document.getElementById("file_widget").files[0];
let xhr = new XMLHttpRequest();
xhr.upload.addEventListener("progress", uploadProgressHandler);
xhr.open("POST", "https://www.example.org/example.html");
xhr.setRequestHeader("Content-Type", file.type);
xhr.send(file);