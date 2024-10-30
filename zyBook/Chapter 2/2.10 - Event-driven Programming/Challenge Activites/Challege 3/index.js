document.addEventListener("DOMContentLoaded", function() {
    let aElement = document.getElementsByTagName("a")[0];

    function changeColor(event) {
        this.style.color = "blue";
    }

    aElement.addEventListener("mouseover", changeColor);
})