window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}

function openSearch() {
  document.getElementById("search").style.height = "100%";
}

function closeSearch() {
  document.getElementById("search").style.height = "0%";
}
function openBag() {
  if (window.innerWidth > 768) {
    document.getElementById("bag").style.width = "max-content";
  }
  else document.getElementById("bag").style.width = "100%";
}

function closeBag() {
  document.getElementById("bag").style.width = "0";
}

function openContentBag(evt, content_bag) {
  var i, tabcontent, tablinks
  tabcontent = document.getElementsByClassName("bag__content");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("bag__tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active_bag", "");
  }
  document.getElementById(content_bag).style.display = "block";
  evt.currentTarget.className += " active_bag";
}

function Checked(Element) {
	if (Element.innerHTML == '') Element.innerHTML = '&#10004';
	else Element.innerHTML = '';
	return false;
}