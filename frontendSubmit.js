document.getElementById("contact-form").addEventListener("submit", async (event) => {
  event.preventDefault(); //Prevent page reload
  
  const form = event.target; //Reference to the form
  const formData = {
    fullName: form.fullName.value,
    email: form.email.value,
    mobile: form.mobile.value,
    subject: form.subject.value,
    message: form.message.value,
  };
  localStorage.setItem('formData', JSON.stringify(formData));

  console.log(formData);

  try {
    const response = await fetch("http://localhost:3000/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    if (response.ok) {

      alert(result.message || "Form submitted successfully!");
     localStorage.removeItem('formData');

      

    } else {
      alert("Error: " + (result.error || "Failed to submit the form."));
    }
  } catch (error) {
    alert("Failed to submit form: " + error.message);
  }
});
