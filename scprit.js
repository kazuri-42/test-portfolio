document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the form from refreshing the page
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert(`Thank you, ${name}! Your message has been received.`);
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
  });
