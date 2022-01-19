//получаем тип одежды из кваери параметров адресной строки
//которые туда попадают при клике по ссылке выпадающего меню в хедер меню на индекс странице
const clothesType = window.location.href.split('=')[1];

function openContent(evt, content_clothes) {
  var i, tabcontent, tablinks;
  
  tabcontent = document.getElementsByClassName("tabcontent_category");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  tablinks = document.getElementsByClassName("tablinks_category");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active_category", "");
  }
  document.getElementById(content_clothes).style.display = "block";

  if (evt) {
      //добавляем класс когда функция вызвана по клику сайд меню
      evt.currentTarget.className += " active_category";
  } else {
      //добавляем класс когда функция вызвана при переходе с главное из хедер меню
      document.getElementById(`${clothesType}-sidebar`).className += " active_category";
  }
}
openContent(null,clothesType)

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


