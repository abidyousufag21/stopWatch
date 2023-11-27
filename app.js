let hour = 0;
let min = 0;
let sec = 0;
let msec = 0;
let interval;

let hurs = document.getElementById("hours");
let mints = document.getElementById("minutes");
let secs = document.getElementById("seconds");
let msecs = document.getElementById("milliseconds");

function startTimer(){
    msec++
    msecs.innerHTML = msec;
    if(msec >= 100){
        sec++
        secs.innerHTML = sec;
        msec = 0;
    }else if(sec >= 60){
        min++;
        mints,innerHTML = min;
        sec = 0;
    }else if(min >= 60){
        hour++;
        hurs.innerHTML = hour;
        min = 0;
    }
}


function start(){
    interval =  setInterval(startTimer , 10);
}

function pause(){
    clearInterval(interval);
}

function reset(){
    let hour = 0;
    let min = 0;
    let sec = 0;
    let msec = 0;
    hurs.innerHTML = hour; 
    mints.innerHTML = min;
    secs.innerHTML = sec;
    msecs.innerHTML = msec;  
    
    pause()
}
