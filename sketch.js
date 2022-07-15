var i1,response,response1,min,hr;
function preload(){
i1=loadImage("i1.jpg");
}
function setup(){
    createCanvas(windowWidth,windowHeight);
}
function draw(){
getTime();
if(hr >= 00 && hr <=11){
    console.log("morning");
    background(i1);
    textSize(40);
    fill("yellow");
    text("Good Morning",windowWidth/2-130,windowHeight/2-110);
    text("Welcome to",windowWidth/2-230,windowHeight/2-40);
    fill("red");
    stroke("black");
    strokeWeight(2);
    text("ROBO APP",windowWidth/2-10,windowHeight/2-40);
}
else if(hr >= 12 && hr <=16){
    console.log("afternoon");
    background(i1);
    textSize(65);
    fill("yellow");
    text("Good Afternoon",windowWidth/2-130,windowHeight/2-110);
    text("Welcome to",windowWidth/2-230,windowHeight/2-40);
    fill("red");
    stroke("black");
    strokeWeight(2);
    text("ROBO APP",windowWidth/2-10,windowHeight/2-40);
}
if(hr >= 17 && hr <=23){
    console.log("evening");
    background(i1);
    textSize(60);
    fill("yellow");
    text("Good Evening",windowWidth/2-210,windowHeight/2-110);
    text("Welcome to",windowWidth/2-340,windowHeight/2-40);
    fill("red");
    stroke("black");
    strokeWeight(2);
    text("ROBO APP",windowWidth/2-10,windowHeight/2-40);
    
}
}
async function getTime(){
    response=await fetch("https://worldtimeapi.org/api/timezone/asia/kolkata")
    response1=await response.json();
    dateTime=response1.datetime;
    min=dateTime.slice(11,16);
    hr=dateTime.slice(11,13);
    console.log(hr);

   
}