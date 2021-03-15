# Milestone Project 2 - Weather Now

---

## Table of Contents:

- [What is Weather Now?](#what-does-it-do-and-what-does-it-need-to-fulfill)
- [User Experience](#user-experience)
  - [User Stories](#user-stories)
  - [Design](#design)
    - [Objective](#objective)
    - [Font](#font)
    - [Colour Scheme](#colour-scheme)
    - [Logo](#logo)
    - [Wireframes](#wireframes)
- [Technologies Used](#technologies-used)
  - [Languages](#languages)
  - [Tools Used](#tools-used)
- [Features](#features)
  - [Current Features](#current-features)
  - [Future Features](#future-features)
- [Testing](#testing)
- [Deployment](#deployment)
- [External Resources](#external-resources)
- [Credits](#credits)
- [Acknowledgements](#acknowledgements)

---

<h1 style="text-align: center;">Weather Now</h1>

<span style="display: flex;justify-content: center;">
<img src="./markdown-images/readme-header.png" alt="readme-header" width="50%"/>
</span>

---

## What is Weather Now?

Weather Now - Milestone Project #2 - is a Front-end Web Application that provides Users with live weather data and forecast data. For Milestone Project #2, it helps demonstrate updating DOM elements with JSON from a REST API. It also provides another chance to solidify and practice more CSS and Design Skills.

[Back to top](#table-of-contents)

## User Experience:

#### User Stories:

- _As a User_, I want to be able to input my own custom location into an input field in order to get weather data from my desired location.
  <br>
- _As a User_, I want to be able to successfully submit my input in order to retrieve weather data for my input.
  <br>
- _As a User_, I want some sort of feedback to let me know my search request has went through.
  <br>
- _As a User_, I want to be able to use my device's location in order to get weather data without needing to type in my location.
  <br>
- _As a User_, I want to be able to view the results of my successful search in order to get an idea of the current weather.
  <br>
- _As a User_, I want to view the next few days of weather data for my searched location so that I can gain an idea of what the weather will be like in the future.
  <br>
- _As a User_, I want to be able to click a hyperlink that will redirect me to a google maps view of my location so I can better plan a trip or excursion.

#### Design

##### Objective

The main objective was to make an intuitive UX, the user should not be confused when visiting the Website. To achieve this, the approach was to use a simple, succinct, one-page web application. The User immediately sees an text-input that tells them to enter a location through a placeholder.

If the User is on Mobile, the UX objective was to limit the amount of User Actions to perform a search. This was achieved by using a 'Current Location' button, so they can get search results within one click.

The results of the search needed to be clear while also not bombarding the User with information. The REST API that collected Weather Data had a lot of data that could be displayed, so there was a process of elimination to decide what information is most important to the user - i.e what causes them to make a search, what do they want?

##### Font

The chosen font for the application was [Poppins](https://fonts.google.com/specimen/Poppins?preview.text_type=custom). It is a clear and legible font that is very mobile friendly.

If the Browser the User uses doesn't support this font or Google Fonts is down, the back-up font is 'sans-serif' which should be built into all modern Operating Systems.

##### Colour Scheme

- ![#082F5C](https://placehold.it/15/082F5C/000000?text=+) `#082F5C` - Primary colour
- ![#0A5ED7](https://placehold.it/15/0A5ED7/000000?text=+) `#0A5ED7` - Secondary colour
- ![#E8E8E8](https://placehold.it/15/E8E8E8/000000?text=+) `#E8E8E8` - Tertiary colour
- ![#E69F6A](https://placehold.it/15/E69F6A/000000?text=+) `#E69F6A` - Supplementary colour
- ![#FF6D00](https://placehold.it/15/FF6D00/000000?text=+) `#FF6D00` - Supplementary colour 2

The colours were chosen to convey a clean and friendly design with colours that complemented eachother. The Input Container uses the `primary` ![#082F5C](https://placehold.it/15/082F5C/000000?text=+) colour while the buttons within that Input Container use the `secondary` ![#0A5ED7](https://placehold.it/15/0A5ED7/000000?text=+) `#0A5ED7` colour to provide some contrast between the two.

In order to prevent the whole application having a blue-theme in `primary` ![#082F5C](https://placehold.it/15/082F5C/000000?text=+) & `secondary` ![#0A5ED7](https://placehold.it/15/0A5ED7/000000?text=+) `#0A5ED7` - the toggle switch uses the supplementary colours - ![#E69F6A](https://placehold.it/15/E69F6A/000000?text=+) & ![#FF6D00](https://placehold.it/15/FF6D00/000000?text=+) in order to provide more contrast and distinguish it from its background.

The background for the body of content uses `tertiary` ![#E8E8E8](https://placehold.it/15/E8E8E8/000000?text=+) as the content of the weather containers are `white` - it also provides some contrast to distinguish the two.

##### 3. Logo

The logo was created on [logomakr](https://logomakr.com/). It provides a free, low resolution access to many image assets. The logo is consistent with the colour theme, it uses `primary`, `tertiary` and `supplementary colour 2`.

<span style="display: flex;justify-content: center;">
    <img src="./assets/images/fav.png" alt="logo" />
</span>

##### Wireframes

Wireframes were created using [Figma](https://www.figma.com/) and can be viewed [here](https://drive.google.com/file/d/1s7Hv7wWzHhgLbM9jab1OBNAycsc-QOtJ/view?usp=sharing).

As per the UX Objective, the goal was to create a simple and intuitive User Interface, initially, the colour schemes were different but as development went on, it was realized it needed more contrasting themes in order to engage the User.

The Wireframes were created at 3 target resolutions:

- Desktop - 1920px x 1080px

<img src="./markdown-images/desktop-wireframe.png" alt="desktop">

- Tablet - 768px x 1024px

<img src="./markdown-images/tablet-wireframe.png" alt="tablet">

- Mobile - 360px x 720px

<img src="./markdown-images/mobile-wireframe.png" alt="mobile">

[Back to Top](#table-of-contents)

---

## Technologies Used

#### Languages

- HTML5
- CSS3 & Bootstrap 5
- JavaScript

#### Tools Used

- [OpenWeatherMap API](https://openweathermap.org/api)
  - Open Weather API was used to source all weather data both live and forecast. It requires an API key but the APIs used for this project were within the free-plan threshold.
- [Geolocation API](https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API)
  - Built most modern browsers, it grabs the User's device latitude and longitude, these details are then served to the OpenWeather API.
- [Country Flags API](https://www.countryflags.io/)
  - In order to improve UX, flags were also sourced to add to the results. Once the country was grabbed from OpenWeather, it was then served to Country Flags to retrieve a URL for that specific country's flag.
- [RNS Weather Icons](https://iconstore.co/icons/rns-weather-icons/)
  - Based on the description of the weather, the web application displays an appropriate weather image e.g Clear, Clouds, Rain etc.
- [Chrome Dev Tools](https://developers.google.com/web/tools/chrome-devtools)
  - Used for all debugging and testing. Ensured the page was responsive on all relevant devices.
- [Git / Github](https://git-scm.com/)
  - Github was used for remote storing of Version Control. Additionally, the Issues tab on the repository was used to effectively manage to-do items.
- [Stack Overflow](https://stackoverflow.com/)
  - Used to help debug certain issues and also code used to create CSS temperature toggler.
- [Google Fonts](https://fonts.google.com/)
  - The 'Poppins' font was sourced from Google Fonts, it is imported on line 1 of the stylesheet.
- [VSCode](https://code.visualstudio.com/)
  - VSCode was used as the development environemnt. It has a plethora of extensions which aided me in this project such as:
    - Prettier - format the code on every save.
    - Live Server - launch a local server hosting my index.html.
    - Markdown Preview Enhancement - write README.md and TESTING.md whilst having a preview tab that had live updates of my changes.
    - ESLint - analyzed my JS code and provided recommendations for issues. Led to overall cleaner code.

[Back to Top](#table-of-contents)

## Features

##### How to Use container

When the User visits the web application, there will be a 'how to use' container explaining the instructions on what the application offers. It details the three interactive options the User has before a result is shown.

##### Current Location Weather

The User can click the current location button which uses the Geolocation API, the browser will then ask the User permissiont to access their device's location. Once that is accepted, the weather results shown will be for that location - using latitude and longitude of the User's device.

##### Search Custom Location Weather

The User can instead, enter their own custom location into the Input. Once they click search, the weather API will return weather data for that location.

##### Live Weather

When the User submits a search - current or custom location - the app will display a live weather container. This live weather will have key information about the location. This includes Temperature, Humidity, Wind Speed, Sunrise, Sunset and a description of the weather e.g Cloudy.

It was decided that this information was most important to a User seeking live weather information. More information could have been added but could lead to overwhelming the User.

##### Forecast Weather

In addition to live weather, the User will receive Forecasted Weather for that location. It will provide the User with the _next_ 6 days of weather information - combined with live weather, totals to 7 day weather data. The Forecasted Weather prediction will have minimal but crucial information - date, temperature and weather description.

##### View Map

Using the coordinates of the location the User searched, there will be a hyperlink at the end of the results. It uses these coordinates to autofill a Google Maps query and bring the User to that location in Google Maps in another tab.

##### Footer

The footer contains information on how to contact me - Github, LinkedIn and Email. These buttons bring the User to another tab to view the app.

#### Future Features:

##### Forecast Graph

A future feature could provide data in another medium - through the usage of graphs. A line-graph can give the User an indication of where the weather temperature is trending i.e in the next couple of days, is it getting colder or warmer?

##### Individual Forecast View

The User can click on a given forecast day and it will expand with a view that has more information about that day's weather prediction.

##### Embed Weather Map

Embedding a widget such as windy.com for the User's location could give them another way to view the live weather data.

[Back to Top](#table-of-contents)

## Testing

Testing can be viewed at [TESTING.md](https://github.com/kenwilde1/weather-now/blob/main/TESTING.md)

[Back to Top](#table-of-contents)

## Deployment

The Weather Now application was deployed to GitHub Pages. Github pages reads from the `main` branch and then finds the `index.html` to host. Here are the following steps I undertook to deploy my application to Github Pages:

- Visit the [repository](https://github.com/kenwilde1/weather-now) page.
- Click on the Settings tab.
- Scroll down to Github Pages.
- Select source as `main`.
- Click Save.

A deployment of the site begins and the url is generated. This is also continuous deployment, when the main branch gets updated, Github pages will perform a new deployment with the new changes.

If you would like to run this locally or clone this repository, you can:

- Visit the [repository](https://github.com/kenwilde1/weather-now) page.
- Click on the Code tab above the files.
- Choose the Clone source e.g HTTPS.
- Open your Command Line / Terminal.
- Run the following command: `git clone <repo-url>`.
- (If you do not have git installed, you can visit [here](https://git-scm.com/downloads) to do so.)

This will then download a copy of the remote repository on Github to your local machine. To run the application, simply open `index.html`. As it is a front-end static website, you do not need to run it on a live server.

[Back to Top](#table-of-contents)

## Credits

[Back to Top](#table-of-contents)

#### Acknowledgements:

[Back to Top](#table-of-contents)
