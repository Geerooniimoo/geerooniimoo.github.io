
let imgId;
let speechId;
let speechIndex = 0;

(() => localStorage.freeSession ? freeSessionDiv.style.display = 'none' : '')();

handleSpeech();

freeSession.onclick = () => {
    myModal6.showModal();
    freeSessionDiv.style.display = 'none';
    localStorage.freeSession = true;
}

closeFree.onclick = () => {
    freeSessionDiv.style.display = 'none';
}

function handleSpeech() {
    let imgIndex = 0;
    const { title, message, images, website } = speech[speechIndex];
    titleDiv.innerHTML = `<h1 id='speechTitle'>${title}</h1>`;
    document.querySelector('.type').innerHTML = `${message}`;

    images.length
        ? (
            !carousel.classList.contains('carousel') ? carousel.classList.toggle('carousel') : '',
            carousel.innerHTML = `<img class="caroImg">`,
            website ? document.querySelector('.type').innerHTML += `<a target="blank_" href="${website}"><button>Live Website</button></a>` : '',
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
                document.querySelector('.caroImg').setAttribute('alt', `${images[imgIndex]}`),
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

const handleModal = modal => {
    scheduleBtn.style.transform = 'scale(.9)';
    setTimeout(() => scheduleBtn.style.transform = 'scale(1)', 250);
    document.getElementById(modal).style.display = 'block';
};

const handleOffer = e => {
    ['#class35', '#class65', '#class300', '#class550', '#class1000']
        .forEach(e => {
            document.querySelector(e).style.filter = 'contrast(0)';
            document.querySelector(e).style = 'text-shadow:none;background:none';
        });

    e.style.transform = 'scale(.9)';
    e.style.textShadow = '0px 0px 5px black, -2px 2px 1px silver';
    e.style.background = 
        e.id == 'class35' ? 'black' : 
        e.id == 'class65' ? '#007d7d' : 
        e.id == 'class300' ? '#0277bd' : 
        e.id == 'class550' ? '#dc5e00' :
        e.id == 'class1000' ? '#5c0035' : '';
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
            e.id == 'class550' ? '4' :
            e.id == 'class1000' ? '5' : '';
        scheduleBtnDiv.innerHTML = `<button id="scheduleBtn" onclick="myModal${offer}.showModal()" class="color${offer}">Click To Schedule</button>`;
        document.querySelector('#scheduleBtn').style = 'transform:scale(.9)'
    }, radioList.length * 250)

    setTimeout(() => {
        document.querySelector('#scheduleBtn').style = 'transform:scale(1)';
    }, radioList.length * 300 + 100)

};

handleOffer(class300)

let syllabus = document.getElementById('syllabus');
     
let showContent = id => {

    id == 'showSyllabus' ?

        (
            syllabus.innerHTML = `
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
                </div>`
        ) :

        (
            syllabus.innerHTML = `
                <div style="display:flex;justify-content:space-around">
                    <a target="_blank" href="https://AnalysisAndDevelopment.com/ProfessionalReadmeGenerator">
                        <img style="width:300px;height:300px;margin:10px 20px;border-radius:12px" src="assets/images/mockup.png">
                        <figcaption style="color:white;text-align:center">Professional ReadMe Generator</figcaption>
                    </a>

                    <a target="_blank" href="https://AnalysisAndDevelopment.com/Password-Generator">
                        <img style="width:300px;height:300px;margin:10px 20px;border-radius:12px" src="assets/images/GenPass1.png">
                        <figcaption style="color:white;text-align:center">Password Generator</figcaption>
                    </a>

                    <a target="_blank" href="https://AnalysisAndDevelopment.com/WeatherForecast">
                        <img style="width:300px;height:300px;margin:10px 20px;border-radius:12px" src="assets/images/weather.png">
                        <figcaption style="color:white;text-align:center">Weather Forecast</figcaption>
                    </a>

                </div>
            
            `
        )
                
    syllabus.style.transform = 'scaleY(100%)'
};


const showThis = id => {

    syllabus.innerHTML.length ? 
        
        (
            syllabus.style.transform = 'scaleY(0%)',
            setTimeout(() => {
                syllabus.innerHTML = ''
            }, 1000)
        ) : showContent(id);
};


let body = document.body;
let width = body.getClientRects()[0].width;
let height = body.getClientRects()[0].height;

if (width<850 && height<400) {
    if (body.requestFullscreen) {
        body.requestFullscreen();
      } else if (body.webkitRequestFullscreen) { /* Safari */
        body.webkitRequestFullscreen();
      } else if (body.msRequestFullscreen) { /* IE11 */
        body.msRequestFullscreen();
      }
};