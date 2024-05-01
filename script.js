const form = document.getElementById("submitForm");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page

  // Get form data
    const formData = {
    mobile: form.elements.mobile.value,
    password: form.elements.password.value,
    };

  // Log form data to the browser console
    console.log("Form Data:", formData);

  // Reset the form
    form.reset();
});

