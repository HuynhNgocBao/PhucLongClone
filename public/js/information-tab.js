const tabListElement = document.querySelector('.information-tab-list');
if (tabListElement){
    const tabItemElements = document.querySelectorAll('.information-tab-item');
    const paneItemElements = document.querySelectorAll('.information-pane-item');
    tabItemElements.forEach((tabItemElement,index)=>{
        tabItemElement.onclick = (e)=>{
            var tabItemActiveElement = document.querySelector('.information-tab-item.active');
            tabItemActiveElement.classList.remove('active');
            tabItemElement.classList.add('active');
            var paneItemActiveElement = document.querySelector('.information-pane-item.active');
            paneItemActiveElement.classList.remove('active');
            paneItemElements[index].classList.add('active');
        }
    })
}