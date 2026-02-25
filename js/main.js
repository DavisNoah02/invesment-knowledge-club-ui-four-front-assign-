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

// animate count for stats
function animateCount(el, target, duration) {
  let start = 0;
  const step = Math.ceil(target / (duration / 16));

  const timer = setInterval(function() {
    start += step;
    if (start >= target) {
      el.textContent = target;
      clearInterval(timer);
    } else {
      el.textContent = start;
    }
  }, 16);
}

window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.stat-score').forEach(function(el) {
    const finalValue = parseInt(el.textContent, 10);
    el.textContent = '0';
    animateCount(el, finalValue, 800);
  });
});