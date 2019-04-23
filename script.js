// Daniel Shiffman
// Code for: https://youtu.be/h_aTgOl9J5I

let song;
let amp;
let button;

let volhistory = [];

function toggleSong() {
    if (song.isPlaying()) {
        song.pause();
    } else {
        song.play();
    }
}

function preload() {
    song = loadSound('assets/sample2.mp3');
}

function setup() {
    createCanvas(400, 400);
    angleMode(DEGREES);
    button = createButton('toggle');
    button.mousePressed(toggleSong);
    song.play();
    amp = new p5.Amplitude();
}

function draw() {
    background(0);
    let vol = amp.getLevel();
    volhistory.push(vol);
    stroke(255);
    noFill();

    translate(width / 2, height / 2);
    beginShape();
    for (var i = 0; i < 360; i++) {
        var r = map(volhistory[i], 0, 10, 100, 1000);
        var x = r * cos(i);
        var y = r * sin(i);
        vertex(x, y);
    }
    endShape();

    if (volhistory.length > 360) {
        volhistory.splice(0, 1);
    }
    //ellipse(100, 100, 200, vol * 200);
}