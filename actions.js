// opens the popup and populates it based on if the element is a hobby (not music), work experience, or game
// all three types of popups use the same div in the html
let currentActive = null;
function open_popup(element, imgStr) {
  document.getElementById('popupImg').src = element.src;
  document.getElementById('popup').style.display = 'block';

  // only hobby-1 shows the slideshow
  if (imgStr !== 'hobby-1') {
    document.getElementById('slideshow').style.display = 'none';
    document.getElementById('popupTxt').className = 'popup-txt';
  } else {
    document.getElementById('popupImg').src = '';
    document.getElementById('slideshow').style.display = 'block';
    document.getElementById('popupTxt').className = 'popup-txt slideshow-txt';
  }

  // make work popup images smaller
  if (imgStr.includes('work')) {
    document.getElementById('popupImg').className = 'work-img';
  } else {
    document.getElementById('popupImg').className = 'popup-img';
  }

  if (currentActive === imgStr) {
    return;
  }

  // add text for each different popup
  if (imgStr === 'hobby-1') {
    const birthdate = new Date('08/11/2022');
    const today =  new Date();
    const age = new Date(today - birthdate);
    const epoch = new Date(0);
    const approxYears = age.getUTCFullYear() - epoch.getUTCFullYear();
    const approxMonths = age.getUTCMonth() - epoch.getUTCMonth();
    const approxDays = age.getUTCDate() - epoch.getUTCDate();
    const ageString = '' + approxYears + ' years, ' + approxMonths + ' months, and ' + approxDays + ' days old.';
    document.getElementById('popupTxt').innerText = 
    'Meet Snowball! He is a really friendly yet naughty kitten. \
    He\'s always hungry and chases everything. His birthday is August 11th, 2022, so he is approximately ' + ageString + 
    ' Someone found him as a stray in Lansing, MI, and I adopted him on October 7th, 2022. He was chunky and had parasites, \
    but after a few vet visits and treatments, he\'s now completely parasite-free. If the pictures are moving too fast, hover over them to pause.';
  } else if (imgStr === 'hobby-3') {
    document.getElementById('popupTxt').innerText = 
    'I really like to go hiking with my friends when we all get the chance to. \
    I like the scenery and it gives me an excuse to not look at my phone. \
    The photo above was actually taken by me on top of Mt. Baker-Snoqualmie, in front of Snow Lake.';
  } else if (imgStr === 'hobby-4') {
    document.getElementById('popupTxt').innerHTML = 
    'There are always good shows on Netflix, and my all time favorite is Alchemy of Souls. \
    I really liked the quirky and sassy way the actors and actresses talked. \
    The story line was also very intriguing and suspenseful. Definitely an 11/10. \
    <br /> <video onloadstart="this.volume=0.2" controls alt=""><source src="media/alchemytrailer.mp4" type="video/mp4"></video>';
  } 

  else if (imgStr == 'work-0') {
    document.getElementById('popupTxt').innerHTML = 
    'My most recent internship was at Google from May 2023 to September 2023 in Mountain View, California. I worked under the YouTube product area, \
    specifically with YouTube Shopping, focusing on merchants. <br /><br /> YouTube Shopping partners up with  \
    third parties, such as Rakuten, to advertise products to sell. These third parties provide YouTube with commission for sales, as well as relevant \
    information. The problem is that YouTube receives the sales data by third party uploading the data through SFTP every day. \
    However, this made us depend on an outdated way to receive data, and we would only receive data once every day. \
    I was tasked to improve the data retrieval by switching from a push to a pull system. I created a fetch pipeline \
    and used different internal libraries to call third party affiliate APIs to retrieve the data. \
    I then created another pipeline to convert different third party data into one standardized format. \
    Finally, I created an internal dashbaord to compare pushed and fetched data to make sure they\'re the same and also \
    to show some preliminary analytics. I productionized the code through Google Borg to allocate resources and schedule them to run \
    every morning so the team would have updated data every day even if they did not run the code on-demand. \
    <br /><br /> Due to NDAs, I can\'t share a lot of specifics or images, but just know that if you \
    every come across a shopping UI in YouTube, I worked on part of it.'
  } else if (imgStr == 'work-1') {
    document.getElementById('popupImg').src = 'pictures/metalogowhite.png';
    document.getElementById('popupTxt').innerHTML = 
    'I interned at Meta from May 2022 to August 2022 in Seattle, Washington. I worked under the Reality Labs Pillar, specifically with AR glasses. \
    <br /><br /> Facebook\'s AR environment didn\'t have a way to measure the glasses\' software and hardware performance, so I was tasked with creating a \
    performance tracking overlay. First, I created a settings app in Android Java to let users choose which metrics they want to see. \
    Then, I calculated metric performances, such as FPS, in C++. Finally, I used a little bit of OpenGL in C++ to draw a layer on top of \
    every app to act as the overlay so users could see the device performance while running other different apps in the background. \
    I still had time after I completed my project, so I also created a shell script that internal developers could run to add additional metrics \
    to the settings and overlay instantly. The only code they would need to add would be how the metric is calculated in C++. <br /> <br />Due to NDAs, I\'m \
    unable to share specific pictures or other non-approved details, but a similar example would be the ' + 
    '<a href=\'https://developer.oculus.com/documentation/unity/ts-ovrstats/\' target=\'_blank\'>OVR Metrics Tool</a> in Oculus VR';
  } else if (imgStr == 'work-2') {
    document.getElementById('popupTxt').innerHTML = 
    'I have worked at GM for about a year and a half from Janury 2021 to May 2022 in Warren, Michigan while pursuing my master\'s degree. \
    <br /><br /> GM\'s internal time tracking tool is very old, so my team and I were tasked with creating a completely new one with an updated tech stack. \
    Originally, I was part of the UI team, and we mainly focused on creating different sub pages in Angular with HTML and Typescript. \
    After the web pages were created, we became more of a full stack team, fixing any frontend bugs, as well as helping the backend team \
    finish the sub pages in Java and Postgres. The main customer of the web page is the business team, and I worked really closely with them \
    to complete their requirements. From what I\'ve been told, this tool is set to be released in February 2023.';
  } else if (imgStr == 'work-3') {
    document.getElementById('popupImg').src = 'pictures/amazonlogowhite.png';
    document.getElementById('popupTxt').innerHTML = 
    'I interned at Amazon from June 2020 to August 2020 in Detroit, Michigan. I worked under the Marketplace Web Service Pillar in the \
    Developer User Experience team. <br /><br/> Amazon MWS internal developers have a forum page that external sellers can use to leave feedback, such as\
    issues, suggestions, compliments, etc. However, developers will have to read through each feedback one by one to process them, which is \
    very time consuming. I was tasked to make processing easier by creating a feedback collection system. In the forum, I added a widget that allows \
    sellers to leave feedback in the forum page so that the forum is focused on discussions, and the widget is focused on one sided comments and issues for \
    internal developers. I used AWS DynamoDB to collect the feedback and fed them into AWS Comprehend to run NLP with \
    <a href=\'https://docs.aws.amazon.com/comprehend/latest/dg/topic-modeling.html\' target=\'_blank\'>topic modeling</a> \
    to find the main topics of discussion. I created a React dashboard using Chart.js to graph out the top ten topics being discussed. \
    Developers are then able to look at the dashboard to quickly find if a lot of people are talking about certain issues and can read \
    through less feedback to pinpoint issues. I successfully completed my project, and I was told that it was released to production \
    the week after my internship ended. <br/><br/> The dashboard was meant for internal developers so I\'m unable to share it, but the widget can be seen \
    <a href=\'https://sellercentral.amazon.com/\' target=\'_blank\'>here</a> on the bottom right of the web page.';
  } else if (imgStr == 'work-4') {
    document.getElementById('popupTxt').innerHTML = 
    'My first internship was at Siemens Healthineers from May 2019 to August 2019 in Issaquah, Washington under the Ultrasound team. <br/><br/>\
    The ultrasound machines switched from C++ to C#, but the data generations were still in C++ so the ultrasound was not able to process test data. \
    I was tasked to create a reports driver to be installed into the ultrasound to connect the ultrasound\'s C# code to the reports\' C++ code. \
    I created the application in C# and after finishing the project, I also played around with XML files to fix some UI configurations. \
    My manager emailed me a few weeks after my internship to let me know that this project was successfully pushed to production. \
    <br/><br/> There\'s not much I can show since it was an internal tool, but the ultrasound UI looked similar to \
    <a href=\'https://marketing.webassets.siemens-healthineers.com/1800000006813247/7513f0fc6a2a/v/e760f95cb23c/siemens-healthineers-news-and-events-AI_Rad_Companion_confirmation_user_interface.jpg\' target=\'_blank\'>this</a>.';
  } 
  
  else if (imgStr == 'game-1') {
    document.getElementById('popupTxt').innerHTML = 
    'Introduction to Unity: Super RollABall' + 
    '<br />' + '<br />' + 
    'Super RollABall was my first Unity game. This was tutorial one in EECS 494 for students \
    to establish basic familiarity and experience with the Unity game engine.' + '<br />' + '<br />' + 
    '<a href=\'https://xxzhonguofm.github.io/Super-RollABall/index.html\' target=\'_blank\'>Play Now!</a>' + '<br />' + 
    'Use the arrow keys to move and the space button to jump.';
  } else if (imgStr == 'game-2') {
    document.getElementById('popupTxt').innerHTML = 
    'Introduction to Unity: Super Flappy Bird' + '<br />' + '<br />' + 
    'For tutorial two in EECS 494, we were tasked to remake Flappy Bird and we learned how to repeat the terrain.' + 
    '<br />' + '<br />' + '<a href=\'https://xxzhonguofm.github.io/Super-Flappy-Bird/index.html\' target=\'_blank\'>Play Now!</a>' + 
    '<br />' + 'Player 1 (Yellow) left click to fly, Player 2 (Green) space bar to fly';
  } else if (imgStr == 'game-3') {
    document.getElementById('popupTxt').innerHTML = 
    'The Legend of Zelda, Dungeon' + '<br />' + '<br /s>' + 
    'After quickly ramping us up on Unity skills, EECS 494 officially released project 1, \
    which was remaking a part of a classic NES game. We were allowed one other team member, so my friend Nick and I partnered up \
    and chose to remake Zelda. We also had to create our own custom dungeon level with a unique mechanic.' + '<br />' + '<br />' + 
    '<a href=\'https://xxzhonguofm.github.io/Zelda/index.html\' target=\'_blank\'>Play Now!</a>' + '<br />' + 
    'Arrow keys to move, Z and X to attack, 1 for cheat, 4 for custom level';
  } else if (imgStr == 'game-4') {
    document.getElementById('popupTxt').innerHTML = 
    'Super UnityChan Galaxy' + '<br />' + '<br />' + 'Project 2 for EECS 494 was making our own unique game. \
    I saw a free template of UnityChan, so I decided to make her the main character. Pick up blocks to move \
    your way through this platform type game.' + '<br />' + '<br />' + 
    '<a href=\'https://xxzhonguofm.github.io/Super-UnityChan-Galaxy/index.html\' target=\'_blank\'>Play Now!</a>' + '<br />' + 
    'Game console controller required to play';
  } else if (imgStr == 'game-5') {
    document.getElementById('popupTxt').innerHTML = 
    'Grape Kun\'s Quest' + '<br />' + '<br />' + 
    'Project 3 was the final big project for EECS 494 and each group presented their project in the Winter 2020 \
    Computer Games Showcase. My group consisted of me and four other people: Nick, Alan, Alan, and Gary. We revolved our \
    game around comedy and rocket jumping. We had other groups playtest our game every week so we were constantly improving the gameplay.'+ 
    '<br />' + '<br />' + '<a href=\'https://xxzhonguofm.github.io/GrapeKun-s-Quest/index.html\' target=\'_blank\'>Play Now!</a>' + 
    '<br />' + 'WASD or arrow keys to move, and left click to shoot.';
  }

  currentActive = imgStr;
}

