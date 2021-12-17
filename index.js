window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

function openSearch() {
  document.getElementById("search_overlay-block").style.height = "100%";
}

function closeSearch() {
  document.getElementById("search_overlay-block").style.height = "0%";
}
function openBag() {
  document.getElementById("bag_overlay-block").style.width = "max-content";
}

function closeBag() {
  document.getElementById("bag_overlay-block").style.width = "0";
}