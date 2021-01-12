//SCROLL smoothly---------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
//TITLE animation---------------
// let titleArray = [' ','J','E','S','S','E',' ','H','E','L','M']
// setInterval(() => {
//   let end = titleArray.shift();
//   titleArray.push(end);
//   document.getElementById('title').innerHTML = titleArray.join('');
// }, 300);
//I MADE THESE section----------
async function chbg1(image1, image2, image3, text, tech, listNumber, link) {
  let div1 = document.getElementById('projectBG1');
  let div2 = document.getElementById('projectBG2');
  let div3 = document.getElementById('projectBG3');
  let div4 = document.getElementById('projectText');
  let div5 = document.getElementById('projectTech');
  let div6 = document.getElementById('projectList').children;
  let div6Number1 = div6.item(0);
  let div6Number2 = div6.item(1);
  let div6Number3 = div6.item(2);
  let div6Number4 = div6.item(3);
  let div6Number5 = div6.item(4);
  let div6Number6 = div6.item(5);

  div1.src = '';
  div2.src = '';
  div3.src = '';
  div4.innerText = '';
  div5.innerText = '';
  div6Number1.classList.remove('projectSelect');
  div6Number2.classList.remove('projectSelect');
  div6Number3.classList.remove('projectSelect');
  div6Number4.classList.remove('projectSelect');
  div6Number5.classList.remove('projectSelect');
  div6Number6.classList.remove('projectSelect');

  div1.style.opacity = '0';
  div2.style.opacity = '0';
  div3.style.opacity = '0';
  div4.style.opacity = '0';
  div5.style.opacity = '0';
}
function chbg2(image1, image2, image3, text, tech, listNumber, link) {
  let div1 = document.getElementById('projectBG1');
  let div2 = document.getElementById('projectBG2');
  let div3 = document.getElementById('projectBG3');
  let div4 = document.getElementById('projectText');
  let div5 = document.getElementById('projectTech');
  let div6 = document.getElementById('projectList').children;
  let div6Number = div6.item(listNumber);
  let div7 = document.getElementById('projectLink');

  div1.src = image1;
  div2.src = image2;
  div3.src = image3;
  div4.innerText = text;
  div5.innerText = tech;
  div6Number.classList.add('projectSelect');
  {
    link === ''
    ?
    div7.innerHTML = ''
    :
    div7.innerHTML = `<a href='${link}' target='_blank'> CHECK IT OUT <svg class='inline-block' xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 24 24" width="32" height="32" fill='#545454' preserveAspectRatio="xMinYMin" class="icon__icon"><path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"></path><path d="M11.828 9.586l-3.95 3.95a1 1 0 1 1-1.414-1.415l3.95-3.95H6.828a1 1 0 0 1 0-2h6a.997.997 0 0 1 1 1v6a1 1 0 1 1-2 0V9.587z"></path></svg></a>`
  }

  div1.style.opacity = '1';
  div2.style.opacity = '1';
  div3.style.opacity = '1';
  div4.style.opacity = '1';
  div5.style.opacity = '1';
  div7.style.opacity = '1';
}

function chbg(image1, image2, image3, text, tech, listNumber, link) {
  chbg1(image1, image2, image3, text, tech, listNumber).then(chbg2(image1, image2, image3, text, tech, listNumber, link));
}

// //I LIKE TO section---------
// // pick your text:
// let sentence = '...SOLVE PROBLEMS WITH COMPASSION+ INTEGRITY.';
// // split it up into an array of letters:
// let letters = sentence.split('');
// // set up the timer:
// const timer = ms => new Promise(res => setTimeout(res, ms));
// // setting whether or not it has been loaded already:
// let loaded = false;
// // async function:
// async function load () {
//   // loop over the length of the array of letters, creating span elements inside the 'testSpan' class, also using the ternary to break the lines where we want:
//   console.log(letters);
//   for(i = 0; i < letters.length; i++) {
//       let span = document.createElement("SPAN");
//       if (i == 8) {
//         span.innerHTML = `<br>${letters[i]}`;
//       } else if (i == 17) {
//         span.innerHTML = `<br>${letters[i]}`;
//       } else if (i == 22) {
//         span.innerHTML = `<br>${letters[i]}`;
//       } else if (i == 34) {
//         span.innerHTML = `<br>${letters[i]}`;
//       } else if (i == 45) {
//         span.innerHTML = `<br>${letters[i]}`;
//       } else {
//         span.innerHTML = letters[i];
//       }
//     // span.innerHTML = (i == 20 ? `<br>${letters[i]}` : letters[i]);
//     document.getElementById('animateDiv').appendChild(span).className = 'animateSpan';
//     // set timer length for loop cycle:
//   await timer(30);
// };
// console.log(loaded);
// }
// // call the whole function when scrolled to:
// const config = {
//   root: null,
// }
// const visibleDiv = document.querySelector('#animateDiv');
// let isLeaving = false;
// let observer = new IntersectionObserver(function(entries) {
//   entries.forEach(entry => {
//     if (entry.isIntersecting && loaded === false) {
//       loaded = true;
//       load();
//     } else {
//       console.log('not rendered on entry')
//     }
//   });
// }, config);
// observer.observe(visibleDiv);

// INFO section svg animation
const textPath = document.querySelector("#text-path");
const parallax = document.querySelector('.parallax');
const group3 = document.querySelector('#group3')

const hz = parallax, 
      bz = group3,
      stz = 'scrollTop',
      shz = 'scrollHeight';

      console.log('hz: ', hz);
      console.log('bz: ', bz);

parallax.addEventListener("scroll", e => {
  let percent = (hz[stz]||bz[stz]) / ((hz[shz]||bz[shz]) - hz.clientHeight) * 100;
  textPath.setAttribute("startOffset", (-percent * 40) + 800)
  
  console.log(percent);
});