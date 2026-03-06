document.getElementById("login-btn").addEventListener("click", function () {
  const userName = getValue("user-name");
  if (userName !== "admin") {
    alert(" Invalid user name");
    return;
  }

  const password = getValue("password");
  if (password !== "admin123") {
    alert("Invalid password");
    return;
  } else {
    alert("login success");
    window.location.assign("home.html");
  }
});
