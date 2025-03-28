'use strict';

main();

function main() {
    otworzInstagram();
    loader();
}

function otworzInstagram() {
    window.location = 'https://www.instagram.com/';
}

function loader() {
    const loader = document.querySelector('#loader');
    for (let i = 0; i < 12; i++) {
        const line = document.createElement("span");
        loader.appendChild(line);
    }
}
