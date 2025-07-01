var  sidenav = document.querySelector(".side-navbar")


function showNavbar()
{
    sidenav.style.left = "0%"
}

function closeNavbar(){
    sidenav.style.left = "-60%"

}

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();
  const responseMessage = document.getElementById("responseMessage");

  // Simple validation
  if (!name || !email || !subject || !message) {
    responseMessage.style.color = "red";
    responseMessage.textContent = "Please fill in all fields.";
    return;
  }

  // Simulate success
  responseMessage.style.color = "green";
  responseMessage.textContent = "Your message has been sent successfully!";
  
  // Clear form
  document.getElementById("contactForm").reset();
});


