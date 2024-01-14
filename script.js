//Arrow controls

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


//Play/pause button

const playPause = document.querySelector('.play-pause');
let bool = false;
let interval;

const playPauseFunction = () => {
    if (!bool) {
        interval = setInterval(() => {
            x -= 90;
            rotate();
        }, 3000);
        bool = true;
    } else {
        clearInterval(interval);
        bool = false;
    }
}

const changePlayPause = () => {
    const i = document.querySelector('.play-pause i');
    const cls = i.classList[1];
    if (cls === 'fa-play') {
        i.classList.remove('fa-play');
        i.classList.add('fa-pause');
    } else {
        i.classList.remove('fa-pause');
        i.classList.add('fa-play');
    }
}

playPause.addEventListener('click', () => {
    playPauseFunction();
    changePlayPause();
})