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

function openContentBag(evt, content_bag) {
  var i, tabcontent, tablinks
  tabcontent = document.getElementsByClassName("tabcontent_bag");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks_bag");
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