// the music popup has its own div so the music can continue if the user plays it and views another popup
// since each popup replaces the previous popup html
function open_music_popup(element, imgStr) {
  if (imgStr === 'hobby-2') {
    document.getElementById('musicPopup').style.display = 'block';
    document.getElementById('musicPopupImg').className = 'popup-img ' + imgStr;
    document.getElementById('musicPopupTxt').innerHTML = 
    'I sometimes play the piano too when I want to feel productive in my free time. \
    Currently, I\'m trying to learn Winter Wind and Rondo a Capriccio. \
    I\'ve learned about twelve pages of Rondo a Capriccio and one page of Winter Wind.' + '<br />' + '<br />';
  }
}

// opens the map popup when users click on the waypoints
// each waypoints has its own html popup, so the only parameter is to see which popup to display
// this was done this way versus replacing because loading images take a long time
function open_map_popup(waypointTitle) {
  const waypointDisplay = document.getElementById(waypointTitle);
  if (waypointDisplay !== null) {
    waypointDisplay.style.display = 'block';
    waypointFirstPicture = waypointDisplay.getElementsByTagName('input')[0];
    if (waypointFirstPicture) {
      waypointFirstPicture.checked = true;
    }
  }
}

// when the user clicks any non-image and non-link area, the popup will disappear
function hide_popup(element) {
  if (window.event.target.className.includes('container') || window.event.target.className.includes('popup')) {
    element.style.display = 'none';
  }
}

