const images = document.querySelectorAll('.slider-img');
const controls = document.querySelectorAll('.controls');
let imgIndex = 0;

function show(index) {
    images[imgIndex].classList.remove('active');
    images[index].classList.add('active');
    imgIndex = index;
}

controls.forEach((e) => {
    e.addEventListener('click', () => {
        if (event.target.classList.contains('prev')) {
            let index = imgIndex - 1;

            if (index < 0) {
                index = imgIndex.length - 1;
            }
            show(index);
        } else if (event.target.classList.contains('next')) {
            let index = imgIndex + 1;
            if (index >= images.length) {
                index = 0;
            }
            show(index);
        }
    })
})

show(imgIndex)