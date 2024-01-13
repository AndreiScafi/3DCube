const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow')
const cubes = document.querySelectorAll('.cube');

let x = 0;


leftArrow.addEventListener('click', () => {
    x += 90;
    cubes.forEach(cube => cube.style.transform = `rotateY(${x}deg)`);
});

rightArrow.addEventListener('click', () => {
    x -= 90;
    cubes.forEach(cube => cube.style.transform = `rotateY(${x}deg)`);
});