function nextSlider(){
    var current = 0, previous = 0;
    var sliderImgs = document.querySelectorAll('.sliderImg');
    Array.from(sliderImgs).forEach((sliderImg,index)=>{
        if (sliderImg.classList.contains('active'))
        {
            previous = index;
            current = (index + 1) % sliderImgs.length;
        }
    })
    sliderImgs[previous].classList.remove('active');
    sliderImgs[current].classList.add('active');
}

function backSlider(){
    var current = 0, previous = 0;
    var sliderImgs = document.querySelectorAll('.sliderImg');
    Array.from(sliderImgs).forEach((sliderImg,index)=>{
        if (sliderImg.classList.contains('active'))
        {
            previous = index;
            index - 1 >= 0 ? current = index - 1 : current = sliderImgs.length -1 ;
        }
    })
    sliderImgs[previous].classList.remove('active');
    sliderImgs[current].classList.add('active');
}