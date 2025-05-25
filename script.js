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