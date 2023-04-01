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