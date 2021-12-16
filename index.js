window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

function openNav() {
  document.getElementById("overlay-block").style.height = "100%";
}

function closeNav() {
  document.getElementById("overlay-block").style.height = "0%";
}