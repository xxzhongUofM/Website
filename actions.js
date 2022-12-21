function open_popup(element, imgStr) {
  document.getElementById('popup').style.display = 'block';
  if (imgStr !== 'hobby-1') {
    document.getElementById('popupImg').className = 'popup-img ' + imgStr;
    document.getElementById('slideshow').style.display = 'none';
    document.getElementById('popupTxt').className = 'popup-txt';
  } else {
    document.getElementById('popupImg').className = 'popup-img';
    document.getElementById('slideshow').style.display = 'block';
    document.getElementById('popupTxt').className = 'popup-txt slideshow-txt';
  }
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
    ' Someone found him as a stray in Lansing, MI, and I adopted him on October 7th, 2022. He was really chunky, and had fleas and worms. \
    But after a few vet visits and treatments, he\'s now completely parasite free. If the pictures are moving too fast, hover over them to stop.';
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
  } else if (imgStr == 'game-1') {
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