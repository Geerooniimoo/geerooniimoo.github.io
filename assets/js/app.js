
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

let modal1 = document.getElementById("myModal1");
let modal2 = document.getElementById("myModal2");
let modal3 = document.getElementById("myModal3");



// btn2.onclick = () => modal2.style.display = "block";
// btn3.onclick = () => modal3.style.display = "block";

// window.onclick = e => {
//     console.log(e.target);
//     if (e.target == modal1 || 
//         e.target == modal2 || 
//         e.target == modal3 || 
//         e.target.classList.value == "close"
//     ) {
//     btn1.style = 'display:block;animate: sale 50s infinite';
//     modal1.style.display = "none";
//     modal2.style.display = "none";
//     modal3.style.display = "none";
//   }
// }

// const handleModal = modal => console.log(modal);
const handleModal = modal => {
    scheduleBtn.style.transform = 'scale(.9)';
    setTimeout(()=>scheduleBtn.style.transform = 'scale(1)', 250);
    document.getElementById(modal).style.display = 'block';
};

const handleOffer = e => {
    
    ['#class35', '#class65', '#class250']
        .forEach(e => {
            document.querySelector(e).style.filter = 'contrast(0)';
            document.querySelector(e).style = 'text-shadow:none;background:none';
    });

    e.style.transform = 'scale(.9)';
    e.style.textShadow = '0px 0px 5px black, -2px 2px 1px silver';
    e.style.background = e.id == 'class35' ? '#7e2832' : e.id == 'class65' ? '#007d7d' : '#0277bd';
    setTimeout(()=> {e.style.transform = 'scale(1)'}, 250)

    e.style.filter = 'contrast(1)'
    document.querySelectorAll('input[type="radio"]').forEach(el => {
        el.disabled = true;
        el.style = 'transform:scale(1)'
    });
    
    let radioList = document.querySelectorAll(`.${e.id}`);

    radioList.forEach((el,i) => {
        setTimeout(()=> {
            el.disabled=false;
            el.checked=true;
            el.style = 'transform:scale(1.6)'
        }, i*200);
        // setTimeout(()=> {el.style = 'transform:scale(.4)'}, i*200+500);
    });

    setTimeout(()=>{
        let offer = e.id=='class35' ? '1' :  e.id=='class65' ? '2' : 3;
        scheduleBtnDiv.innerHTML = `<button id="scheduleBtn" onclick="handleModal('myModal${offer}')" class="color${offer}">Click To Schedule</button>`;
        document.querySelector('#scheduleBtn').style = 'transform:scale(.9)'
    }, radioList.length*300)
    
    setTimeout(()=>{
        document.querySelector('#scheduleBtn').style = 'transform:scale(1)';
    }, radioList.length*300+250)

};

handleOffer(class65)