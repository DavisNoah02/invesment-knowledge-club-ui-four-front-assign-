// membership card toggle logic

function toggleMembership(id) {
  const card = document.getElementById(id + '-card');

  if (card.classList.contains('active')) {
    card.classList.remove('active');
    return;
  }

  const allCards = document.querySelectorAll('.membership-card');
  allCards.forEach(function(c) {
    c.classList.remove('active');
  });

  card.classList.add('active');
}

// keyboard accessibility for membership cards
document.querySelectorAll('.membership-card').forEach(function(card) {
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');

  card.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      card.click();
    }
  });
});

