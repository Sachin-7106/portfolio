// Toggle Dark Mode
document.getElementById('themeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Auto update year
document.getElementById('year').textContent = new Date().getFullYear();
