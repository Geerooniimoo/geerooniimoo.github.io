const images = [
    'jup_2.png', 'jup_1.gif', 'jup_3.png', 'web_1.png', 'web_2.png', 'd3_1.png', 'D3-Projects.gif', 'crudburger1.png', 'crudburger1.png', 'mars2.png', 'mars5.png', 'mars1.png', 'firebase2.png', 'leaflet-map1.png', 'leaflet-map2.png', 'leaflet-map1.png', 'pandas-4.png', 'pandas-6.png', 'pandas-5.png', 'pandas-1.png', 'pandas-2.png', 'pandas-3.png', 'bike1.png', 'bike2.png', 'bike3.png', 'bike4.png', 'bike5.png', 'bike6.png', 'gamazon2.png', 'gamazon3.png', 'gamazon1.jpg', 'liri1.png', 'liri2.png', 'liri3.png', 'liri4.png', 'matplotlib_lab.jpg', 'matplotlib_boxplot.png', 'matplotlib_line.png', 'matplotlib_pie.png', 'matplotlib_regression.png', 'plotly_1.png', 'team.jpg', 'team1.png', 'team2.png', 'team3.png', 'vba0.jpg', 'vba1.png', 'vba2.png', 'vba3.png', 'vba4.png', 'vba5.png', 'vba6.png', 'vba7.png', 'vba8.png', 'python0.png', 'python1.png', 'python2.png', 'python3.png', 'sql_bar.png', 'sql_hist.png', 'sqlalchemy_1.png', 'sqlalchemy_2.png', 'sqlalchemy_3.png', 'sqlalchemy_4.png'
]

const speech =
    [
        {
            title: 'Introduction',
            message: `Hi! Here are some examples of the many things we can do together.<br><br>`,
            images: []
        },
        {
            title: 'Mission to Jupiter',
            message: `Imagine automatically going to multiple NASA's websites and collecting information about Jupiter to store it on a SQL database and display it any way you like on your own website.`,
            images: ['jup_2.png', 'jup_1.gif', 'jup_3.png']
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
            images: ['mars2.png', 'mars5.png', 'mars1.png']
        },
        {
            title: 'Online Train Scheduler',
            message: `Imagine using Firebase, an online Google Database that through the use of a website allows us to manage a train's scheduler live.`,
            images: ['firebase2.png']
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




// function scroll() {
//     let h = 3;
//     setInterval(()=>{
//         document.getElementById('type').style.transform = `translateY(${h}%)`
//         if (h<-99) { h = 3 };
//         h--;
//     },2000);
// };

document.body.scrollIntoView();

type = () => {
    let i = 0;
    document.querySelector('#type').innerText = speech;
    // document.querySelector('#blinker').innerText = '|';
    // let intervalId = setInterval(() => {
    //     document.querySelector('#type').innerText = speech[i]
    //     i++;
    //     if (!(i < speech.length)) { i = 0 };
    // }, 2000)
};

// setTimeout(type, 11000);
// setTimeout(handleSpeech, 8500);
// setTimeout(() => { setInterval(changeImg, 7000) }, 8500);
setTimeout(() => {
    if (window.screen.width > 576) {
        document.querySelector('.accordion').scrollIntoView();
    }
}, 9800);


let speechIndex = 0;
setTimeout(handleSpeech,11500);
function handleSpeech() {
    const {title,message,images} = speech[speechIndex];
    document.getElementById('speechTitle').innerText = title;
    document.querySelector('.type').innerHTML = `<p>${message}</p>`;
    speechIndex<speech.length-1? speechIndex++ : speechIndex = 0;
    changeImg(images,0);
    setTimeout(handleSpeech,10000);
};

function changeImg(images, imgIndex) {
    if (imgIndex < images.length) {
        document.querySelector('.caroImg').setAttribute('src', `./assets/images/${images[imgIndex]}`);
        setTimeout(()=>changeImg(images,imgIndex),700);
        imgIndex++;
    };
};


