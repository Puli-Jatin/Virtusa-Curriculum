function updateClock() {
    let now = new Date();
    let hr = now.getHours() % 12;
    let min = now.getMinutes();
    let sec = now.getSeconds();

    document.getElementById("hour").style.transform = `translateX(-50%) rotate(${hr*30 + min*0.5}deg)`;
    document.getElementById("minute").style.transform = `translateX(-50%) rotate(${min*6}deg)`;
    document.getElementById("second").style.transform = `translateX(-50%) rotate(${sec*6}deg)`;
}

setInterval(updateClock, 1000);
updateClock();
