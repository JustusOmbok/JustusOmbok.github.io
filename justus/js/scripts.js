/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

<script>
    document.addEventListener("DOMContentLoaded", function() {
        // Get the form element
        const form = document.getElementById("contactForm");

        // Add event listener to the form submission
        form.addEventListener("submit", function(event) {
            // Prevent the default form submission behavior
            event.preventDefault();

            // Get form data
            const formData = new FormData(form);

            // Construct the email message
            const emailMessage = `
                Name: ${formData.get("name")}
                Email: ${formData.get("email")}
                Phone: ${formData.get("phone")}
                Message: ${formData.get("message")}
            `;

            // Send the email using a suitable method (e.g., fetch API)
            // Replace the following code with your actual email sending logic
            fetch("mailto:ombokjustus@gmail.com", {
                method: "POST",
                body: emailMessage,
            })
            .then(response => {
                if (response.ok) {
                    // Show success message
                    document.getElementById("submitSuccessMessage").classList.remove("d-none");
                    // Optionally, reset the form
                    form.reset();
                } else {
                    // Show error message
                    document.getElementById("submitErrorMessage").classList.remove("d-none");
                }
            })
            .catch(error => {
                // Show error message
                document.getElementById("submitErrorMessage").classList.remove("d-none");
            });
        });
    });
</script>