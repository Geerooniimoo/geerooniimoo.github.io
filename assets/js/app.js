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
let speechId;
let speechIndex = 0;
// let speechId = setTimeout(handleSpeech, 11500);
handleSpeech();

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

// var span = document.querySelector(".close");
// var modal = document.getElementById("myModal");

// sale.onclick = () => modal.style.display = "block";
// span.onclick = () => modal.style.display = "none";
// window.onclick = event => event.target == modal ? modal.style.display = "none":"";

var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");

// Get the button that opens the modal
var btn1 = document.getElementById("sale");
var btn2 = document.getElementById("analyst");
var btn3 = document.getElementById("developer");

// Get the <span> element that closes the modal
var span = document.querySelector(".close")

// When the user clicks on the button, open the modal
btn1.onclick = () => {
    let y = btn1.getBoundingClientRect().y, x = btn1.getBoundingClientRect().x;
    btn1.style = `top: ${y}px;left: ${x}px;animation: sale2 .5s`;

    setTimeout(()=>{
        btn1.style = 'display:none';
        modal1.style.display = "block";
    },500)
};

btn2.onclick = () => {
        modal2.style.display = "block";
};

btn3.onclick = () => {
        modal3.style.display = "block";
};

span.onclick = function() {
    btn1.style = 'display:block;animate: sale 50s infinite';
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    console.log(event.target);
    if (event.target == modal1 || event.target == modal2 || event.target == modal3 ) {
    btn1.style = 'display:block;animate: sale 50s infinite';
    modal1.style.display = "none";
    modal2.style.display = "none";
    modal3.style.display = "none";
  }
}