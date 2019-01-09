//this functions generates a random Color.
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
//the start variable stores the time at the beginning when the function is called.
var start = new Date().getTime();

//this function is used to make the shape reappear.
function appearShape() {
    document.getElementById('shapes').style.display = "block"
    //the start time is updated when the shape reappears on the screen
    start = new Date().getTime();
}

function randomThings() {
    var side = Math.random() * 80 + 80;
    var w = window.innerWidth;
    var h = window.innerHeight;
    var top = Math.random() * h * 0.25;
    var left = Math.random() * w * 0.85;
    //this enables the shapes to have varios width, height and position
    document.getElementById('shapes').style.width = side + "px";
    document.getElementById('shapes').style.height = side + "px";
    document.getElementById('shapes').style.top = top + "px";
    document.getElementById('shapes').style.left = left + "px";
    //this enables the shape to change between square and circle randomly
    if (Math.random() > 0.5) {
        document.getElementById('shapes').style.borderRadius = "50%";
    } else {
        document.getElementById('shapes').style.borderRadius = "10%";
    }
    document.getElementById('shapes').style.backgroundColor = getRandomColor();
}
//the timerFunction() causes a delay between each click
function timerFunction() {
    setTimeout(appearShape, 500);
}
randomThings();
timerFunction();
//this part is responsible for the shape to appear and reappear.
document.getElementById('shapes').onclick = function clickShape() {
    document.getElementById('shapes').style.display = "none";
    var end = new Date().getTime();
    var time = (end - start) / 1000;
    document.getElementById('spanScore').innerHTML = time + " seconds";
    randomThings();
    timerFunction();
    document.getElementById('spanHighScore').innerHTML = HighScore(time);
}
scoreArray = [];
var final;
function HighScore(time) {
    scoreArray.push(time);
    for (let i = 0; i < scoreArray.length; i++) {
        if (scoreArray[i] < time) {
            final = scoreArray[i];
            return final;
        }
        else {
            final = time;
            return final;
        }
    }
    return final
}