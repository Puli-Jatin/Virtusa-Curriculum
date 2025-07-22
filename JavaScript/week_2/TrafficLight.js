const light = ['green', 'yellow', 'red' ];
let index = 0;
 
function showLight() {
    document.getElementById('green').classList.remove('active');
    document.getElementById('yellow').classList.remove('active');
    document.getElementById('red').classList.remove('active');

    let color = light[index];
    document.getElementById(color).classList.add('active');
    index = (index + 1) % light.length;
}

setInterval(showLight, 5000);