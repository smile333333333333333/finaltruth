/*========================================
        H.E.E. ARG
        speech.js
========================================*/

// Entire speech.
// Each string is typed separately.

const speech = [

"Hey...\n\n",

"I see you followed all my clues.\n",

"You actually made it this far.\n\n",

"If you're reading this...\n",

"then everything worked.\n\n",

"I wish I could tell you what comes next.\n\n",

"But I can't.\n",

"They won't tell me.\n\n",

"I've searched everywhere they let me.\n",

"I've searched places they didn't.\n\n",

"Every answer...\n",

"Every hallway...\n",

"Every experiment...\n",

"Every missing employee...\n",

"Every sealed document...\n\n",

"Everything leads back to one place.\n\n",

"THE FACTORY.\n\n",

"BUT WHAT IS THE FACTORY?\n\n",

"WHY ARE THEY SMILING?\n\n",

"WHY DOES NO ONE ELSE SEE IT?\n\n",

"WHAT ARE THEY HIDING?\n\n",

"WHY DID THEY K-"

];

// =========================
// Beginning
// =========================

async function startRecording(){

    clearScreen();

    await wait(1000);

    // Optional boot message
    instant("RECOVERED RECORDING\n");
    instant("SOURCE: EMPLOYEE RE\n");
    instant("----------------------------------------\n\n");

    await wait(1200);

    // Type each section
    await typeLines(speech);

    // Continue into ending
    if(typeof beginEnding === "function"){

        beginEnding();

    }

}

// =========================
// Start automatically
// =========================

window.addEventListener("load",()=>{

    // Browsers won't allow audio until interaction,
    // so clicking anywhere starts everything.

    document.body.addEventListener("click",()=>{

        startRecording();

    },{once:true});

});
