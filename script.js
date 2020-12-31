//smooth scroll:
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
//I MADE THESE section----------
function chbg(image1, image2, image3) {
  let div1 = document.getElementById('projectBG1');
  let div2 = document.getElementById('projectBG2');
  let div3 = document.getElementById('projectBG3');

  div1.style.backgroundImage = `url(${image1})`;
  div2.style.backgroundImage = `url(${image2})`;
  div3.style.backgroundImage = `url(${image3})`;

  div1.style.opacity = '1';
  div2.style.opacity = '2';
  div3.style.opacity = '3';
}
//I LIKE TO section---------
// pick a your text:
let sentence = 'I ALSO LIKE TO CODE THINGS LIKE THIS. ARTSY STUFF AND BLAH BLAH BLAH...';
// split it up into an array of letters:
let letters = sentence.split('');
// set up the timer:
const timer = ms => new Promise(res => setTimeout(res, ms));
// setting whether or not it has been loaded already:
let loaded = false;
// async function:
async function load () {
  // loop over the length of the array of letters, creating span elements inside the 'testSpan' class, also using the ternary to break the lines where we want:
  for(i = 0; i < letters.length; i++) {
      let span = document.createElement("SPAN");
    span.innerHTML = (i == 20 ? `<br>${letters[i]}` : letters[i]);
    document.getElementById('animateDiv').appendChild(span).className = 'animateSpan';
    // set timer length for loop cycle:
  await timer(30);
};
console.log(loaded);
}
// call the whole function when scrolled to:
// load();
const config = {
  root: null,
}
const visibleDiv = document.querySelector('#animateDiv');
let isLeaving = false;
let observer = new IntersectionObserver(function(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting && loaded === false) {
      loaded = true;
      load();
    } else {
      console.log('not rendered on entry')
    }
  });
}, config);
observer.observe(visibleDiv);