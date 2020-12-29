//smooth scroll:
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
//projects section hover images
// function chbg(image1, image2, image3) {
//   window.setTimeout(chbg1(image1), 10000);
//   window.setTimeout(chbg2(image2), 20000);
//   window.setTimeout(chbg3(image3), 30000);
// }
// function chbg1(image1) {
//   document.getElementById('projectBG1').style.backgroundImage = `url(${image1})`;
// }
// function chbg2(image2) {
//   document.getElementById('projectBG2').style.backgroundImage = `url(${image2})`;
// }
// function chbg3(image3) {
//   document.getElementById('projectBG3').style.backgroundImage = `url(${image3})`;
// }
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

  // div1.style.animation = 'spin .5s linear 1';
}