// initializes the google maps api to show the map and the direction of travel for the road trips
function initMap() {
  // Novi to Malibu
  const departDirectionsService = new google.maps.DirectionsService;
  const departDirectionsRenderer = new google.maps.DirectionsRenderer;

  const novi = {lat: 42.480629458143966, lng: -83.47552595949};
  const malibu = {lat: 34.02251688338473, lng: -118.83122196352342};
  
  const departWaypoints = {
    'Maquoketa Caves State Park': {'location': 'Maquoketa Caves State Park', 'stopover': true},
    'Rocky Mountains National Park': {'location': 'Rocky Mountains National Park', 'stopover': true},
    'Zion National Park': {'location': 'Zion National Park', 'stopover': true},
    'Grand Canyon National Park': {'location': 'Grand Canyon National Park', 'stopover': true},
  }
  const departCities = ['Novi, MI', ...Object.keys(departWaypoints), 'Zuma Beach'];
  const departMap = new google.maps.Map(document.getElementById('departMap'), {
    zoom: 4,
    center: novi,
  });

  departDirectionsRenderer.setMap(departMap);
  
  calculateAndDisplayRoute(departDirectionsService, departDirectionsRenderer, 
    'Novi, MI', 'Zuma Beach, CA', Object.values(departWaypoints));
  
  // gets the waypoints list to put an event listener on, b/c api doesn't have waypoint onclicks
  departDirectionsRenderer.addListener('directions_changed', () => {
    setTimeout(() => {
      console.log(departDirectionsRenderer);
      const departMarkers = departDirectionsRenderer.g.markers;
      for (const[index, m] of departMarkers.entries()) {
        m.setTitle(departCities[index]);
        // m.setLabel(departCities[index]);
        // need to store m into currentMarker const so event listeners don't overlap 
        const currentMarker = m;
        currentMarker.addListener('click', () => {
          open_map_popup(currentMarker.getTitle());
        });
      }
    }, 100);
  });

  // --------------------------------------------------------------------------------------------------------

  // Malibu to Novi
  const returnDirectionsService = new google.maps.DirectionsService;
  const returnDirectionsRenderer = new google.maps.DirectionsRenderer;

  const returnWaypoints = {
    'Sequoia National Park': {'location': 'Sequoia National Park', 'stopover': true},
    'Yosemite National Park': {'location': 'Yosemite National Park', 'stopover': true},
    'Yellowstone National Park': {'location': 'Yellowstone National Park', 'stopover': true},
    'Mount Rushmore National Memorial': {'location': 'Mount Rushmore National Memorial', 'stopover': true},
  }
  const returnCities = ['Huntington Beach', ...Object.keys(returnWaypoints), 'Novi, MI'];

  const returnMap = new google.maps.Map(document.getElementById('returnMap'), {
    zoom: 4,
    center: malibu,
  });

  returnDirectionsRenderer.setMap(returnMap);

  calculateAndDisplayRoute(returnDirectionsService, returnDirectionsRenderer, 
    'Huntington Beach, CA', 'Novi, MI', Object.values(returnWaypoints));

  // gets the waypoints list to put an event listener on, b/c api doesn't have waypoint onclicks
  returnDirectionsRenderer.addListener('directions_changed', () => {
    setTimeout(() => {
      console.log(returnDirectionsRenderer);
      const returnMarkers = returnDirectionsRenderer.g.markers;
      for (const [index, m] of returnMarkers.entries()) {
        m.setTitle(returnCities[index]);
        // need to store m into currentMarker const so event listeners don't overlap 
        const currentMarker = m;
        currentMarker.addListener('click', () => {
          open_map_popup(currentMarker.getTitle());
        });
      }
    }, 100);
  });
  
}

// uses the google directions api to calculate the best driving route
// this is not a 100% accurate route we took because the api only allows future dates
function calculateAndDisplayRoute(directionsService, directionsRenderer, start, end, waypts) {
  directionsService.route({
    origin: start,
    destination: end,
    waypoints: waypts,
    travelMode: 'DRIVING'
  }, function(response, status) {
    if (status === 'OK') {
      directionsRenderer.setDirections(response);
    } else {
      window.alert('Directions request failed due to ' + status);
    }
  });
}

