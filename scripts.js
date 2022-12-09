function myFunction() {
  alert("Success! Your items have been added.");
}

function showAlertMessage() {
  var x = document.getElementById("alert-message");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}
