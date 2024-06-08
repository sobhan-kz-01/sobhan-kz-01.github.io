

const energy = parseInt(document.getElementsByClassName("user-tap-energy")[0].getElementsByTagName("p")[0].textContent.split(" / ")[0]);
var timeout = false
Array.prototype.sample = function () {
    return this[Math.floor(Math.random() * this.length)];
}

function fn() {
    var clientX = [150, 170, 210,300,350,180,160,190,400,380];
    var clientY = [300, 340, 400,280,450,320,310,355];




    const evt1 = new PointerEvent('pointerdown', { clientX: clientX.sample(), clientY: clientY.sample() });
    const evt2 = new PointerEvent('pointerup', { clientX: clientX.sample(), clientY: clientY.sample() });
    var energy = parseInt(document.getElementsByClassName("user-tap-energy")[0].getElementsByTagName("p")[0].textContent.split(" / ")[0]);
    if (energy > 25 && !timeout) {
        document.getElementsByClassName('user-tap-button')[0].dispatchEvent(evt1);
        document.getElementsByClassName('user-tap-button')[0].dispatchEvent(evt2);

    }
    else {
        timeout = true
    }

    if (timeout && energy > 400) {


        timeout = false
    }
    return fn;

}

setInterval(fn, 80);

