function open_popup(element, imgStr) {
  document.getElementById('popup').style.display = 'block';
  document.getElementById('popupImg').className = 'popup-img ' + imgStr;
  if (imgStr === 'hobby-1') {
    document.getElementById('popupTxt').innerText = 
    'Meet Snowball! He is a really friendly yet naughty kitten.';
  } else if (imgStr === 'hobby-2') {
    document.getElementById('popupTxt').innerText = 
    'I sometimes play the piano too when I want to feel productive in my free time. \
    Currently, I\'m trying to learn Winter Wind and Rondo a Capriccio. \
    I\'ve learned around twelve pages of Rondo a Capriccio and one page of Winter Wind.';
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
}

function hide_popup(element) {
  element.style.display = 'none';
}