/*
Template for IMA's Creative Coding Lab 

Project A: Generative Creatures
CCLaboratories Biodiversity Atlas 
*/



function setup() {
  
  let canvas = createCanvas(800, 500);
    canvas.id("p5-canvas");
    canvas.parent("p5-canvas-container");
  //Creature-related variables
  v = 0.05;
  x = width / 2;
  y = height / 2;
  segment_1_x = 0;
  segment_1_y = 0;
  segment_2_x = 0;
  segment_2_y = 0;
  segment_3_x = 0;
  segment_3_y = 0;
  segment_4_x = 0;
  segment_4_y = 0;
  segment_5_x = 0;
  segment_5_y = 0;
  segment_6_x = 0;
  segment_6_y = 0;
  segment_7_x = 0;
  segment_7_y = 0;
  segment_8_x = 0;
  segment_8_y = 0;
  segment_9_x = 0;
  segment_9_y = 0;
  segment_10_x = 0;
  segment_10_y = 0;
  segment_11_x = 0;
  segment_11_y = 0;
  segment_12_x = 0;
  segment_12_y = 0;
  segment_13_x = 0;
  segment_13_y = 0;
  segment_14_x = 0;
  segment_14_y = 0;
  segment_15_x = 0;
  segment_15_y = 0;
  segment_16_x = 0;
  segment_16_y = 0;
  segment_17_x = 0;
  segment_17_y = 0;
  segment_18_x = 0;
  segment_18_y = 0;
  segment_19_x = 0;
  segment_19_y = 0;
  segment_20_x = 0;
  segment_20_y = 0;
  segment_21_x = 0;
  segment_21_y = 0;
  segment_22_x = 0;
  segment_22_y = 0;
  segment_23_x = 0;
  segment_23_y = 0;
  segment_24_x = 0;
  segment_24_y = 0;
  segment_25_x = 0;
  segment_25_y = 0;
  segment_26_x = 0;
  segment_26_y = 0;
  segment_27_x = 0;
  segment_27_y = 0;
  segment_28_x = 0;
  segment_28_y = 0;
  segment_29_x = 0;
  segment_29_y = 0;
  segment_30_x = 0;
  segment_30_y = 0;
  segment_31_x = 0;
  segment_31_y = 0;
  segment_32_x = 0;
  segment_32_y = 0;
  segment_33_x = 0;
  segment_33_y = 0;
  canvas_width = 800;
  canvas_height = 500;
  canvas_diagonal = sqrt(canvas_width ^ (2 + canvas_height) ^ 2);

  radius = 35;
  //Apple-related variables
  apple_x = 600;
  apple_y = 600;
  rand_x = random(50, 550);
  rand_y = random(50, 550);
  apple_rand = random(-1, 1);
  apple_z = radius;
  gameCount = 0;
  wave = 0
}

