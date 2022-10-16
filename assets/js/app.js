// document.body.scrollIntoView();

let type = () => {
    let i = 0;
    document.querySelector('#type').innerText = speech;
};

// setTimeout(() => {
//     if (window.screen.width > 576) {
//         document.querySelector('.accordion').scrollIntoView();
//     }
// }, 9800);

var imgId;
let speechIndex = 0;
var speechId = setTimeout(handleSpeech, 11000);
function handleSpeech() {
    const { title, message, images } = speech[speechIndex];
    document.getElementById('titleDiv').innerHTML = `<h4 id='speechTitle'>${title}</h4>`;
    document.querySelector('.type').innerHTML = `<p>${message}</p>`;

    images.length
        ? (
            !carousel.classList.contains('carousel') ? carousel.classList.toggle('carousel'): '',
            carousel.innerHTML = `<img class="caroImg" src="./assets/images/${images[0]}">`, 
            changeImg(images, 0))
            : ( 
                carousel.innerHTML = '',
                carousel.classList.contains('carousel') ? carousel.classList.toggle('carousel'): ''
          );
    
    clearInterval(speechId);
    speechIndex < speech.length - 1 ? speechIndex++ : speechIndex = 0;
    speechId = setTimeout(handleSpeech, 10000);
};

function changeImg(images, imgIndex) {
    
    if (imgIndex < images.length) {
        clearTimeout(imgId);
        imgId = setTimeout(() => {
            document.querySelector('.caroImg').setAttribute('src', `./assets/images/${images[imgIndex]}`);
            imgIndex++;
            changeImg(images, imgIndex);
        }, 3000);
    };
};

document.getElementById('rewind').addEventListener('click', handleRewind);
document.getElementById('forward').addEventListener('click', handleForward);

function handleRewind() {
    speechIndex > 1 ? (
        speechIndex -= 2,
        console.log(speechIndex),
        clearInterval(speechId),
        // clearInterval(imgId),
        document.querySelector('#speechTitle').innerText = '',
        document.querySelector('.type').innerHTML = '',
        handleSpeech()) : speechIndex = 0;
};

function handleForward() {
    speechIndex < speech.length ? (
        console.log(speechIndex),
        clearTimeout(speechId),
        clearInterval(imgId),
        document.querySelector('#speechTitle').innerText = '',
        document.querySelector('.type').innerHTML = '',
        handleSpeech()) : '';
};