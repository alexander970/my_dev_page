document.addEventListener("DOMContentLoaded", function () {
  var darkmode = false; 

  const darkModeToggle = document.getElementById("darkModeToggle");
  const navbar = document.getElementsByClassName("navbar")[0];
  const footer = document.getElementsByClassName("footer-section")[0];

  // Check the user's preference for dark mode from local storage
  const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const storedDarkMode = JSON.parse(localStorage.getItem("darkMode"));

  // Set the initial mode based on user preference or stored value
  document.body.classList.toggle("dark-mode", storedDarkMode ?? prefersDarkMode);
  darkmode = storedDarkMode ?? prefersDarkMode;

  function toggleDarkModeStyles() {
    if (darkmode === true) {
      darkModeToggle.classList.remove("bi-moon-fill");
      darkModeToggle.classList.add("bi-brightness-high-fill");
      
      navbar.classList.remove('navbar-light');
      navbar.classList.remove('bg-light');
      navbar.classList.add('navbar-dark');
      navbar.classList.add('bg-dark');

      footer.classList.remove('bg-light');
      footer.classList.add('bg-dark');
    } else {
      darkModeToggle.classList.remove("bi-brightness-high-fill");
      darkModeToggle.classList.add("bi-moon-fill");

      navbar.classList.remove('navbar-dark');
      navbar.classList.remove('bg-dark');
      navbar.classList.add('navbar-light');
      navbar.classList.add('bg-light');

      footer.classList.remove('bg-dark');
      footer.classList.add('bg-light');
    }
  }

  toggleDarkModeStyles();

  // Listen for changes to the dark mode switch and update the mode
  darkModeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    darkmode = !darkmode;

    toggleDarkModeStyles();

    localStorage.setItem("darkMode", darkmode);
  });

  const textElement = document.getElementById("text");
  const text = textElement.textContent.trim();

  textElement.textContent = "";

  let charIndex = 0;

  function type() {
    if (charIndex < text.length) {
      textElement.textContent += text.charAt(charIndex);
      charIndex++;
      setTimeout(type, 50);
    }
  }

  type();
});
