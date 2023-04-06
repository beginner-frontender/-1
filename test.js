const box = document.querySelector(".container");

// Добовление котиков
const user = "beginner-frontender";
const path = `https://cats.petiteweb.dev/api/single/${user}`;

fetch(path + "/show")
    .then(function(res) {
        console.log(res);
        if (res.statusText === "OK") {
            return console.log( res.json());
        }
    })
    .then(function(data) {
        console.log(data)
        
    })