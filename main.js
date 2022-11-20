img="";
status1="";
function preload()
{
img=loadImage("dog_cat.jpg");
}

function setup()
{
canvas=createCanvas(640,420);
canvas.center();
objectDetector=ml5.objectDetector("cocossd",modelLoaded);
document.getElementById("status").innerHTML="Status - Detecting Objects";
}

function draw()
{
image(img,0,0,640,420);
}
function modelLoaded()
{
console.log("model loaded");
status1=true;
objectDetector.detect(img,gotResult);
}
function gotResult(error,results)
{
if(error){
console.log("error");
}
else{
console.log(results);
}
}
/*fill('#FF0000');
text("Dog",45,75);
noFill();
fill('#00FF00');
text("Cat",350,100);
noFill();
stroke("#FF0000");
rect(30,60,450,350);
stroke("#00FF00");
rect(300,70,300,330);*/