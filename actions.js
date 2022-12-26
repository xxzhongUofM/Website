function open_popup(element, imgStr) {
  document.getElementById('popupImg').src = element.src;
  document.getElementById('popup').style.display = 'block';

  // only hobby-1 shows the slideshow
  if (imgStr !== 'hobby-1') {
    document.getElementById('slideshow').style.display = 'none';
    document.getElementById('popupTxt').className = 'popup-txt';
  } else {
    document.getElementById('slideshow').style.display = 'block';
    document.getElementById('popupTxt').className = 'popup-txt slideshow-txt';
  }

  // make work popup images smaller
  if (imgStr.includes('work')) {
    document.getElementById('popupImg').className = 'work-img';
  } else {
    document.getElementById('popupImg').className = 'popup-img';
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
    document.getElementById('popupImg').src = '';
    document.getElementById('popupTxt').innerText = 
    'Meet Snowball! He is a really friendly yet naughty kitten. \
    He\'s always hungry and chases everything. His birthday is August 11th, 2022, so he is approximately ' + ageString + 
    ' Someone found him as a stray in Lansing, MI, and I adopted him on October 7th, 2022. He was chunky and had parasites, \
    but after a few vet visits and treatments, he\'s now completely parasite-free. If the pictures are moving too fast, hover over them to pause.';
  } else if (imgStr === 'hobby-3') {
    document.getElementById('popupTxt').innerText = 
    'I really like to go hiking with my friends when we all get the chance to. \
    I like the scenaries and it gives me an excuse to not look at my phone. \
    The photo above was actually taken by me on top of Mt. Baker-Snoqualmie, in front of Snow Lake.';
  } else if (imgStr === 'hobby-4') {
    document.getElementById('popupTxt').innerText = 
    'There are always good shows on Netflix, and my all time favorite is Alchemy of Souls. \
    I really liked the quirky and sassy way the actors and actresses talked. \
    The story line was also very intriguing and suspenseful. Definitely an 11/10.';
  } 
  
  else if (imgStr == 'work-1') {
    document.getElementById('popupImg').src = 'pictures/metalogowhite.png';
    document.getElementById('popupTxt').innerHTML = 
    'My most recent internship was at Meta from May 2022 to August 2022 in Seattle, Washington. I worked under the Reality Labs Pillar, specifically with AR glasses. \
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
}

function open_music_popup(element, imgStr) {
  if (imgStr === 'hobby-2') {
    document.getElementById('music-popup').style.display = 'block';
    document.getElementById('music-popupImg').className = 'popup-img ' + imgStr;
    document.getElementById('music-popupTxt').innerHTML = 
    'I sometimes play the piano too when I want to feel productive in my free time. \
    Currently, I\'m trying to learn Winter Wind and Rondo a Capriccio. \
    I\'ve learned about twelve pages of Rondo a Capriccio and one page of Winter Wind.' + '<br />' + '<br />';
  }
}

function hide_popup(element) {
  element.style.display = 'none';
}