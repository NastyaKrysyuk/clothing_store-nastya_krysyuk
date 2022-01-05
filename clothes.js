function openContent(evt, content_clothes) {
  var i, tabcontent, tablinks
  tabcontent = document.getElementsByClassName("tabcontent_category");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks_category");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active_category", "");
  }
  document.getElementById(content_clothes).style.display = "block";
  evt.currentTarget.className += " active_category";
}

function ChangeColor(Element) {
	if (Element.style.color == '') Element.style.color = 'rgb(184, 89, 89)';
	else Element.style.color = '';
	return false;
}

function ChangeSize(Element) {
	if (Element.style.border == '') Element.style.border = '1px solid black';
	else Element.style.border = '';
	return false;
}


