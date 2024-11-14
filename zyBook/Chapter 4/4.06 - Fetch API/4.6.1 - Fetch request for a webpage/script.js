// let url = 'https://learn.zybooks.com/';
// let response = await fetch(url);
// console.log('status is ' + response.status);

// let html = await response.text();
// console.log(html);

// Alternative syntax
let url = 'https://learn.zybooks.com/';
fetch(url)
    .then(function (response) {
        console.log(`status is ${response.status}`);
        return response.text();
    })
    .then(function (html) {
        console.log(html);
    })
    .catch(function (error) {
        console.log('Request failed', error);
    });
