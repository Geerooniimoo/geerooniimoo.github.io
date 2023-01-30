
let imgId;
let speechId;
let speechIndex = 0;

handleSpeech();

function handleSpeech() {
    let imgIndex = 0;
    const { title, message, images, website } = speech[speechIndex];
    titleDiv.innerHTML = `<h4 id='speechTitle'>${title}</h4>`;
    document.querySelector('.type').innerHTML = `<p>${message}</p>`;

    images.length
        ? (
            !carousel.classList.contains('carousel') ? carousel.classList.toggle('carousel') : '',
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

let btn1 = document.getElementById("sale");
let btn2 = document.getElementById("analyst");
let btn3 = document.getElementById("developer");
let modal1 = document.getElementById("myModal1");
let modal2 = document.getElementById("myModal2");
let modal3 = document.getElementById("myModal3");


btn1.onclick = () => {
    let y = btn1.getBoundingClientRect().y, x = btn1.getBoundingClientRect().x;
    btn1.style = `top: ${y}px;left: ${x}px;animation: sale2 .5s`;

    setTimeout(()=>{
        btn1.style = 'display:none';
        modal1.style.display = "block";
    },500)
};

btn2.onclick = () => modal2.style.display = "block";
btn3.onclick = () => modal3.style.display = "block";

window.onclick = e => {
    console.log(e.target);
    if (e.target == modal1 || 
        e.target == modal2 || 
        e.target == modal3 || 
        e.target.classList.value == "close"
    ) {
    btn1.style = 'display:block;animate: sale 50s infinite';
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
  }
}