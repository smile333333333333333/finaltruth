/*========================================
        H.E.E. ARG
        shake.js
========================================*/

const body = document.body;
const screen = document.getElementById("screen");

/*=========================
    Screen Shake
=========================*/

let shaking = false;

function startShake(){

    if(shaking) return;

    shaking = true;

    screen.classList.add("shake");

}

function stopShake(){

    shaking = false;

    screen.classList.remove("shake");

}

/*=========================
    Timed Shake
=========================*/

function shake(ms=1000){

    startShake();

    setTimeout(stopShake,ms);

}

/*=========================
    Violent Shake
=========================*/

function violentShake(ms=2000){

    if(shaking) return;

    shaking=true;

    let amount=12;

    const interval=setInterval(()=>{

        const x=(Math.random()*amount)-(amount/2);
        const y=(Math.random()*amount)-(amount/2);

        screen.style.transform=`translate(${x}px,${y}px)`;

    },25);

    setTimeout(()=>{

        clearInterval(interval);

        screen.style.transform="translate(0px,0px)";

        shaking=false;

    },ms);

}

/*=========================
    Pulse Shake
=========================*/

async function pulseShake(){

    for(let i=0;i<3;i++){

        shake(200);

        await wait(300);

    }

}

/*=========================
    Dramatic Words
=========================*/

async function factoryShake(){

    await pulseShake();

    violentShake(1500);

}

async function smileShake(){

    violentShake(2500);

}

async function endingShake(){

    violentShake(3500);

}

/*=========================
    Random Tiny Shakes
=========================*/

function randomShake(){

    if(Math.random()<0.03){

        shake(120);

    }

}

/*=========================
    Background Shakes
=========================*/

setInterval(()=>{

    if(isTyping){

        randomShake();

    }

},400);

/*=========================
    Export
=========================*/

window.shake=shake;
window.startShake=startShake;
window.stopShake=stopShake;
window.violentShake=violentShake;
window.factoryShake=factoryShake;
window.smileShake=smileShake;
window.endingShake=endingShake;
