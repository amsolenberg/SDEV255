document.addEventListener('DOMContentLoaded', function () {
  let textareaElement = document.getElementById('studentName');

  function countChars(event) {
    document.getElementById('stringLength').innerHTML = event.target.value.length;
  }

  /* Your solution goes here */
  textareaElement.addEventListener('focus', countChars);
});
