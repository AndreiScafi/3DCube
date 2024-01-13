const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');
const cubes = document.querySelectorAll('.cube');

let x = 0;

const rotate = () => {
    cubes.forEach(cube => cube.style.transform = `rotateY(${x}deg)`);
}


leftArrow.addEventListener('click', () => {
    x += 90;
    rotate();
});

rightArrow.addEventListener('click', () => {
    x -= 90;
    rotate();
});

//Hover Effect

leftArrow.addEventListener('mouseover', () => {
    x += 25;
    rotate();
});

leftArrow.addEventListener('mouseout', () => {
    x -= 25;
    rotate();
});

rightArrow.addEventListener('mouseover', () => {
    x -= 25;
    rotate();
});

rightArrow.addEventListener('mouseout', () => {
    x += 25;
    rotate();
});