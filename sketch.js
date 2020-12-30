let w = window.innerWidth;
let h = window.innerHeight;
let sketch = function (p) {
  p.setup = function () {
    canvas = p.createCanvas(w, h);
    p.text('click**', 150, 150)
  }

  //tracking number of clicks:
  let times = -1;
  //array of technologies:
  let list = ['JAVASCRIPT', 'TYPESCRIPT', 'P5.JS', 'REACT.JS', 'CSS', 'TAILWIND', 'BOOTSTRAP', 'SQL', 'POSTGRES', 'HTML', 'PHOTOSHOP', 'ILLUSTRATOR', 'FIGMA', 'GITHUB', 'HEROKU', 'FIREBASE']

  p.mouseClicked = function () {
    if (times === 15) {
      times = -1;
    } else {
      times = times += 1;
    }
    console.log(p.mouseX, p.mouseY);
    p.text(list[times], p.mouseX, p.mouseY);
    // prevent default
    // return false;
  }
  // window.onresize = function() {
  //   //assigns new values for width and height variables
  //   w = window.innerWidth;
  //   h = window.innerHeight;  
  //   canvas.p.size(w,h);
  //   times = -1;
  // }
};
new p5(sketch, window.document.getElementById('p5Projects'));