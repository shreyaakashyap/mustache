noseX = 0;
noseY = 0; 
function preload() {
    mustach = loadImage('https://i.postimg.cc/qMS9FJS9/m.png');
}

function setup() {
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose",gotPoses);
}

function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        noseX = results[0].pose.nose.x + 165;
        noseY = results[0].pose.nose.y + 64;

        console.log("nose_x =" + noseX );
        console.log("nose_y =" + noseY );
        
    }
}    


function draw() {
    image(video, 0, 0, 640, 480);
    let c = color('red');
    fill(c);
    noStroke();
    circle(20, 20, 40);
    rect(20,20,20,20);

    let d = color('orange');
    fill(d);
    noStroke();
    circle(20, 240, 40);

    let e = color('yellow');
    fill(e);
    noStroke();
    circle(20, 450, 40);

    let f = color('green');
    fill(f);
    noStroke();
    circle(600, 450, 40);

    let g = color('blue');
    fill(g);
    noStroke();
    circle(600, 240, 40);

    let h = color('purple');
    fill(h);
    noStroke();
    circle(600, 25, 40);

    image(mustach, noseX, noseY, 100, 70);
 
}

function take_snapshot() {
    save("image.png");
}

function modelLoaded() {
    console.log("PoseNet is initilized!!");
}



