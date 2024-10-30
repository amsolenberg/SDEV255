let list = document.getElementById('strikeList');

// Register handler for event bubbling phase
list.addEventListener('mouseover', function (e) {
    e.target.style.color = 'red';
  }
);

// Register handler for event capturing phase
list.addEventListener('mouseout', function (e) {
    e.target.style.color = 'black';
  }, true
);
