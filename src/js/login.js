/**
 1. get login button and add event listener
 2. get email  value and password  value
 3. condition if email and password ok  got to the bank otherwise alert invalid
 */

//  step 1:
document.getElementById("btnLogin").addEventListener("click", function () {
  //   step 2:
  //   get the email
  const emailElement = document.getElementById("user-email");
  const email = emailElement.value;

  //   get the password
  const passwordElement = document.getElementById("user-password");
  const password = passwordElement.value;

  //   step 3:
  if (email === "mahbublalam500@gmail.com" && password === "12345") {
    window.location.href = "bank.html";
  } else {
    alert("Please check your email and password");
  }
});
