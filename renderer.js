const { getRandomFact } = require('./facts');

window.addEventListener('DOMContentLoaded', () => {
  const factText = document.getElementById('fact-text');
  const osSelect = document.getElementById('os-select');
  const logoUpload = document.getElementById('logo-upload');
  const assistantAvatar = document.getElementById('assistant-avatar');

  function updateFact() {
    const selectedOs = osSelect.value;
    factText.innerText = getRandomFact(selectedOs);
  }

  // Initial fact
  updateFact();

  osSelect.addEventListener('change', updateFact);

  logoUpload.addEventListener('change', () => {
    const file = logoUpload.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        assistantAvatar.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  });
});
