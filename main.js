let digitalClock = () => {

    let date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    let amorpm = hours >= 12 ? 'pm' : 'am';

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
    document.getElementById("amorpm").innerHTML = amorpm;


    if(hours == 13){
    document.getElementById("hours").innerHTML = 1;
    }
    else if(hours == 14){
    document.getElementById("hours").innerHTML = 2;
    }
    else if(hours == 15){
    document.getElementById("hours").innerHTML = 3;
    }
    else if(hours == 16){
    document.getElementById("hours").innerHTML = 4;
    }
    else if(hours == 17){
    document.getElementById("hours").innerHTML = 5;
    }
    else if(hours == 18){
    document.getElementById("hours").innerHTML = 6;
    }
    else if(hours == 19){
    document.getElementById("hours").innerHTML = 7;
    }
    else if(hours == 20){
    document.getElementById("hours").innerHTML = 8;
    }
    else if(hours == 21){
    document.getElementById("hours").innerHTML = 9;
    }
    else if(hours == 22){
    document.getElementById("hours").innerHTML = 10;
    }
    else if(hours == 23){
    document.getElementById("hours").innerHTML = 11;
    }
    else if(hours == 24){
    document.getElementById("hours").innerHTML = 12;
    }

    setTimeout(digitalClock, 500);

} 

digitalClock();