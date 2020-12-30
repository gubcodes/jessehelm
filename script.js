//smooth scroll:
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
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