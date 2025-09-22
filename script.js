// Part 1: Event Handling

// Click button -> show message
const clickBtn = document.getElementById("clickMeBtn");
const message = document.getElementById("message");

clickBtn.addEventListener("click", () => {
  message.textContent = "🎉 You clicked the button!";
});

// Part 2: Interactive Elements

// Light/Dark mode toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// Counter game
let count = 0;
const countDisplay = document.getElementById("count");
document.getElementById("increase").addEventListener("click", () => {
  count++;
  countDisplay.textContent = count;
});
document.getElementById("decrease").addEventListener("click", () => {
  count--;
  countDisplay.textContent = count;
});

// FAQ accordion
const faqQuestions = document.querySelectorAll(".faq-question");
faqQuestions.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
    const answer = btn.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// Part 3: Form Validation
const form = document.getElementById("signupForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const formMessage = document.getElementById("formMessage");

function showError(input, message) {
  const errorElement = input.nextElementSibling;
  errorElement.textContent = message;
}

function clearError(input) {
  const errorElement = input.nextElementSibling;
  errorElement.textContent = "";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  // Name validation: at least 2 characters
  if (nameInput.value.trim().length < 2) {
    showError(nameInput, "Name must be at least 2 characters");
    isValid = false;
  } else {
    clearError(nameInput);
  }

  // Email validation with regex
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(emailInput.value)) {
    showError(emailInput, "Enter a valid email address");
    isValid = false;
  } else {
    clearError(emailInput);
  }

  // Password validation: min 6 chars
  if (passwordInput.value.length < 6) {
    showError(passwordInput, "Password must be at least 6 characters");
    isValid = false;
  } else {
    clearError(passwordInput);
  }

  // Final result
  if (isValid) {
    formMessage.textContent = "Form submitted successfully!";
    formMessage.style.color = "green";
    form.reset();
  } else {
    formMessage.textContent = " Please fix the errors above.";
    formMessage.style.color = "red";
  }
});
