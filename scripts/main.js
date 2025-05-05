// Minimal JS to copy email and show confirmation
// Applies only to the Contact page if the elements exist

document.addEventListener('DOMContentLoaded', function() {
  var emailElem = document.getElementById('copy-email');
  var confirmation = document.getElementById('copy-confirmation');
  if (emailElem && confirmation) {
    var email = emailElem.textContent.trim();
    function copyEmail() {
      navigator.clipboard.writeText(email).then(function() {
        confirmation.textContent = 'copied!';
        emailElem.setAttribute('aria-label', 'email copied to clipboard');
        setTimeout(function() {
          confirmation.textContent = '';
          emailElem.setAttribute('aria-label', 'copy email address');
        }, 1500);
      });
    }
    emailElem.addEventListener('click', function(e) {
      e.preventDefault();
      copyEmail();
    });
    emailElem.addEventListener('keydown', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        copyEmail();
      }
    });
  }
});
