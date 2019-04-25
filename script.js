// Daniel Shiffman
// Code for: https://youtu.be/h_aTgOl9J5I

let song
let song2
let button
let amp
let amp2

function setup() {
    createCanvas(800, 600);
    song = loadSound('assets/vasilis.mp3');
    song2 = loadSound('assets/marjolein.mp3', loaded)
    amp = new p5.Amplitude();
    amp2 = new p5.Amplitude();

    amp.setInput(song)
    amp2.setInput(song2)
}

function loaded(){
    button = createButton('play');
    button.mousePressed(togglePlaying);
}


function draw() {
    background(1);
    // all the volumes of the tracks
    var vol = amp.getLevel(0);
    var vol2 = amp2.getLevel(1);
    // diameters of both of the ellipses
    var diam = map(vol, 0, 0.3, 10, 200);
    var diam2 = map(vol2, 0, 0.3, 10, 200);

    fill(100, 0, 150);
    ellipse(width / 4, height / 4, diam, diam);

    fill(50, 100, 150);
    ellipse(width / 2, height / 2, diam2, diam2);
}

function togglePlaying() {
    if (!song.isPlaying()) {
        song2.play();
        song.play();
        button.html("pause");
    } else {
        song.stop();
        song2.stop();
        button.html("play");
    }
}

function preload() {
    song = loadSound('assets/sample2.mp3');
    song2 = loadSound('sound.mp3')
}

// function playText(){
//     let timer = 0;
//     let presentator = 'Vasilis';
//     let gast1 = 'Marjolijn';
//     let text = document.getElementById("test");
//     console.log(text)
//     setInterval(function(){
//         timer ++
//         switch(timer) {
//             case 1:
//                 text.insertAdjacentHTML('beforeend', textToHtml('fattie boem boem'))
//             break
//         }
//     })

//     function textToHtml(msg) {
//         return `<li class="text-item">${msg}</li>`
//     }

// }