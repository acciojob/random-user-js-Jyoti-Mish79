//your code here
const userPhoto = document.getElementById("user-photo");
const userName = document.getElementById("user-name");
const ageBtn = document.querySelector("button[data-attr='age']");
const emailBtn = document.querySelector("button[data-attr='email']");
const phoneBtn = document.querySelector("button[data-attr='phone']");
const ageInfo = document.getElementById("age");
const emailInfo = document.getElementById("email");
const phoneInfo = document.getElementById("phone");
const additionalInfo = document.getElementById("additional-info");
const getUserBtn = document.getElementById("getUser");

let user;

// Get a random user and display their name and photo
async function getRandomUser() {
  const response = await fetch("https://randomuser.me/api/?inc=name,picture,email,phone,dob&nat=us&noinfo");
  const data = await response.json();
  user = data.results[0];
  userPhoto.src = user.picture.large;
  userName.textContent = `${user.name.first} ${user.name.last}`;
}

// Display the user's age
function displayAge() {
  ageInfo.textContent = `Age: ${user.dob.age}`;
  emailInfo.textContent = "";
  phoneInfo.textContent = "";
  additionalInfo.style.display = "block";
}

// Display the user's email
function displayEmail() {
  ageInfo.textContent = "";
  emailInfo.textContent = `Email: ${user.email}`;
  phoneInfo.textContent = "";
  additionalInfo.style.display = "block";
}

// Display the user's phone number
function displayPhone() {
  ageInfo.textContent = "";
  emailInfo.textContent = "";
  phoneInfo.textContent = `Phone: ${user.phone}`;
  additionalInfo.style.display = "block";
}

// Get a new random user and reset the additional info section
function getNewUser() {
  getRandomUser();
  ageInfo.textContent = "";
  emailInfo.textContent = "";
  phoneInfo.textContent = "";
  additionalInfo.style.display = "none";
}

getRandomUser();

ageBtn.addEventListener("click", displayAge);
emailBtn.addEventListener("click", displayEmail);
phoneBtn.addEventListener("click", displayPhone);
getUserBtn.addEventListener("click", getNewUser);
