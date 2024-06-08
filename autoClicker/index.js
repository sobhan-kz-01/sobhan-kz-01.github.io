

const evt1 = new PointerEvent('pointerdown', { clientX: 150, clientY: 300 });
const evt2 = new PointerEvent('pointerup', { clientX: 150, clientY: 300 });
const energy = parseInt(document.getElementsByClassName("user-tap-energy")[0].getElementsByTagName("p")[0].textContent.split(" / ")[0]);
var timeout = false

function fn() {
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
