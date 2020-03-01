document.querySelector('h2').onclick = function() {
    alert('This is h2 subhead');
}

// change pic
let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/tufts-university-logo-C22B1DB618-seeklogo.com.png') {
      myImage.setAttribute('src', 'images/384-3849208_proven-reliability-for-hundreds-of-teams-nationwide-tufts.png');
    } else {
      myImage.setAttribute('src', 'images/tufts-university-logo-C22B1DB618-seeklogo.com.png');
    }
}

// welcome info
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name:');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Hello! ' + myName;
  }
}

// initialize page
if(!localStorage.getItem('name')) {
    setUserName();
}else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Hello! ' + storedName;
  }


// set button click function
myButton.onclick = function() {
   setUserName();
}
