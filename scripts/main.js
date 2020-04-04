// Image switcher code

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/sea-turtle-1.webp') {
        myImage.setAttribute('src','images/sea-turtle-2.jpg');
    } else if (mySrc === 'images/sea-turtle-2.jpg') {
        myImage.setAttribute('src','images/sea-turtle-3.jpg');
    } else {
        myImage.setAttribute('src','images/sea-turtle-1.webp');
    }
}

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Swim for your life, ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Swim for your life, ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}