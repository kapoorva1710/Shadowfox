document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#contact-form");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); 

    const name = form.querySelector("input[type='text']").value;
    const email = form.querySelector("input[type='email']").value;
    const message = form.querySelector("textarea").value;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    form.reset(); 

    alert("Thank you, " + name + "! Your message has been sent successfully.");
  });
});
