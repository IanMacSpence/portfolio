document.addEventListener("DOMContentLoaded", function() {

  // Function to handle form submission
  function handleFormSubmission(event) {
    event.preventDefault(); // Prevent default form submission

    const form = document.getElementById('contactForm');
    const formData = new FormData(form);
    const submitButton = form.querySelector('.submitting');
    const waitText = 'Submitting...';
    const formMessageWarning = document.getElementById('form-message-warning');
    const formMessageSuccess = document.getElementById('form-message-success');

    // Show submitting text
    submitButton.style.display = 'block';
    submitButton.textContent = waitText;

    // Fetch API to submit the form data
    fetch('/', {
      method: 'POST',
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString()
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.text();
    })
    .then(data => {
      if (data === 'OK') {
        formMessageWarning.style.display = 'none';
        setTimeout(() => form.style.display = 'block', 1000);
        setTimeout(() => formMessageSuccess.style.display = 'block', 1400);

        setTimeout(() => {
          formMessageSuccess.style.display = 'none';
          submitButton.style.display = 'none';
          submitButton.textContent = waitText;
          form.reset(); // Reset the form fields
        }, 8000);
      } else {
        formMessageWarning.textContent = data;
        formMessageWarning.style.display = 'block';
        submitButton.style.display = 'none';
      }
    })
    .catch(error => {
      formMessageWarning.textContent = "Something went wrong. Please try again.";
      formMessageWarning.style.display = 'block';
      submitButton.style.display = 'none';
    });
  }

  // Attach the event handler if the form exists
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmission);
  }
});

// document.getElementById('contactForm').addEventListener('submit', function(event) {
//   event.preventDefault();

//   let formData = new FormData(this);

//   fetch('/', {
//       method: 'POST',
//       headers: { "Content-Type": "application/x-www-form-urlencoded" },
//       body: new URLSearchParams(formData).toString()
//   })
//   .then(() => {
//       document.getElementById('thankYouModal').style.display = 'block';
//       // You can also use JavaScript to add more complex modal behavior
//   })
//   .catch((error) => console.error('Error:', error));
// });
