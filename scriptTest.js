let song;
let playButton;
let sliderVolume;
let sliderRate;
let jumpButton;
let sliderPan;
// preload. it's like the pre-setup.
// the rest cant do something until the sound file is loaded
var amp;

// setup event
function setup(){
    createCanvas(200, 200)
    song = loadSound("sound.mp3", loaded);
    amp = new p5.Amplitude();
    sliderVolume = createSlider(0, 2, 0.5, 0.01 );
    sliderRate = createSlider(0, 2, 1, 0.01);
    sliderPan = createSlider(-1, 1, 0, 0.01);
    jumpButton = createButton("jump")
    jumpButton.mousePressed(jumpSong);
    song.addCue(5, changeBackGround);
}

function changeBackGround(){
    background(random(225), random(255), random(255) )
}

function togglePlaying(){
    if (!song.isPlaying()){
        song.play();
        playButton.html("stop")
    } else {
        song.stop();
        playButton.html("play")
    }
}
function loaded(){
    playButton = createButton("play");
    playButton.mousePressed(togglePlaying);
   console.log("loaded")
}
function jumpSong(){
    var length = song.duration();
    console.log(length)
    song.jump(length / 2);
}
// draw event loops over and over again
function draw(){
    background(51)
    // met amp krijg je een volume object
    let vol = amp.getLevel();
    let diam = map(vol, 0, 0.3, 10, 150);

    fill(255, 0, 255)
    ellipse(width / 2, height / 2, diam, diam);

// op een specifiek moment kun je beter een if else gebruiken.

// if (song.currentTime() > 5){
//     background(kleurcode hier))
// }
    // background(song.currentTime() * 10, 0, 255);
    song.pan(sliderPan.value())
    // rate is the speed at which the sound is played back
    song.rate(sliderRate.value())
    song.setVolume(sliderVolume.value());
}
