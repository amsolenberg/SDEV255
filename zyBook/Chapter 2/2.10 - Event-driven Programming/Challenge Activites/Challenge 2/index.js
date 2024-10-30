document.addEventListener("DOMContentLoaded", function() {
    let h3Element = document.getElementsByTagName("h3")[0];

    function fireEvent(event) {
        console.log("Event fired");
    }

    h3Element.addEventListener('mouseover', fireEvent);
})