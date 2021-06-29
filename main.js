
nose_x=0;
nose_y=0;
difference=0;
rightWristX=0;
leftWristX=0;

function setup()
{
    video=createCapture(VIDEO);
    video.size(550,550);
    canvas= createCanvas(500,500);
    canvas.position(560,150);

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background("#FFDFD3");
    document.getElementById("square_side").innerHTML="width and height of the square will be = "+ difference+ " px ";
    fill('#00ffff');
    stroke('#00ffff');
    square(nose_x,nose_y, difference);


}

function modelLoaded()
{
    console.log("PoseNet Model is Initilaized");
}

function gotPoses(results)

{
 if (results.length > 0)
 {
     console.log(results);
     nose_x=results[0].pose.nose.x;
     nose_y=results[0].pose.nose.y;
     console.log("nose_x=" + nose_x + "nose_y=" + nose_y);
     leftWristX=results[0].pose.leftWrist.x;
     rightWristX=results[0].pose.rightWrist.x;
     difference=floor(leftWristX-rightWristX);
     console.log("left Wrist X = "+ leftWristX + "right Wrist X = " + rightWristX + "difference = " + difference);
    
 }
}
