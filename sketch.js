let w = window.innerWidth;
let h = window.innerHeight;
let sketch = function (p) {
  p.setup = function () {
    canvas = p.createCanvas(w, h);
    p.textFont('tuffybold');
    if (w >= 600) {
      p.textSize(32)
      p.fill(255,255,255)
      p.text('//HINT: CLICK', w / 1.75, h / 4);
    } else {
      p.textSize(18)
      p.fill(255,255,255)
      p.text('//HINT: TAP', w / 1.75, h / 4);
    }
    p.fill(255,255,255)
  }
  //tracking number of clicks:
  let times = -1;
  //array of technologies:
  let list = ['JAVASCRIPT', '', 'TYPESCRIPT', '', 'P5.JS', '', 'REACT.JS', '', 'CSS', '', 'TAILWIND', '', 'BOOTSTRAP', '', 'SQL', '', 'NODE.JS', '', 'POSTGRES', '', 'HTML', '', 'PHOTOSHOP', '', 'ILLUSTRATOR', '', 'FIGMA', '', 'SVG', '', 'GITHUB', '', 'HEROKU', '', 'FIREBASE', '', 'MSPAINT', '', 'HTML', '', 'FLOPPY DISKS', '', 'VHS', '', 'Hi8', '']
  p.touchStarted = function () {
    if (times === list.length - 1) {
      times = 0;
    } else {
      times = times += 1;
    }
    console.log(p.mouseX, p.mouseY);
    p.text(list[times], p.mouseX, p.mouseY);
    // prevent default
    // return false; //makes navigation not work
  }
  // window.onresize = function() {
  //   //assigns new values for width and height variables - doesn't seem to work
  //   w = window.innerWidth;
  //   h = window.innerHeight;  
  //   canvas.p.size(w,h);
  //   times = -1;
  // }
};
new p5(sketch, window.document.getElementById('p5Projects'));