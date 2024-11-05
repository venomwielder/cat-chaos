let score = 0;

// Function to "knock off" an item
function knockOff(item) {
  if (!item.classList.contains('knocked-off')) {
    item.classList.add('knocked-off');
    score += 10;
    document.getElementById('score').innerText = score;
  }
}

// Function to reset the game
function resetGame() {
  score = 0;
  document.getElementById('score').innerText = score;
  
  const items = document.querySelectorAll('.item');
  items.forEach(item => {
    item.classList.remove('knocked-off');
  });
}
