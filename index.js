let hour;
let min;
let sec;

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    startClock(h, m, s);
    second(s);
    minute(m);
    hours(h);
    time(s);
    clk(s);
}

function second(s) {
    if ( s == 0 ) { document.getElementById('second').style.transition = `unset` }
    if ( s == 1 ) { document.getElementById('second').style.transition = `transform 0.99s linear` }
    console.log(s);
    document.getElementById('second').style.transform = `rotate(${s * 6}deg)`;
}

function minute(m) {
    if ( m == 0 ) { document.getElementById('minute').style.transition = `unset` }
    if ( m == 1 ) { document.getElementById('minute').style.transition = `transform 0.99s linear` }
    console.log(m);
    document.getElementById('minute').style.transform = `rotate(${m * 6}deg)`;
}

function hours(h) {
    if ( h == 0 ) { document.getElementById('hour').style.transition = `unset` }
    if ( h == 1 ) { document.getElementById('hour').style.transition = `transform 0.99s linear` }
    console.log(h);
    document.getElementById('hour').style.transform = `rotate(${h * 30}deg)`;
}

function time(h) {
    if ( h >= 4 && h < 12 ) {
        document.getElementById('morning').classList.remove('hide');
        document.getElementById('afternoon').classList.add('hide');
        document.getElementById('evening').classList.add('hide');
        document.getElementById('night').classList.add('hide');
    }
    if ( h >= 12 && h < 16 ) {
        document.getElementById('morning').classList.add('hide');
        document.getElementById('afternoon').classList.remove('hide');
        document.getElementById('evening').classList.add('hide');
        document.getElementById('night').classList.add('hide');
    }
    if ( h >= 16 && h < 20 ) {
        document.getElementById('morning').classList.add('hide');
        document.getElementById('afternoon').classList.add('hide');
        document.getElementById('evening').classList.remove('hide');
        document.getElementById('night').classList.add('hide');
    }
    if ( h >= 20 ) {
        document.getElementById('morning').classList.add('hide');
        document.getElementById('afternoon').classList.add('hide');
        document.getElementById('evening').classList.add('hide');
        document.getElementById('night').classList.remove('hide');
    }
}

function clk(h) {
    if ( h >= 4 && h < 12 ) {
        document.getElementById('hour').style.backgroundImage = `conic-gradient( #de939d 10deg, #ba5966 140deg, #933650`;
        document.getElementById('minute').style.backgroundImage = `conic-gradient( #de939d 10deg, #ba5966 140deg, #933650`;
        document.getElementById('second').style.backgroundImage = `conic-gradient( #de939d 10deg, #ba5966 140deg, #933650`;
    }
    if ( h >= 12 && h < 16 ) {
        document.getElementById('hour').style.backgroundImage = `conic-gradient( #77B2CC 10deg, #408AAA 140deg, #226884`;
        document.getElementById('minute').style.backgroundImage = `conic-gradient( #77B2CC 10deg, #408AAA 140deg, #226884`;
        document.getElementById('second').style.backgroundImage = `conic-gradient( #77B2CC 10deg, #408AAA 140deg, #226884`;
    }
    if ( h >= 16 && h < 20 ) {
        document.getElementById('hour').style.backgroundImage = `conic-gradient( #976781 10deg, #733B5D 140deg, #3d1d58`;
        document.getElementById('minute').style.backgroundImage = `conic-gradient( #976781 10deg, #733B5D 140deg, #3d1d58`;
        document.getElementById('second').style.backgroundImage = `conic-gradient( #976781 10deg, #733B5D 140deg, #3d1d58`;
    }
    if ( h >= 20 ) {
        document.getElementById('hour').style.backgroundImage = `conic-gradient( #3f6389 10deg, #282377 140deg, #1B1853`;
        document.getElementById('minute').style.backgroundImage = `conic-gradient( #3f6389 10deg, #282377 140deg, #1B1853`;
        document.getElementById('second').style.backgroundImage = `conic-gradient( #3f6389 10deg, #282377 140deg, #1B1853`;
    }
}

function startClock(h, m, s) {
    hour = h;
    min = m;
    sec = s;
    document.getElementById('txt').innerHTML = hour + ":" + min + ":" + sec;
    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i };
    return i;
}