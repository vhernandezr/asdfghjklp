var insec;
var insec2;
var insec3;
var insec4;
var insec5;
var insec6;
var insec7;
var insec8;
var insec8;
var insec9;
var insec10;
var insec11;
var insec12;

function preload() {
  insec = loadImage('aaa.jpg');
  insec2 = loadImage('asdf.png');
  insec3 = loadImage('zzzz.png');
  insec4 = loadImage('iii.png');
  insec5 = loadImage('vvv.png');
  insec6 = loadImage('aaaxxx.png');
  insec7 = loadImage('vbb.png');
  insec8 = loadImage('bnn.png');
  insec9 = loadImage('ggh.png');
  insec10 = loadImage('yuh.png');
  insec11 = loadImage('pppp.png');
  insec12 = loadImage('oooo.png');
}

function setup() {
  createCanvas(800, 800);
  background(0);
  image(insec, 0, 0, 200, 200);
 
  image(insec11, 200,200, 200, 200);
  image(insec3, 200, 0, 200, 200);
  image(insec4, 0, 200,200, 200);
  image(insec5, 400, 0, 200, 200);
  image(insec6, 0, 400,200, 200);
  image(insec7, 400, 200, 200, 200);
  image(insec8, 200, 400,200, 200);
  image(insec9, 600, 0, 200, 200);
  image(insec10, 600, 200, 200, 200);
  image(insec12, 600, 400, 200, 200);
  image(insec2, 400, 400, 200, 200);
  textSize(50);
  textAlign(CENTER);
  fill(255);
  text("¿Soy un insecto?", 400, 700);
}

function draw() {
  
  strokeWeight(5);
  
  line(0,200,800,200);
  line(200,0,200,600);
  line(400,0,400,600);
  line(600,0,600,600);
  line(0,200,800,200);
  line(0,200,800,200);
  line(0,400,800,400);
  line(0,600,800,600);
 
  
if (mouseIsPressed == true) {

      if ((mouseX > 0) && (mouseX <= 200) && (mouseY > 0) && (mouseY <= 200)){ 
  tint(250,0, 0);
    image(insec, 0, 0,200, 200);
      }
    
    if ((mouseX > 200) && (mouseX <= 400) && (mouseY > 0) && (mouseY <=200)){ 
    tint(0,255, 100);
    image(insec3, 200, 0,200, 200);
      }
   if ((mouseX > 400) && (mouseX <= 600) && (mouseY > 0) && (mouseY <=200)){ 
    tint(0,255, 100);
    image(insec5, 400, 0,200, 200);
      }
   if ((mouseX > 600) && (mouseX <= 800) && (mouseY > 0) && (mouseY <=200)){ 
    tint(0,255, 100);
    image(insec9, 600, 0,200, 200);
      }
   if ((mouseX > 0) && (mouseX <= 200) && (mouseY > 200) && (mouseY <=400)){ 
    tint(0,255, 100);
    image(insec4, 0, 200,200, 200);
      }
   if ((mouseX > 200) && (mouseX <= 400) && (mouseY > 200) && (mouseY <=400)){ 
    tint(255,0,0);
    image(insec11, 200, 200,200, 200);
      }
   if ((mouseX > 400) && (mouseX <= 600) && (mouseY >200) && (mouseY <=400)){ 
    tint(0,255, 100);
    image(insec7,400, 200,200, 200);
      }
   if ((mouseX > 600) && (mouseX <= 800) && (mouseY > 200) && (mouseY <=400)){ 
    tint(255,0,0);
    image(insec10, 600, 200,200, 200);
      }
   if ((mouseX > 0) && (mouseX <= 200) && (mouseY > 400) && (mouseY <=600)){ 
    tint(0,255, 100);
    image(insec6, 0, 400,200, 200);
      }
  if ((mouseX > 200) && (mouseX <= 400) && (mouseY > 400) && (mouseY <=600)){ 
    tint(0,255, 100);
    image(insec8, 200, 400,200, 200);
      }
  if ((mouseX > 400) && (mouseX <= 600) && (mouseY > 400) && (mouseY <=600)){ 
    tint(0,255, 100);
    image(insec2, 400, 400,200, 200);
      }
  if ((mouseX > 600) && (mouseX <= 800) && (mouseY > 400) && (mouseY <=600)){ 
    tint(255,0, 0);
    image(insec12, 600, 400,200, 200);
      
      }
  
}}
