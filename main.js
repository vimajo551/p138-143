paddle1 = 10;
paddle2 = 10;

paddle1X = 10;

paddle1Y = '';
paddle2Y = 685;

paddle1Height = 110;
paddle2Height = 70;

score1 = 0;
score2 = 0;

playerscore = 0;
pcscore = 0;

gameStatus = "";

function setup(){
    canvas =  createCanvas(700,550);
    canvas.parent('canvas');
    
    video = createCapture(VIDEO);
    video.size(700, 550);
    video.hide();
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
 
function modelLoaded(){
        console.log('PoseNet Is Initialized');
}
    
function gotPoses(results){

}

function startGame(){
  gameStatus = "start";
  document.getElementById("status").innerHTML = "Game Is Loaded";
}

function draw(){
    if(gameStatus == "start")
    {
      background(0); 
      image(video, 0, 0, 700, 550);
    
      fill("black");
      stroke("black");
      rect(680,0,20,700);
    
      fill("black");
      stroke("black");
      rect(0,0,20,700);
    
      if(scoreRightWrist > 0.2)
      {
        fill("red");
        stroke("red");
        circle(rightWristX, rightWristY, 30);
      }
    
        paddleInCanvas();

        fill(250,0,0);
        stroke(0,0,250);
        strokeWeight(0.5);
        paddle1Y = rightWristY; 
        rect(paddle1X,paddle1Y,paddle1,paddle1Height,100);
    

        fill("#FFA500");
        stroke("#FFA500");
        var paddle2y =ball.y-paddle2Height/2;  rect(paddle2Y,paddle2y,paddle2,paddle2Height,100);

        //midline();

        //drawScore();

        //models();   

        //move();     
    
        }
    
      }