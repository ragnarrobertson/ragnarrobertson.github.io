const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/french-bulldog-1.jpg") {
    myImage.setAttribute("src", "images/french-bulldog-2.jpeg");
  } else {
    myImage.setAttribute("src", "images/french-bulldog-1.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const userName = prompt("Please enter your name.");
  if (!userName) {
    setUserName
  } else {
    localStorage.setItem("name", userName);
    myHeading.textContent = `Welcome to the Frnch Connection ${userName}!`;
  }
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Welcome to the Frnch Connection ${storedName}!`;
}

myButton.onclick = () => {
  setUserName();
};

