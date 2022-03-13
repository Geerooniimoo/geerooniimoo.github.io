
const speech =
    [
        {
            title: 'Introduction',
            message: `Here are some examples of the many things we can do together.<br><br>`,
            images: []
        },
        {
            title: 'Mission to Jupiter',
            message: `Imagine automatically going to multiple NASA's websites and collecting information about Jupiter to store it on a SQL database and display it any way you like on your own website.`,
            images: ['jup_2.png', 'jup_3.png']
        },
        {
            title: 'Latitude & Weather Analysis',
            message: `Or how about obtaining current weather of hundreds of cities around the world to conduct your own study about the effect of latitude on the climate and then displaying it on your own interactive website.`,
            images: ['web_1.png', 'web_2.png']
        },
        {
            title: 'Census Analysis',
            message: `How about if we obtain Census Data from a data bank like Kaggle and with the use of HTML, CSS and JavaScript libraries create an interactive website that would allows us to visually analyze correlation between location, obesity, income, helthcare, and smokers.`,
            images: ['d3_1.png', 'D3-Projects.gif']
        },
        {
            title: 'SQL Data Management',
            message: `How about creating a full stack application that through a website securely manages a restaurant's data on an SQL Database server.`,
            images: ['crudburger1.png', 'crudburger1.png']
        },
        {
            title: 'Mission to Mars',
            message: `How about if we display the latest news and updates of the planet Mars by scrapping the latest images, news and weather information from NASA, Twitter, Space Facts and USGS websites.`,
            images: ['mars2.png', 'mars3.png', 'mars4.png', 'mars5.png']
        },
        {
            title: 'Online Train Scheduler',
            message: `Imagine using Firebase, an online Google Database that through the use of a website allows us to manage a train's scheduler live.`,
            images: ['firebase2.png', 'firebase1.jpg']
        },
        {
            title: 'Earthquakes',
            message: `Or we can acquire earthquake and tactonic plates information in a GeoJSON format from an USGS API and with the use of HTML, CSS, JavaScript and Leaflet CDN display the world's latest earthquakes' locations, magnitude and depth on different map styles.`,
            images: ['leaflet-map1.png', 'leaflet-map2.png', 'leaflet-map1.png']
        },
        {
            title: 'Schools Analysis',
            message: `For example with the Python language and Pandas library we conduct an analysis of reginal schools' data to obtain an inside on school budget, school types, students count, passing averages of the math and reading scores to determine the difference between charter or district, inexpensive or expensive schools have on overall passing grades.`,
            images: ['pandas-4.png', 'pandas-6.png', 'pandas-5.png', 'pandas-1.png', 'pandas-2.png', 'pandas-3.png']
        },
        {
            title: 'Tableau',
            message: `how about with Tableau, we can create detailed visualizations which proivdes a quick analysis into CitiBiki's data.`,
            images: ['bike1.png', 'bike2.png', 'bike3.png', 'bike4.png', 'bike5.png', 'bike6.png']
        },
        {
            title: 'SQL Database Management',
            message: `Let's create a backend application with the use of NodeJS and MySQL to create, read, update and delete data of and online store on a SQL database server.`,
            images: ['gamazon2.png', 'gamazon3.png', 'gamazon1.jpg']
        },
        {
            title: 'LIRI a SIRI\'s simulation',
            message: `How about if we create a backend application that similates Iphone's SIRI.  While SIRI is a speech interpretation and recognition interface, our app would be a language interpretation and recognition interface.  With the use NodeJS and a few APIs we would create command line app that would provide Spotify songs, concerts from Bands in Town, tweets from Twitter and movies from OMDB.`,
            images: ['liri1.png', 'liri2.png', 'liri3.png', 'liri4.png']
        },
        {
            title: 'Cancer Drugs Analysis',
            message: `How about if with the use of Python, Jupyter Notebook, Pandas and Matplotlib we analyze drugs' information to determine which drug is the most effective against cancer and visualize the results and predictions of the information analyzed.`,
            images: ['matplotlib_lab.jpg', 'matplotlib_boxplot.png', 'matplotlib_line.png', 'matplotlib_pie.png', 'matplotlib_regression.png']
        },
        {
            title: 'Biodiversity',
            message: `Or what about creating a interative dashboard with JavaScript and D3JS library that allows us to analyze biodiversity very close to home, our belly button. How about if with the Python language we analyze financial data to obtain a summary of revenue fluctuations in which we can see the average revenue change, total gain or loss, greatest increase and greatest decrease.`,
            images: ['plotly_1.png']
        }
    ]

document.body.scrollIntoView();

type = () => {
    let i = 0;
    document.querySelector('#type').innerText = speech;
};

setTimeout(() => {
    if (window.screen.width > 576) {
        document.querySelector('.accordion').scrollIntoView();
    }
}, 9800);

var imgId;
let speechIndex = 0;
var speechId = setTimeout(handleSpeech, 11000);
function handleSpeech() {
    const { title, message, images } = speech[speechIndex];
    document.getElementById('titleDiv').innerHTML = `<h4 id='speechTitle'>${title}</h4>`;
    document.querySelector('.type').innerHTML = `<p>${message}</p>`;
    images.length
        ? (document
            .querySelector('.carousel')
            .innerHTML = `<img class="caroImg" src="./assets/images/${images[0]}">`,
            changeImg(images, 0))
        : document.querySelector('.carousel').innerHTML = '';
    
    clearInterval(speechId);
    speechIndex < speech.length - 1 ? speechIndex++ : speechIndex = 0;
    speechId = setTimeout(handleSpeech, 10000);
};

function changeImg(images, imgIndex) {
    
    if (imgIndex < images.length) {
        setTimeout(() => {
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
    // speechIndex ? (speechIndex--, clearInterval(speechId) ) : '';    
};

function handleForward() {
    speechIndex < speech.length - 1 ? (
        console.log(speechIndex),
        clearInterval(speechId),
        clearInterval(imgId),
        document.querySelector('#speechTitle').innerText = '',
        document.querySelector('.type').innerHTML = '',
        handleSpeech()) : '';
    // speechIndex ? (speechIndex--, clearInterval(speechId) ) : '';    
};






