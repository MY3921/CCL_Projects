let mysound;
let startstop;
let progress = 50;
let volValue = 0.5
let amplitude;
function preload() {
mySound = loadSound("assets/Rach.mp3")

}



function setup() {
  let canvas = createCanvas(800, 500);
  canvas.parent("p5-canvas-container");
  amplitude = new p5.Amplitude();
}

function draw() {
  let level = amplitude.getLevel()
  background(220);
  frameRate(60)
    if (mySound.isPlaying() == false) {
      progress = progress
      fill(255,0,0)
  }
  else {
    //progress += 0.29142381
    progress += 0.00485706
    fill(0,map(level,0,1,0,255),255-map(level,0,1,0,255))
  }
  strokeWeight(10)
  line(50,250,750,250)
  strokeWeight(1)
  circle(progress,250,map(level,0,0.01,25,75))
  mySound.setVolume(volValue)
  console.log(level)
  text(round(volValue,2),750,50)
  text(level,50,50)
  if (keyIsPressed === true) {
    if (key === "l"){
      volValue += (0.1/30)
    }
    if (key === "s") {
      volValue -= (0.1/30)
    }
  }
  volValue = constrain(volValue,0,1.0)
  
}

function mousePressed() {
  
  if(mySound.isPlaying() == false){
      mySound.play()
  }
  else {
  mySound.pause()
  }
    
}
  
    
    
  
  

