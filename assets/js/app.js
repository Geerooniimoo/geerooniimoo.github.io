
let imgId;
let speechId;
let speechIndex = 0;

handleSpeech();

function handleSpeech() {
    let imgIndex = 0;
    const { title, message, images, website } = speech[speechIndex];
    titleDiv.innerHTML = `<h1 id='speechTitle'>${title}</h1>`;
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
        speechTitle.innerText = '',
        document.querySelector('.type').innerHTML = '',
        handleSpeech()) : speechIndex = 0;
};

function handleForward() {
    speechIndex < speech.length ? (
        clearTimeout(speechId),
        clearInterval(imgId),
        speechTitle.innerText = '',
        document.querySelector('.type').innerHTML = '',
        handleSpeech()) : '';
};

window.onclick = ({target}) => {
    if (target == myModal1 ||
        target == myModal2 ||
        target == myModal3 ||
        target == myModal4 ||
        target.classList.value == "close"
    ) {
        // btn1.style = 'display:block;animate: sale 50s infinite';
        myModal1.style.display = "none";
        myModal2.style.display = "none";
        myModal3.style.display = "none";
        myModal4.style.display = "none";
    };

    if(target== syllabusBtn) {
        showSyllabus();
    } else {
        document.querySelector('#syllabus').style.transform = 'scaleY(0%)'
        setTimeout(() => {
            document.getElementById('syllabus').innerHTML = '';
        }, 1000);
    };
};

// const handleModal = modal => console.log(modal);
const handleModal = modal => {
    scheduleBtn.style.transform = 'scale(.9)';
    setTimeout(() => scheduleBtn.style.transform = 'scale(1)', 250);
    document.getElementById(modal).style.display = 'block';
};

const handleOffer = e => {

    ['#class35', '#class65', '#class300', '#class500']
        .forEach(e => {
            document.querySelector(e).style.filter = 'contrast(0)';
            document.querySelector(e).style = 'text-shadow:none;background:none';
        });

    e.style.transform = 'scale(.9)';
    e.style.textShadow = '0px 0px 5px black, -2px 2px 1px silver';
    e.style.background = 
        e.id == 'class35' ? '#7e2832' : 
        e.id == 'class65' ? '#007d7d' : 
        e.id == 'class300' ? '#0277bd' : 
        e.id == 'class500' ? '#5c0035' : '';
    setTimeout(() => { e.style.transform = 'scale(1)' }, 250)

    e.style.filter = 'contrast(1)'
    document.querySelectorAll('input[type="radio"]').forEach(el => {
        el.disabled = true;
        el.style = 'transform:scale(1)'
    });

    let radioList = document.querySelectorAll(`.${e.id}`);

    radioList.forEach((el, i) => {
        setTimeout(() => {
            el.disabled = false;
            el.checked = true;
            el.style = 'transform:scale(1.6)'
        }, i * 200);
        // setTimeout(()=> {el.style = 'transform:scale(.4)'}, i*200+500);
    });

    setTimeout(() => {
        let offer = 
            e.id == 'class35' ? '1' : 
            e.id == 'class65' ? '2' :
            e.id == 'class300' ? '3' :
            e.id == 'class500' ? '4' : '';
        scheduleBtnDiv.innerHTML = `<button id="scheduleBtn" onclick="handleModal('myModal${offer}')" class="color${offer}">Click To Schedule</button>`;
        document.querySelector('#scheduleBtn').style = 'transform:scale(.9)'
    }, radioList.length * 300)

    setTimeout(() => {
        document.querySelector('#scheduleBtn').style = 'transform:scale(1)';
    }, radioList.length * 300 + 250)

};

handleOffer(class65)

const showSyllabus = () => {
    if (document.getElementById('syllabus').innerHTML.length) {
        document.querySelector('#syllabus').style.transform = 'scaleY(0%)'
        setTimeout(() => {
            document.getElementById('syllabus').innerHTML = '';
        }, 1000);
    } else {
        document.querySelector('#syllabus').innerHTML = `

    };
        <div>
        <h3>Data Analytics:</h3>
        Intermediate Excel
        <ul>
            <li> Pivot Tables</li>
            <li> VBA Scripting</li>
        </ul>
        Fundamental Statistics
        <ul>
            <li> Modelling</li>
            <li> Forecast</li>
        </ul>
        Python Programming
        <ul>
            <li> Python 3</li>
            <li> NumPy</li>
            <li> Pandas</li>
            <li> Matplotlib</li>
            <li> API Interactions</li>
        </ul>
        Databases
        <ul>
            <li> Postgres/pgAdmin</li>
            <li> MongoDB</li>
            <li> (ETL) <br> Extract-Transform-Load</li>
        </ul>

        Front End Web Visualization
        <ul>
            <li> HTML</li>
            <li> CSS</li>
            <li> Bootstrap</li>
            <li> Dashboarding</li>
            <li> JavaScript</li>
            <li> Geomapping with <br> JavaScript libraries</li>
        </ul>

        Business Intelligence Software
        <ul>
            <li> Tableau</li>
        </ul>

        Advanced Topics
        <ul>
            <li> Big Data Analytics with Hadoop</li>
            <li> Amazon Web Services</li>
            <li> Machine Learning</li>
        </ul>

        </div>
        <div>
        <h3>Web Developer:</h3>
        Computer Science applied to JavaScript
        <ul>
            <li> Design Patterns</li>
            <li> Data Structures</li>
            <li> Algorithms</li>
            <li> Big O Notation</li>
        </ul>

        Browser Based Technologies
        <ul>
            <li> HTML</li>
            <li> CSS</li>
            <li> JavaScript</li>
            <li> jQuery</li>
            <li> Responsive Design</li>
            <li> Bootstrap</li>
            <li> Handlebars</li>
            <li> Local Storage,<br> Session Storage, IndexedDB</li>
            <li> React.js</li>
        </ul>

        Deployment
        <ul>
            <li> Heroku</li>
            <li> Git</li>
        </ul>

        Locally Popular MVC Framework
        <ul>
            <li> C#/ASP.NET</li>
            <li> Python/Django</li>
            <li> Java/Spring</li>
            <li> PHP/Laravel</li>
        </ul>

        Databases
        <ul>
            <li> MySQL</li>
            <li> MongoDB</li>
        </ul>

        Server-Side Development
        <ul>
            <li> Express</li>
            <li> User Authentication</li>
            <li> Sequelize</li>
            <li> MERN Stack <br>(MongoDB, Express.js, <br> React.js, Node.js)</li>
        </ul>

        Quality and Performance
        <ul>
            <li> Unit Testing</li>
            <li> Google Lighthouse</li>
            <li> Webpack</li>
            <li> PWAs (Progressive Web Apps)</li>
            <li> Lazy Loading</li>
            <li> Service Workers</li>
        </ul>

        Accessibility
        <ul>
            <li> Semantic HTML</li>
        </ul>
        </div>
    `;
        document.querySelector('#syllabus').style.transform = 'scaleY(100%)';
    };
};
