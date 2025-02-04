// Select elements
const meanToggle = document.querySelector(".mean-toggle");
const navMenu = document.querySelector("nav");
const overlay = document.createElement("div");

// Create an overlay element
overlay.className = "overlay";
document.body.appendChild(overlay);

// Toggle navigation menu
const toggleMenu = () => {
    navMenu.classList.toggle("active");
    meanToggle.classList.toggle("active");
    overlay.classList.toggle("active");
};

// Add event listeners
if (meanToggle) {
    meanToggle.addEventListener("click", toggleMenu);
}

// Close menu when overlay is clicked
overlay.addEventListener("click", toggleMenu);




function updateContent(title, description) {
    document.getElementById('grant-title').textContent = title;
    document.getElementById('grant-description').textContent = description;
  }
  