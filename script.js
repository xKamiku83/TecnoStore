<script>
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    const errorMessage = document.getElementById('form-error');

    form.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const comment = document.getElementById('comment').value.trim();

        if (name === '' || email === '' || comment === '') {
            event.preventDefault();
            errorMessage.style.display = 'block';
        } else {
            errorMessage.style.display = 'none';
        }
    });

    form.addEventListener('input', function() {
        errorMessage.style.display = 'none';
    });
});

<script>
  let fontSize = 16;
  function changeFontSize(delta) {
    fontSize += delta;
    document.documentElement.style.fontSize = `${fontSize}px`;
  }
</script>

document.addEventListener('DOMContentLoaded', () => {
  const endDate = new Date('2025-05-26T00:00:00').getTime();

  const updateCounter = () => {
    const now = new Date().getTime();
    const timeLeft = endDate - now;

    if (timeLeft <= 0) {
      clearInterval(interval);
      document.querySelector('.counter').innerHTML = '<p>¡El Hot Sale 2025 ha comenzado!</p>';
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
  };

  updateCounter();
  const interval = setInterval(updateCounter, 1000);
});