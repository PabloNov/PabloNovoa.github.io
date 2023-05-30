const messages = [
  "Welcome to my personal portfolio website",
  "Check Out My Work",
  "Explore my skills and expertise",
  "Contact Me for Future Collaboration",
];

const dynamicText = document.getElementById('dynamic-text');
let index = 0;

function rotateText() {
  dynamicText.textContent = messages[index];
  index = (index + 1) % messages.length;
}
rotateText();
setInterval(rotateText, 3000);

document.getElementById("send-btn").addEventListener("click", function() {
  var nameInput = document.getElementById("name");
  var emailInput = document.getElementById("email");
  var messageInput = document.getElementById("message");

  if (nameInput.value === "" || emailInput.value === "" || messageInput.value === "") {
    alert("Please fill in all the required fields!");
  } else {
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";

    alert("Message was successfully sent!");
  }
});
  