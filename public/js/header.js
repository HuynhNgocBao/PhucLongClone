// Xử lý modal header
var modalOpen = document.querySelector('.modal-icon');
var modal = document.querySelector('.modal');
var modalContainer = document.querySelector('.modal-container');
var modalClose = document.querySelector('.modal-close');
modalOpen.onclick = function(e){
    modal.classList.add('open');
}
modalClose.onclick = function(e){
    modal.classList.remove('open');
}
modal.onclick = function(e){
    modal.classList.remove('open');
}
modalContainer.onclick = function(e){
    e.stopPropagation();
}
