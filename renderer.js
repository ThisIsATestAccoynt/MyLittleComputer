
window.addEventListener('DOMContentLoaded', () => {
  const factText = document.getElementById('fact-text');
  const osSelect = document.getElementById('os-select');
  const logoUpload = document.getElementById('logo-upload');
  const assistantAvatar = document.getElementById('assistant-avatar');
  const closeBtn = document.getElementById('close-btn');
  const welcomeContainer = document.getElementById('welcome-container');
  const settingsContainer = document.getElementById('settings-container');
  const assistantContainer = document.getElementById('assistant-container');
  const welcomeOsSelect = document.getElementById('welcome-os-select');
  const saveOsBtn = document.getElementById('save-os-btn');

  let selectedOs = window.api.get('selectedOs');
  let factInterval;

  function updateFact() {
    factText.innerText = window.api.getRandomFact(selectedOs);
  }

  function startFactInterval() {
    // Clear any existing interval
    if (factInterval) {
      clearInterval(factInterval);
    }
    // Start a new interval
    factInterval = setInterval(updateFact, 10000); // 10 seconds
  }

  function showMainApp() {
    welcomeContainer.classList.add('hidden');
    settingsContainer.classList.remove('hidden');
    assistantContainer.classList.remove('hidden');
    osSelect.value = selectedOs;
    updateFact();
    startFactInterval();
  }

  if (selectedOs) {
    showMainApp();
  } else {
    assistantContainer.classList.add('hidden');
    welcomeContainer.classList.remove('hidden');
  }

  saveOsBtn.addEventListener('click', () => {
    selectedOs = welcomeOsSelect.value;
    window.api.set('selectedOs', selectedOs);
    showMainApp();
  });

  osSelect.addEventListener('change', () => {
    selectedOs = osSelect.value;
    window.api.set('selectedOs', selectedOs);
    updateFact();
    startFactInterval(); // Restart interval with new OS
  });

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

  closeBtn.addEventListener('click', () => {
    window.api.closeApp();
  });
});
