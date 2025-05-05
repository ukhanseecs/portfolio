// Minimal JS to copy email and show confirmation
// Applies only to the Contact page if the elements exist

document.addEventListener('DOMContentLoaded', function() {
  var btn = document.getElementById('copy-email');
  var confirmation = document.getElementById('copy-confirmation');
  if (btn && confirmation) {
    var email = btn.textContent;
    btn.addEventListener('click', function() {
      navigator.clipboard.writeText(email).then(function() {
        confirmation.textContent = 'Copied!';
        setTimeout(function() { confirmation.textContent = ''; }, 1500);
      });
    });
  }
});
