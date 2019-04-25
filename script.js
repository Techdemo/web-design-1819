// Daniel Shiffman
// Code for: https://youtu.be/h_aTgOl9J5I

let song
let song2
let button
let amp
let amp2

function setup() {
    createCanvas(1200, 600);
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
    background(0);
    // all the volumes of the tracks
    var vol = amp.getLevel(0);
    var vol2 = amp2.getLevel(1);
    // diameters of both of the ellipses
    var diam = map(vol, 0, 0.3, 10, 200);
    var diam2 = map(vol2, 0, 0.3, 10, 200);
// ellipse vasilis
    fill(100, 0, 150);
    ellipse(width / 12.5, height / 2, diam, diam);
// ellipse marjolein
    fill(50, 100, 150);
    ellipse(width / 1.5, height / 2 , diam2, diam2);
}

function togglePlaying() {
    if (!song.isPlaying()) {
        song2.play();
        song.play();
        button.html("pause");
        showText()
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

function showText(){
    var pres = 'Vasilis';
    var guest = 'Marjolein';
    var text = document.getElementById("test")
    let timer = 0;

        setInterval(function () {
            timer++

            switch (timer) {
                case 1:
                    text.insertAdjacentHTML('beforeend', textToHtml(pres, 'En Marjolijn geeft antwoord op de vraag *Does the Data Doppelgänger Reside in The Uncanny Valley?*'))
                    break;
                case 2:
                    text.insertAdjacentHTML('beforeend', textToHtml(pres, 'Maar zoals bijna altijd beginnen we ook dit gesprek met de vraag: wanneer is iets goed?'))
                    break;
                case 4:
                    text.insertAdjacentHTML('beforeend', textToHtml(guest, 'Wanneer is iets goed? Ja, nou dat is best een ingewikkelde vraag.'))
                    break;
                case 5:
                    text.insertAdjacentHTML('beforeend', textToHtml(guest, 'Het is ook wel een leuke vraag vind ik. Een leuke vraag om over na te denken.'))
                    break;
                case 6:
                    text.insertAdjacentHTML('beforeend', textToHtml(guest, 'Maar wanneer vind ik iets goed. '))
                    break;
                case 7:
                    text.insertAdjacentHTML('beforeend', textToHtml(guest, 'Eigenlijk wanneer […] iets is goed voor mij als het iets triggert.'))
                    break;
                case 8:
                    text.insertAdjacentHTML('beforeend', textToHtml(guest, 'En dan is triggeren natuurlijk eigenlijk een hele vage […] ja wat triggert het dan.'))
                    break;
                case 9:
                    text.insertAdjacentHTML('beforeend', textToHtml(guest, 'Maar dat triggeren dat is eigenlijk wel heel belangrijk, denk ik.'))
                    break;
                case 10:
                    text.insertAdjacentHTML('beforeend', textToHtml(guest, 'Maar het triggeren kan op allerlei verschillende manieren.'))
                    break;
                case 11:
                    text.insertAdjacentHTML('beforeend', textToHtml(pres, 'Ja'))
                    break;
                case 12:
                    text.insertAdjacentHTML('beforeend', textToHtml(guest, 'Dus het kan zijn van doordat ik, weet ik veel, dat iets blijft hangen, dat je er nog eens een keer over nadenkt.'))
                    break;
            }

        }, 4000);


    function textToHtml(speaker, msg) {
        return `<li class="${speaker}">${speaker} : ${msg}</li>`
    }




}