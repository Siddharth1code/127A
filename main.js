song="";

function preload() 
{
    song= loadSound('music.mp3');
}

function setup() 
{
    canvas=createCanvas(500,600);
    canvas.center;

    video = createCanvas(VIDEO);
    video.hide();
}

function draw() 
{
    image=(video,0,0,500,600);
}

function play() 
{
    song.play();
}
