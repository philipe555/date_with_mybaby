const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const proposalStep = document.getElementById('questionCard');
const successStep = document.getElementById('successCard');
// Make the "No" button dodge the mouse/touch
function moveNoButton() {
  const x = Math.random() * (window.innerWidth - noBtn.offsetWidth - 40);
  const y = Math.random() * (window.innerHeight - noBtn.offsetHeight - 40);
  
  noBtn.style.position = 'fixed';
  noBtn.style.left = `${x}px`;
  noBtn.style.top = `${y}px`;
}

noBtn.addEventListener('mouseover', moveNoButton);
noBtn.addEventListener('touchstart', moveNoButton);

// Show message when "Yes" is clicked
yesBtn.addEventListener('click', () => {
  proposalStep.classList.add('hidden');
  successStep.classList.remove('hidden');
});
