// document.body.scrollIntoView();

// let type = () => {
//     let i = 0;
//     type.innerText = speech;
// };

// setTimeout(() => {
//     if (window.screen.width > 576) {
//         document.querySelector('.accordion').scrollIntoView();
//     }
// }, 9800);

let imgId;
let speechIndex = 0;
let speechId = setTimeout(handleSpeech, 11500);

function handleSpeech() {
    let imgIndex = 0;
    const { title, message, images, website } = speech[speechIndex];
    titleDiv.innerHTML = `<h4 id='speechTitle'>${title}</h4>`;
    document.querySelector('.type').innerHTML = `<p>${message}</p>`;

    images.length
        ? (
            !carousel.classList.contains('carousel') ? carousel.classList.toggle('carousel') : '',
            // document.querySelector('.caroImg').style['-webkit-animation-duration'] = images.length*3+5+'s',
            carousel.innerHTML = `<img class="caroImg">`,
            website ? carousel.innerHTML += `<a target="blank_" href="${website}">Live Website</a>` : '',
            changeImg()
        )
        : (
            carousel.innerHTML = '',
            carousel.classList.contains('carousel') ? carousel.classList.toggle('carousel') : ''
        );

    clearInterval(speechId);
    speechIndex < speech.length - 1 ? speechIndex++ : speechIndex = 0;
    speechId = setTimeout(handleSpeech, images.length ? images.length * 3000 + 6000 : 6000);

    function changeImg() {
        imgIndex < images.length
            ? (
                clearTimeout(imgId),
                document.querySelector('.caroImg').setAttribute('src', `./assets/images/${images[imgIndex]}`),
                imgIndex++,
                imgId = setTimeout(changeImg, 3000)
            ) : (
                imgIndex = 0
            )
    };
};


document.getElementById('rewind').addEventListener('click', handleRewind);
document.getElementById('forward').addEventListener('click', handleForward);

function handleRewind() {
    speechIndex > 1 ? (
        speechIndex -= 2,
        clearTimeout(imgId),
        clearInterval(speechId),
        console.log(speechIndex),
        speechTitle.innerText = '',
        document.querySelector('.type').innerHTML = '',
        handleSpeech()) : speechIndex = 0;
};

function handleForward() {
    speechIndex < speech.length ? (
        console.log(speechIndex),
        clearTimeout(speechId),
        clearInterval(imgId),
        speechTitle.innerText = '',
        document.querySelector('.type').innerHTML = '',
        handleSpeech()) : '';
};