function addCart() {
  alert("Success! Your items have been added.");
}

function addCarterr() {
  alert("ERROR!");
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

function changeDDL(el){
  console.log('element',el)
  console.log('value',el.value)
  if(el.value === "chuck-taylor-all-star-low-tops"){
   document.getElementById("chuck-taylor-all-star-low-tops").style.display = "block";
    document.getElementById("converse-chuck-70").style.display = "none";
    document.getElementById("converse-platforms").style.display = "none";
  }
  if(el.value === "converse-chuck-70"){
    document.getElementById("chuck-taylor-all-star-low-tops").style.display = "none";
    document.getElementById("converse-chuck-70").style.display = "block";
    document.getElementById("converse-platforms").style.display = "none";
  }
  if(el.value === "converse-platforms"){
   document.getElementById("chuck-taylor-all-star-low-tops").style.display = "none";
    document.getElementById("converse-chuck-70").style.display = "none";
    document.getElementById("converse-platforms").style.display = "block";
  }
  if(el.value === "all-shoes"){
   document.getElementById("chuck-taylor-all-star-low-tops").style.display = "block";
   document.getElementById("converse-chuck-70").style.display = "block";
    document.getElementById("converse-platforms").style.display = "block";
  }
}
