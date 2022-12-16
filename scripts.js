function addCart() {
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

function selectDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function changeDDL(){
  var el = document.querySelector('#myDropdown');
  if(el.value === "chuck-taylor-all-star-low-tops"){
   document.querySelector("#chuck-taylor-all-star-low-tops").style.display = "block";
    document.querySelector("#converse-chuck-70").style.display = "none";
  }
  if(el.value === "converse-chuck-70"){
   document.querySelector("#chuck-taylor-all-star-low-tops").style.display = "none";
    document.querySelector("#converse-chuck-70").style.display = "block";
  }
}
