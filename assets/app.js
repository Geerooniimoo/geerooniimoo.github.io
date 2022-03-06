const images = [
    'jup_2.png', 'jup_1.gif', 'jup_3.png', 'web_1.png', 'web_2.png', 'd3_1.png', 'D3-Projects.gif', 'crudburger1.png', 'crudburger1.png', 'mars2.png', 'mars5.png', 'mars1.png', 'firebase2.png', 'leaflet-map1.png', 'leaflet-map2.png', 'leaflet-map1.png', 'team.jpg', 'team1.png', 'team2.png', 'team3.png', 'plotly_1.png', 'gamazon1.jpg', 'gamazon2.png', 'gamazon3.png', 'liri1.png', 'liri2.png', 'liri3.png', 'liri4.png', 'vba0.jpg', 'vba1.png', 'vba2.png', 'vba3.png', 'vba4.png', 'vba5.png', 'vba6.png', 'vba7.png', 'vba8.png', 'bike1.png', 'bike2.png', 'bike3.png', 'bike4.png', 'bike5.png', 'bike6.png', 'pandas-4.png', 'pandas-6.png', 'pandas-5.png', 'pandas-1.png', 'pandas-2.png', 'pandas-3.png', 'matplotlib_lab.jpg', 'matplotlib_boxplot.png', 'matplotlib_line.png', 'matplotlib_pie.png', 'matplotlib_regression.png', 'python0.png', 'python1.png', 'python2.png', 'python3.png', 'sql_bar.png', 'sql_hist.png', 'sqlalchemy_1.png', 'sqlalchemy_2.png', 'sqlalchemy_3.png', 'sqlalchemy_4.png'
]

const speech =
    `Hi! 
    Here are some examples of the many things we can do together.
    Imagine automatically going to multiple NASA's websites and collecting information about Jupiter to store it on a SQL database and display it any way you like on your own website.
    Or how about obtaining current weather of hundreds of cities around the world to conduct your own study about the effect of latitude on the climate and then displaying it on your own interactive website.
    How about if we obtain Cesus Data from a data bank like Kaggle and with the use of HTML, CSS and JavaScript libraries create an interactive website that would allows us to visually analyze correlation between location, obesity, income, helthcare, and smokers.
    How about creating a full stack application that through a website securely manages a restaurant's data on an SQL Database server.
    How about if we display the latest news and updates of the planet Mars by scrapping the latest images, news and weather information from NASA, Twitter, Space Facts and USGS websites.
    Imagine using Firebase, an online Google Database that through the use of a website allows us to manage a train's scheduler live.
    Or we can acquire earthquake and tactonic plates information in a GeoJSON format from an USGS API and with the use of HTML, CSS, JavaScript and Leaflet CDN display the world's latest earthquakes' locations, magnitude and depth on different map styles.
    For example with the Python language and Pandas library we conduct an analysis of reginal schools' data to obtain an inside on school budget, school types, students count, passing averages of the math and reading scores to determine the difference between charter or district, inexpensive or expensive schools have on overall passing grades.
    how about with Tableau, we can create detailed visualizations which proivdes a quick analysis into CitiBiki's data.
    Let's create a backend application with the use of NodeJS and MySQL to create, read, update and delete data of and online store on a SQL database server.
    How about if we create a backend application that similates Iphone's SIRI.  While SIRI is a speech interpretation and recognition interface, our app would be a language interpretation and recognition interface.  With the use NodeJS and a few APIs we would create command line app that would provide Spotify songs, concerts from Bands in Town, tweets from Twitter and movies from OMDB.
    How about if with the use of Python, Jupyter Notebook, Pandas and Matplotlib we analyze drugs' information to determine which drug is the most effective against cancer and visualize the results and predictions of the information analyzed.
    Or what about creating a interative dashboard with JavaScript and D3JS library that allows us to analyze biodiversity very close to home, our belly button.
    How about if with the Python language we analyze financial data to obtain a summary of revenue fluctuations in which we can see the average revenue change, total gain or loss, greatest increase and greatest decrease.
    `

var imgIndex = 0;
function changeImg() {
    if (imgIndex < images.length) {
        document.querySelector('.caroImg').setAttribute('src', `./assets/images/${images[imgIndex]}`);
        imgIndex++;
    } else {
        imgIndex = 0;
    }
};

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

setTimeout(type, 11000);
setTimeout(() => { setInterval(changeImg, 7000) }, 8500);
// setTimeout(() => {
//     if (window.screen.width > 576) {
//         window.scrollTo(0, (document.body.scrollHeight * .2))
//     }
// }, 9800);