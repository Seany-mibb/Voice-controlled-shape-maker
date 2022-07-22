x = 0;
y = 0;
draw_rect = '';
draw_circle = '';

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();


function start()
{
    document.getElementById("status").innerHTML = "System is listning please say either rectangle or circle to create one in a random area in the canvas below 👇";
    recognition.start();
}

recognition.onresult = function(event)
{
    console.log(event);
    content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "System recognized your speech as: " + content;

    if(content == "circle" || content == "Circle." || content == "Circle")
    {
        x = Math.floor(Math.random() * 1400);
        y = Math.floor(Math.random() * 800);
        document.getElementById("status").innerHTML = "Started drawing the circle ⭕";
        draw_circle = 'set';
    }

    if(content == "rectangle" || content == "Rectangle." || content == "Rectangle")
    {
        x = Math.floor(Math.random() * 1400);
        y = Math.floor(Math.random() * 800);
        document.getElementById("status").innerHTML = "Started drawing the rectangle ⏹️";
        draw_rect = 'set';
    }
}

function setup()
{
    canvas = createCanvas(1400, 800);
}

function draw()
{
    if(draw_circle == 'set')
    {
        radius = Math.floor(Math.random() * 100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "The circle has been drawn ⭕";
        draw_circle = '';
    }

    if(draw_rect == 'set')
    {
        rect(x, y, 120, 50);
        document.getElementById("status").innerHTML = "The rectangle has been drawn ⏹️";
        draw_rect = '';
    }
}