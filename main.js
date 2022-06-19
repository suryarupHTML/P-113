function preload() {

}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 640, 480);
    fill(255,0,0);
    stroke(255, 0, 0);
    circle(50,50,80);
    circle(50,430,80);
    circle(595, 50, 80);
    circle(595, 430, 80);
    fill(255, 255, 255, 0);
    stroke(255, 140, 0);
    ellipse(320, 240, 640, 480);
}

function take_snapshot() {
    save('student_name.png');
}