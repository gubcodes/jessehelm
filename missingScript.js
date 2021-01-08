let sentenceX = '...MISSING_FILE:JESSE.JPG...MISSING_FILE:JESSE.JPG';
let lettersX = sentenceX.split('');
setInterval(() => {
  let endX = lettersX.shift();
  lettersX.push(endX);
  let divs = document.getElementsByClassName('l');
  for(i = 0; i < divs.length; i++){
    divs[i].innerHTML = lettersX.join('');
  }
}, 130);
//move right to left with string by classname:
let sentenceY = '/////////////////////////////////////////////ERROR';
let lettersY = sentenceY.split('');
setInterval(() => {
  let endY = lettersY.pop();
  lettersY.unshift(endY);
  let divs2 = document.getElementsByClassName('r');
  for(i = 0; i < divs2.length; i++){
    divs2[i].innerHTML = lettersY.join('');
  }
}, 90);
console.log('missing');