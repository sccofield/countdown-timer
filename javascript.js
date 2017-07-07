//****STEPS****
//Make form with datetime input
//Extract time value from datetime input
//Output data to html

document.getElementById('countdown').addEventListener('submit', countDown);

var startcount;

function stopCount() {
    clearInterval(startcount);
}

function countDown(e) {
    clearInterval(startcount);
    // console.log(e);
    e.preventDefault();
    var x = document.getElementById("day").value;
    startcount = setInterval(function() {
        var curTime = Date.now();
        var setTime = new Date(x).getTime();
        var interval = setTime - curTime;

        //console.log(interval)
        var days = Math.floor(interval / (86400000));
        var hours = Math.floor((interval % (1000 * 60 * 60 * 24)) / (60 * 60 * 1000));
        var minutes = Math.floor((interval % (1000 * 60 * 60)) / (60000));
        var seconds = Math.floor((interval % (1000 * 60)) / (1000));
        document.getElementById('timeCounter').innerHTML = formatN(days) + ":" + formatN(hours) + ":" + formatN(
            minutes) + ":" + formatN(seconds);
        document.getElementById('lab').innerHTML = "Day : Hour : Min : Sec";

        if (interval < 0) {
            clearInterval(startcount);
            document.getElementById('timeCounter').innerHTML = "SORRY DEAR, YOU'RE LATE";
            document.getElementById('lab').innerHTML = "";
        }
    }, 1000);
}

function formatN(i) {
    if (i < 10) {
        return "0" + i;
    } else {
        return i + "";
    }
}