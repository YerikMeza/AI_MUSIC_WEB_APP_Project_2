
function preload() {

}

function setup() {
   canvas = createCanvas(650, 500);
   canvas.center();

   video = createCapture(VIDEO);
   video.hide();
}

function draw() {
   image(video, 0, 0, 650, 500)
}