const images = [
    'bike1.png', 'bike2.png', 'bike3.png', 'bike4.png', 'bike5.png', 'bike6.png',
    'crudburger1.png', 'd3_1.png', 'D3-Projects.gif', 'firebase1.jpg', 'firebase2.png',
    'firebase3.png', 'gamazon1.jpg', 'gamazon2.png', 'gamazon3.png', 'jup_2.png', 'jup_3.png', 'leaflet-map1.png', 'leaflet-map2.png', 'leaflet-map3.png', 'liri1.png', 'liri2.png', 'liri3.png', 'liri4.png', 'mars1.png', 'mars2.png', 'mars3.png', 'mars4.png', 'mars5.png', 'matplotlib_boxplot.png', 'matplotlib_lab.jpg', 'matplotlib_line.png', 'matplotlib_pie.png', 'matplotlib_regression.png', 'pandas-1.png', 'pandas-2.png', 'pandas-3.png', 'pandas-4.png', 'pandas-5.png', 'pandas-6.png', 'plotly_1.png', 'python0.png', 'python1.png', 'python2.png', 'python3.png', 'sql_bar.png', 'sql_hist.png', 'sqlalchemy_1.png', 'sqlalchemy_2.png', 'sqlalchemy_3.png', 'sqlalchemy_4.png', 'team.jpg', 'team1.png', 'team2.png', 'team3.png', 'vba0.jpg', 'vba1.png', 'vba2.png', 'vba3.png', 'vba4.png', 'vba5.png', 'vba6.png', 'vba7.png', 'vba8.png', 'web_1.png', 'web_2.png', 'web_3.png'
]

const speech =
    `Hi! Here are some examples of the many things we can do together.  For example with Tableau, we can create detail visualizations which proivdes a quick analysis into data. `

var i = 0;

function changeImg() {

    if (i < images.length) {
        document.querySelector('.caroImg').setAttribute('src', `./assets/images/${images[i]}`);
        i++;
    } else {
        i = 0;
    }
}

type = () => {
    let i = 0;
    let intervalId = setInterval(() => {
        speech[i - 1] == '.'
            ? document.querySelector('#type').innerText = speech[i]
            : document.querySelector('#type').innerText += speech[i]
        i++;
        if (!(i < speech.length)) { i=0 };
    }, 100)
}

type();

setInterval(changeImg, 6000)