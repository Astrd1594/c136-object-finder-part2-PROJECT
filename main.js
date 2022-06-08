img = "";
status = "";
objects = [];
var input_text = "";
function preload(){}
function setup(){
    canvas = createCanvas(800, 600);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}
function draw(){
    image(video, 0, 0, 800, 600);
}
function start_search(){
    objectDetection = ml5.objectDetector('cocossd', modelLoaded);
    input_text = document.getElementById("objectinput").value;
    document.getElementById('status').innerHTML = 'Searching for objects...'
}
function modelLoaded(){
    console.log('CocoSSD Model Loaded!');
    status = true;
}