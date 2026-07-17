/*========================================
    H.E.E. ARG
    typing.js
========================================*/

const textElement = document.getElementById("text");

let currentText = "";
let isTyping = false;

// Default typing speeds
const SPEED = {
    normal: 28,
    slow: 70,
    fast: 15,
    pause: 500,
    sentencePause: 900
};

// Cursor
const cursor = document.createElement("span");
cursor.className = "cursor";
textElement.after(cursor);

// Scroll page smoothly
function scrollDown() {

    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });

}

// Wait helper
function wait(ms){

    return new Promise(resolve => setTimeout(resolve, ms));

}

// Add one character
function addCharacter(character){

    currentText += character;

    textElement.textContent = currentText;

    scrollDown();

}

// Type a single string
async function typeText(text){

    isTyping = true;

    for(let i=0;i<text.length;i++){

        const letter = text[i];

        addCharacter(letter);

        // Dramatic words
if(currentText.endsWith("THE FACTORY.\n\n")){

    factoryShake();

}

if(currentText.endsWith("WHY ARE THEY SMILING?\n\n")){

    smileShake();

}

if(currentText.endsWith("WHY DID THEY K-")){

    endingShake();

}

        // play typing sound
        if(letter.trim() !== ""){

            if(typeof playTyping === "function"){

                playTyping();

            }

        }

        // Timing

        if(letter === "."){

            await wait(SPEED.sentencePause);

        }

        else if(letter === "!"){

            await wait(SPEED.sentencePause);

        }

        else if(letter === "?"){

            await wait(SPEED.sentencePause + 400);

        }

        else if(letter === ","){

            await wait(220);

        }

        else if(letter === "\n"){

            await wait(300);

        }

        else{

            await wait(
                SPEED.normal +
                Math.random()*20
            );

        }

    }

    isTyping = false;

}

// Type multiple lines
async function typeLines(lines){

    for(const line of lines){

        await typeText(line);

        await wait(600);

    }

}

// Clear screen
function clearScreen(){

    currentText = "";

    textElement.textContent = "";

}

// Change typing speed
function setTypingSpeed(speed){

    SPEED.normal = speed;

}

// Dramatic typing
async function dramaticLine(text){

    const old = SPEED.normal;

    SPEED.normal = 55;

    await typeText(text);

    SPEED.normal = old;

}

// Instant print
function instant(text){

    currentText += text;

    textElement.textContent = currentText;

    scrollDown();

}

// Export globals
window.typeText = typeText;
window.typeLines = typeLines;
window.clearScreen = clearScreen;
window.dramaticLine = dramaticLine;
window.instant = instant;
window.wait = wait;
window.setTypingSpeed = setTypingSpeed;
