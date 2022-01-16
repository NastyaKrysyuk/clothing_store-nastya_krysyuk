const btn=document.querySelector('.btn-toTop');
window.addEventListener('scroll',toTop)
function toTop() {
  if(window.scrollY > 300) {
    btn.classList.add('active')
} else {
    btn.classList.remove('active')
}
}
