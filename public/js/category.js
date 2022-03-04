const formElement = document.querySelector('.filter');
const selectElement = document.querySelector('select.filter-input');
if (selectElement){
    selectElement.onchange=function(e){ 
        formElement.submit();
    }
}
const priceSortElement = document.querySelector('.price-sort');
let priceSort;
if (priceSortElement){
    priceSort = priceSortElement.innerText;
}
const defaultOption = document.querySelector(`.filter-input option[value=${priceSort}]`)
if (defaultOption){
    defaultOption.setAttribute('selected','selected');
}
 