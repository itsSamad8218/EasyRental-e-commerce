// Modal functionality
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.querySelector(".close");

btn.onclick = () => modal.style.display = "block";
span.onclick = () => modal.style.display = "none";
window.onclick = (e) => {
  if (e.target == modal) modal.style.display = "none";
};

const sliderImages = [
  "images/image4.jpg",
  "images/image8.jpg",
  "images/image9.jpg",
  "images/image10.jpg",
  "images/image11.jpg",
  "images/image12.jpg",
  "images/image13.jpg",
  "images/image14.jpg",
];
let currentImg = 0;

const sliderImg = document.getElementById("sliderImg");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

if (sliderImg && prevBtn && nextBtn) {
  prevBtn.onclick = function() {
    currentImg = (currentImg - 1 + sliderImages.length) % sliderImages.length;
    sliderImg.src = sliderImages[currentImg];
  };
  nextBtn.onclick = function() {
    currentImg = (currentImg + 1) % sliderImages.length;
    sliderImg.src = sliderImages[currentImg];
  };
} 

// Property Form
const propertyForm = document.getElementById("propertyForm");
if (propertyForm) {
  propertyForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Property listed successfully!");
    window.location.href = 'index.html';
  });
}

// Login Form
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Login successful!");
    window.location.href = 'index.html';
  });
}

// Signup Form
const signupForm = document.getElementById('signupForm');
if (signupForm) {
  signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Account created successfully!');
    window.location.href = 'index.html';
  });
}

 //View Details buttons
 const viewDetailsBtns = document.querySelectorAll(".viewDetails");
viewDetailsBtns.forEach(btn => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = 'costomize.html';
  });
});

// Contact Owner button
const contactOwnerBtn = document.getElementById("contactOwner");
if (contactOwnerBtn) {
  contactOwnerBtn.addEventListener("click", () => {
    alert("Login to contact the owner");
  });
}

// costomize form
const submitBtn = document.getElementById("submit");
if (submitBtn) {
  submitBtn.addEventListener("click", () => {
    alert("Login to contact the owner");
  });
}


    