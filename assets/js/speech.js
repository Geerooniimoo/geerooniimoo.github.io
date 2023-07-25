const speech =
    [
        {
            title: 'Introduction',
            message: `Here are some examples of the many things we can do together.<br><br>`,
            images: ['leaflet-map1.png','plotly_1.png','bike4.png','jup_3.png','web_2.png','D3-Projects.gif','pandas-3.png','crudburger1.png','mars5.png','matplotlib_regression.png'],
            website: ''
        },
        { 
            title: 'U.S. Census Analysis Dashboard ',
            message: `How about if we obtain Census Data from a data bank like Kaggle and with the use of HTML, CSS and JavaScript libraries create an interactive website that would allows us to visually analyze correlation between location, obesity, income, helthcare, and smokers.`,
            images: ['D3-Projects.gif'],
            website: '/US-Census-Analysis-Dashboard/'
        },
        {
            title: 'Tableau',
            message: `how about with Tableau, we can create detailed visualizations which proivdes a quick analysis into CitiBiki's data.`,
            images: ['bike1.png', 'bike2.png', 'bike3.png', 'bike4.png', 'bike5.png', 'bike6.png'],
            website: 'https://public.tableau.com/app/profile/geronimo.augusto.perez/viz/GroveStationMostActiveDepartureTime/CitiBikeAnalysis?publish=yes'
        },
        {
            title: 'Earthquakes Analysis',
            message: `Or we can acquire earthquake and tactonic plates information in a GeoJSON format from an USGS API and with the use of HTML, CSS, JavaScript and Leaflet CDN display the world's latest earthquakes' locations, magnitude and depth on different map styles.`,
            images: ['leaflet-map1.png', 'leaflet-map2.png', 'leaflet-map1.png'],
            website: ''
        },
        {
            title: 'Latitude & Weather Analysis',
            message: `Or how about obtaining current weather of hundreds of cities around the world to conduct your own study about the effect of latitude on the climate and then displaying it on your own interactive website.`,
            images: ['web_1.png', 'web_2.png'],
            website: '/Weather_And_Latitude_Analysis'
        },
        {
            title: 'Employees Management Node Sql Js',
            message: `How about if we create a backend application that manages employee\'s data with the use of SQL, Node and JavaScript?`,
            images: ['empMgmt1.png', 'empMgmt2.png', 'empMgmt3.png', 'empMgmt4.png', 'empMgmt5.png', 'empMgmt6.png'],
            website: ''
        },
        {
            title: 'Schools Analysis',
            message: `For example with the Python language and Pandas library we conduct an analysis of reginal schools' data to obtain an inside on school budget, school types, students count, passing averages of the math and reading scores to determine the difference between charter or district, inexpensive or expensive schools have on overall passing grades.`,
            images: ['pandas-4.png', 'pandas-1.png', 'pandas-2.png', 'pandas-3.png'],
            website: ''
        },
        {
            title: 'SQL Database Management',
            message: `Let's create a backend application with the use of NodeJS and MySQL to create, read, update and delete data of and online store on a SQL database server.`,
            images: ['gamazon2.png', 'gamazon3.png', 'gamazon1.jpg'],
            website: ''
        },
        {
            title: 'Cancer Drugs Analysis',
            message: `How about if with the use of Python, Jupyter Notebook, Pandas and Matplotlib we analyze drugs' information to determine which drug is the most effective against cancer and visualize the results and predictions of the information analyzed.`,
            images: ['matplotlib_lab.jpg', 'matplotlib_boxplot.png', 'matplotlib_line.png', 'matplotlib_pie.png', 'matplotlib_regression.png'],
            website: ''
        },
        {
            title: 'Biodiversity',
            message: `Or what about creating a interative dashboard with JavaScript and D3JS library that allows us to analyze biodiversity very close to home, our belly button. How about if with the Python language we analyze financial data to obtain a summary of revenue fluctuations in which we can see the average revenue change, total gain or loss, greatest increase and greatest decrease.`,
            images: ['plotly_1.png'],
            website: ''
        },
        {
            title: 'Professional ReadMe Generator',
            message: 'We can also create an application that builds a professional readme file for any project.',
            images: ['readme4.png','readme3.png','readme2.png','readme.png'],
            webside: ''
        },
        {
            title: 'React Memory Game',
            message: `How about if we start by creating a single page react game application which reinforces memory power.  Which the objective of the game would be to click all images once as the change position in every click`,
            images: ['reactMemoryGame.png'],
            website: '/react-memory-game/'
        },
        {
            title: 'GenPass',
            message: `It's difficult to keep creating passwords to secure all our electronic interactions and remembering them when you need them.  Imagine creating a password management solution.`,
            images: ['genPass1.png','genPass2.png','genPass3.png','genPass4.png','genPass5.png','genPass6.png'],
            website: '/Password-Generator/'
        },
        {
            title: 'Spiritual Engineering',
            message: `How about if we strive for greatness and we provide the users more than a game.  We provide them with a spiritual experience like no other`,
            images: ['SpiritualEngineering.png'],
            website: '/SpiritualEngineering/'
        },
        {
            title: 'Node Team Builder',
            message: `Let's create a backend node application which inquires about team members and builds a html dashbord with members' info on a card`,
            images: ['team.jpg','team1.png'],
            website: ''
        },
        {
            title: 'Python Budget Analysis',
            message: `How abut if with Python we do a budget analysis of a company that outputs a report in which we determine total revenue, greatest increase, average change, etc.`,
            images: ['python0.png','python2.png'],
            website: ''
        },
        {
            title: 'Weather Dashboard',
            message: `Let's create an application that provides a weather dashboard from which you can obtain current weather conditions for any city and a five days forecast, all from a public API.  This includes the UV index with a numeric value and danger color scale.`,
            images: ['weather.png'],
            website: '/WeatherForecast'
        },
        {
            title: 'Mission to Jupiter',
            message: `Imagine automatically going to multiple NASA's websites and collecting information about Jupiter to store it on a SQL database and display it any way you like on your own website.`,
            images: ['jup_2.png', 'jup_3.png'],
            website: ''
        },
        {
            title: 'SQL Data Management',
            message: `How about creating a full stack application that through a website securely manages a restaurant's data on an SQL Database server.`,
            images: ['crudburger1.png', 'crudburger1.png'],
            website: ''
        },
        {
            title: 'Mission to Mars',
            message: `How about if we display the latest news and updates of the planet Mars by scrapping the latest images, news and weather information from NASA, Twitter, Space Facts and USGS websites.`,
            images: ['mars2.png', 'mars3.png', 'mars4.png', 'mars5.png'],
            website: ''
        },
        {
            title: 'Online Train Scheduler',
            message: `Imagine using Firebase, an online Google Database that through the use of a website allows us to manage a train's scheduler live.`,
            images: ['firebase1.jpg','firebase2.png'],
            website: ''
        },
        {
            title: 'React Portfolio',
            message: `Imagine creating a react portfolio that showcase some of your created applications and provides contact information`,
            images: ['portfolio1.png','portfolio2.png','portfolio3.png','portfolio4.png','portfolio5.png','portfolio6.png','portfolio7.png'],
            website: '/Portfolio/'
        },
        {
            title: 'LIRI a SIRI\'s simulation',
            message: `How about if we create a backend application that similates Iphone's SIRI.  While SIRI is a speech interpretation and recognition interface, our app would be a language interpretation and recognition interface.  With the use NodeJS and a few APIs we would create command line app that would provide Spotify songs, concerts from Bands in Town, tweets from Twitter and movies from OMDB.`,
            images: ['liri1.png', 'liri2.png', 'liri3.png', 'liri4.png'],
            website: ''
        }
    ];