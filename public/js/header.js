// Xử lý modal header
var modalOpen = document.querySelector('.modal-icon');
var modal = document.querySelector('.modal');
var modalContainer = document.querySelector('.modal-container');
var modalClose = document.querySelector('.modal-close');
var iconDowns = document.querySelectorAll('.icon-down');
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
iconDowns.forEach((iconDown,index)=>{
    iconDown.onclick = (e)=>{
        var nav = iconDown.nextElementSibling;
        if (nav.style.display === "flex") nav.style.display = "none";
        else nav.style.display = "flex";
    }
})
