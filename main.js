const emailInputBox = document.querySelector(".email-input");
const emailInputInfo = document.querySelector(".email-input-info");

function submitEmail() {
  let email = emailInputBox.value;
  let testEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(testEmail.test(email)) {
    emailInputInfo.style.color = "green";
    emailInputInfo.innerText = "Email sent! Check your inbox.";
  } else {
    emailInputInfo.style.color = "red";
    emailInputInfo.innerText = "Please enter a valid email address.";
  }
}

emailInputBox.addEventListener("input", () => {
  emailInputInfo.innerText = "";
});