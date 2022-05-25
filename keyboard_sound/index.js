let innerBoxes = document.querySelectorAll(".innerBox");
// console.log(innerBoxes);
for(let i=0; i<innerBoxes.length; i++){
    innerBoxes[i].addEventListener("click", function clickingThroughMouse(){
        // console.log(innerBoxes[i].id);
        changeStyle(innerBoxes[i]);
        playAudio(innerBoxes[i]);
    });
    // console.log(innerBoxes[i]);
}

document.addEventListener("keypress", doAction)
function doAction(e){
    let code = e.keyCode;
    // console.log(code);
    for(let i=0; i<innerBoxes.length; i++){
        let innerBoxId = parseInt(innerBoxes[i].id);
        if(innerBoxId == code){
            changeStyle(innerBoxes[i]);
            playAudio(innerBoxes[i]);
            // console.log(innerBoxes[i]);
            break;
        }
    }
}

function changeStyle(e){
    // console.log(e);
    let editBox = document.getElementById(e.id);
    // console.log(editBox);
    let saveStyle = editBox.style;
    // console.log(saveStyle);
    editBox.style.backgroundColor = "black";
    setTimeout(function abc(){
        editBox.style = saveStyle;
    }, 300);
}

function playAudio(e){
    let playBox = document.getElementById(e.id).children[1];
    // console.log(playBox);
    playBox.play()
}