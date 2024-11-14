// let url = "https://randomuser.me/api/?results=3";
// let response = await fetch(url);
// let users = await response.json();
// for (let user of users.results) {
//     console.log(`name = ${user.name.first} ${user.name.last}`);
//     console.log(`gender = ${user.gender}`);
//     console.log(`email = ${user.email}`);
// }

let url = 'https://randomuser.me/api/?results=3';
fetch(url)
    .then(function (response) {
        console.log(`status is ${response.status}`);
        return response.json();
    })
    .then(function (data) {
        // console.log(data.results);
        data.results.forEach((user) => {
            console.log(`name = ${user.name.first} ${user.name.last}`);
            console.log(`gender = ${user.gender}`);
            console.log(`email = ${user.email}`);
        });
    })
    .catch(function (error) {
        console.log('Request failed', error);
    });