function draw() {
  //frameRate(constrain(frameCount/10,30,60));
  frameRate(60)
  //background

  for (let i = 60; i > 0; i -= random(0.1, 0.9)) {
    stroke(0);
    strokeWeight(0.01 * (i % 5));
    /*fill(
      (255 * dist(apple_x, apple_y, 400, 250)) / (471),
      abs(
        255 - (255 * dist(apple_x, apple_y, 400, 250)) / ((471) )
      ),
      255 * i/60
    );*/
    if (frameCount % 27000 > 21600) {
      fill(
        i * 4.25,
        255 * abs(sin((i * frameCount) % (2 * PI))),
        255 -
          map(
            constrain(dist(apple_x, apple_y, rand_x, rand_y), 75, 375),
            75,
            375,
            0,
            255
          )
      );
    } else {
      fill(
        i * 4.25,
        abs(cos((frameCount * 0.01) % (2 * PI))) * 255,
        255 - dist(apple_x, apple_y, rand_x, rand_y) / 150
      );
    }

    /*fill(map(constrain(dist(apple_x,apple_y,rand_x,rand_y),75,375),75,375,0,255),map(constrain(dist(apple_x,apple_y,rand_x,rand_y),75,375),75,375,255,0),i*4.25)
    fill(i,abs(255-i),frameCount%255)*/

    circle(apple_x, apple_y, i * 25);
    
    
    
    
  }
  
  //Experiments applying wave to background (essentially trying to replicate Alyx's code)
  /*for (let i = 0; i<1000; i+=1){
      let w = (frameCount - i*50) * 10
      
    if (w > 0){
      strokeWeight(5)
      stroke(255,255,255,map(w,0,1500,100,0))
      noFill()
       circle(apple_x, apple_y,w)
    }
     
    }*/
  //creature speed
  //v = lerp(0,dist(apple_x,apple_y,x,y)/50,0.01);
  //v = constrain(abs(sin(frameCount * 0.001))*0.05,0.01,0.04);

  //drawing creature
  noStroke();

  drawsegment(segment_1_x, segment_1_y, x, y, 5, radius);
  drawsegment(segment_2_x, segment_2_y, x, y, 10, radius);
  drawsegment(segment_3_x, segment_3_y, x, y, 15, radius);
  drawsegment(segment_4_x, segment_4_y, x, y, 20, radius);
  drawsegment(segment_5_x, segment_5_y, x, y, 25, radius);
  drawsegment(segment_6_x, segment_6_y, x, y, 30, radius);
  drawsegment(segment_7_x, segment_7_y, x, y, 35, radius);
  drawsegment(segment_8_x, segment_8_y, x, y, 40, radius);
  drawsegment(segment_9_x, segment_9_y, x, y, 45, radius);
  drawsegment(segment_10_x, segment_10_y, x, y, 50, radius);
  drawsegment(segment_11_x, segment_11_y, x, y, 55, radius);
  drawsegment(segment_12_x, segment_12_y, x, y, 60, radius);
  drawsegment(segment_13_x, segment_13_y, x, y, 65, radius);
  drawsegment(segment_14_x, segment_14_y, x, y, 70, radius);
  drawsegment(segment_15_x, segment_15_y, x, y, 75, radius);
  drawsegment(segment_16_x, segment_16_y, x, y, 80, radius);
  drawsegment(segment_17_x, segment_17_y, x, y, 85, radius);
  drawsegment(segment_18_x, segment_18_y, x, y, 90, radius);
  drawsegment(segment_19_x, segment_19_y, x, y, 95, radius);
  drawsegment(segment_20_x, segment_20_y, x, y, 100, radius);
  drawsegment(segment_21_x, segment_21_y, x, y, 105, radius);
  drawsegment(segment_22_x, segment_22_y, x, y, 110, radius);
  drawsegment(segment_23_x, segment_23_y, x, y, 115, radius);
  drawsegment(segment_24_x, segment_24_y, x, y, 120, radius);
  drawsegment(segment_25_x, segment_25_y, x, y, 125, radius);
  drawsegment(segment_26_x, segment_26_y, x, y, 130, radius);
  drawsegment(segment_27_x, segment_27_y, x, y, 135, radius);
  drawsegment(segment_28_x, segment_28_y, x, y, 140, radius);
  drawsegment(segment_29_x, segment_29_y, x, y, 145, radius);
  drawsegment(segment_30_x, segment_30_y, x, y, 150, radius);
  drawsegment(segment_31_x, segment_31_y, x, y, 155, radius);
  drawsegment(segment_32_x, segment_32_y, x, y, 160, radius);
  drawsegment(segment_33_x, segment_33_y, x, y, 165, radius);
  drawsegment(x, y, x, y, 0, radius);
  noStroke();
  //mouth...?
  /*fill(0)
  circle(x,y,radius-15)
  fill(255,0,0)
  circle(x,y,radius-25)
  fill(255,255,255)
  circle(x,y,radius-35)
  */

  //coordinate setting
  if (dist(x, y, apple_x, apple_y) > 5) {
    segment_33_x = segment_32_x;
    segment_32_x = segment_31_x;
    segment_31_x = segment_30_x;
    segment_30_x = segment_29_x;
    segment_29_x = segment_28_x;
    segment_28_x = segment_27_x;
    segment_27_x = segment_26_x;
    segment_26_x = segment_25_x;
    segment_25_x = segment_24_x;
    segment_24_x = segment_23_x;
    segment_23_x = segment_22_x;
    segment_22_x = segment_21_x;
    segment_21_x = segment_20_x;
    segment_20_x = segment_19_x;
    segment_19_x = segment_18_x;
    segment_18_x = segment_17_x;
    segment_17_x = segment_16_x;
    segment_16_x = segment_15_x;
    segment_15_x = segment_14_x;
    segment_14_x = segment_13_x;
    segment_13_x = segment_12_x;
    segment_12_x = segment_11_x;
    segment_11_x = segment_10_x;
    segment_10_x = segment_9_x;
    segment_9_x = segment_8_x;
    segment_8_x = segment_7_x;
    segment_7_x = segment_6_x;
    segment_6_x = segment_5_x;
    segment_5_x = segment_4_x;
    segment_4_x = segment_3_x;
    segment_3_x = segment_2_x;
    segment_2_x = segment_1_x;
    segment_1_x = x;

    segment_33_y = segment_32_y;
    segment_32_y = segment_31_y;
    segment_31_y = segment_30_y;
    segment_30_y = segment_29_y;
    segment_29_y = segment_28_y;
    segment_28_y = segment_27_y;
    segment_27_y = segment_26_y;
    segment_26_y = segment_25_y;
    segment_25_y = segment_24_y;
    segment_24_y = segment_23_y;
    segment_23_y = segment_22_y;
    segment_22_y = segment_21_y;
    segment_21_y = segment_20_y;
    segment_20_y = segment_19_y;
    segment_19_y = segment_18_y;
    segment_18_y = segment_17_y;
    segment_17_y = segment_16_y;
    segment_16_y = segment_15_y;
    segment_15_y = segment_14_y;
    segment_14_y = segment_13_y;
    segment_13_y = segment_12_y;
    segment_12_y = segment_11_y;
    segment_11_y = segment_10_y;
    segment_10_y = segment_9_y;
    segment_9_y = segment_8_y;
    segment_8_y = segment_7_y;
    segment_7_y = segment_6_y;
    segment_6_y = segment_5_y;
    segment_5_y = segment_4_y;
    segment_4_y = segment_3_y;
    segment_3_y = segment_2_y;
    segment_2_y = segment_1_y;
    segment_1_y = y;
    x = constrain(lerp(x, apple_x, v), 0, canvas_width);
    y = constrain(lerp(y, apple_y, v), 0, canvas_height);

    if (mouseIsPressed === true) {
      apple_x = constrain(mouseX, 0, canvas_width);
      apple_y = constrain(mouseY, 0, canvas_height);
      if (dist(x, y, apple_x, apple_y) < 2 * radius) {
        x =
          apple_x +
          cos(frameCount % (2 * PI)) *
            (radius +
              map(sin((frameCount / 100) % (20 * PI)), -1, 1, 0, radius));
        y =
          apple_y +
          sin(frameCount % (2 * PI)) *
            (radius +
              map(sin((frameCount / 100) % (20 * PI)), -1, 1, 0, radius));
      }

      
      apple_rand = 0;
    } else {
      apple_rand = random(-1, 1);
      //creature growth
      if (dist(apple_x, apple_y, x, y) < 50) {
        if (radius < 100) {
          radius += 0.01;
          v += 0.000001
        } else {
          radius = 50;
        }
      }
    }
  }

  if (dist(apple_x, apple_y, rand_x, rand_y) < 75) {
    if (mouseIsPressed === false) {
      rand_x = random(5, 795);
      rand_y = random(5, 495);
      apple_x = apple_x;
      apple_y = apple_y;
    }
  } else {
    if (mouseIsPressed === false) {
      apple_x = lerp(apple_x, rand_x, v*1.01);
      apple_y = lerp(apple_y, rand_y, v*1.01);

      //apple_x = lerp(apple_x, rand_x, 0.1) + cos((frameCount/10)%(2*PI))*5*map(sin((frameCount/100)%PI),-1,1,1,2)
      //apple_y = lerp(apple_y, rand_y, 0.1) + sin((frameCount/10)%(2*PI))*5*map(sin((frameCount/100)%PI),-1,1,1,2)
    }
  }
  if (keyIsPressed) {
    if (key == "r") {
      apple_x = apple_x + cos(frameCount * 0.1) * apple_z;
      apple_y = apple_y + sin(frameCount * 0.1) * apple_z;
    }
    if (key == "f") {
      apple_x = mouseX;
      apple_y = mouseY;
    }
    if (key == "g") {
      gameMode();
    }
    
    if (key == "c"){
      apple_x = width / 2 + cos(frameCount * 0.1) * apple_z;
      apple_y = height / 2 + sin(frameCount * 0.1) * apple_z;
    }
    
    else {
      //apple_x = width / 2 + cos(frameCount * 0.1) * apple_z;
      //apple_y = height / 2 + sin(frameCount * 0.1) * apple_z;
    }

    //x = x + abs(sin(z))
    apple_z = apple_z + sin(frameCount * 0.01 + random(-0.005, 0.005));
  }
  /*if (gameCount%2 != 0){
    gameMode()
  }*/

  //apple
  fill(255, 255, 255);
  circle(apple_x + apple_rand, apple_y + apple_rand, 25);
  //invisible random point apple chases
  fill(0);
  circle(rand_x, rand_y, 0.005);
  console.log(key);
}
function drawsegment(
  segmentx,
  segmenty,
  originalx,
  originaly,
  adjustment,
  rad
) {
  fill(
    abs(sin(frameCount / (PI * 10))) * 255,

    abs(cos(frameCount / (PI * 10))) * 255,

    255 *
      abs(
        1 -
          dist(originalx - adjustment, originaly - adjustment, 400, 250) /
            (canvas_width + adjustment * sqrt(2))
      )
  );
  circle(segmentx, segmenty, rad - (adjustment % 40));
  //halo
  if (adjustment % 40 == 0) {
    noFill();
    let rotation = map(frameCount + (adjustment % 100), 0, 99, 0, 2 * PI);
    let halo_distance = map(
      sin(frameCount / 10 + (adjustment * PI) / 40),
      -1,
      1,
      radius + 5,
      2 * radius + 5
    );
    strokeWeight(5);
    stroke(
      abs(1 - abs(sin(frameCount / (PI * 10)))) * 255,

      abs(1 - abs(cos(frameCount / (PI * 10)))) * 255,

      255 *
        abs(
          dist(originalx - adjustment, originaly - adjustment, 400, 250) /
            (canvas_diagonal + adjustment * sqrt(2))
        )
    );
    arc(
      segmentx,
      segmenty,
      halo_distance,
      halo_distance,
      rotation,
      rotation + QUARTER_PI
    );
    arc(
      segmentx,
      segmenty,
      halo_distance,
      halo_distance,
      rotation + HALF_PI,
      rotation + HALF_PI + QUARTER_PI
    );
    arc(
      segmentx,
      segmenty,
      halo_distance,
      halo_distance,
      rotation + PI,
      rotation + PI + QUARTER_PI
    );
    arc(
      segmentx,
      segmenty,
      halo_distance,
      halo_distance,
      rotation + PI + HALF_PI,
      rotation + PI + HALF_PI + QUARTER_PI
    );
  }
  noStroke();
}
function gameMode() {
  apple_rand = 0;
  if (dist(apple_x, apple_y, x, y) < 10) {
    apple_x = random(50, 750);
    apple_y = random(50, 750);
  } else {
    apple_x = apple_x;
    apple_y = apple_y;
  }
  if (keyIsPressed) {
    if (keyIsDown(LEFT_ARROW)) {
      x = x - 5;
      x = constrain(x, 50, 750);
    }
    if (keyIsDown(RIGHT_ARROW)) {
      x = a + 5;
      x = constrain(x, 50, 750);
    }
    if (keyIsDown(DOWN_ARROW)) {
      y = y + 5;
      y = constrain(y, 50, 450);
    }

    if (keyIsDown(UP_ARROW)) {
      y = y - 5;
      y = constrain(y, 50, 450);
    }
  }
}
