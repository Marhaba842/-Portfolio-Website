const toggleThemeBtn = document.getElementById('toggleThemeBtn');
const body = document.body;
const statusMessage = document.getElementById('statusMessage');

function toggleTheme() {
  if (body.classList.contains('dark-mode')) {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    statusMessage.textContent = "You are in Light Mode now!";
  } else {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
    statusMessage.textContent = "You are in Dark Mode now!";
  }
}
toggleThemeBtn.addEventListener('click', toggleTheme);
