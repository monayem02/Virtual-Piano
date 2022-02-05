document.addEventListener('keypress',(e)=>{
    if (e.code === "KeyA"){
        let audio = new Audio("white_keys/A.mp3");
        audio.play();
    }
    else if (e.code === "KeyS"){
        let audio = new Audio("white_keys/S.mp3");
        audio.play();
    }
    else if (e.code === "KeyD"){
        let audio = new Audio("white_keys/D.mp3");
        audio.play();
    }
    else if (e.code === "KeyF"){
        let audio = new Audio("white_keys/F.mp3");
        audio.play();
    }
    else if (e.code === "KeyG"){
        let audio = new Audio("white_keys/G.mp3");
        audio.play();
    }
    else if (e.code === "KeyH"){
        let audio = new Audio("white_keys/H.mp3");
        audio.play();
    }
    else if (e.code === "KeyJ"){
        let audio = new Audio("white_keys/J.mp3");
        audio.play();
    }
    else if (e.code === "KeyW"){
        let audio = new Audio("black_keys/W.mp3");
        audio.play();
    }
    else if (e.code === "KeyE"){
        let audio = new Audio("black_keys/E.mp3");
        audio.play();
    }
    else if (e.code === "KeyT"){
        let audio = new Audio("black_keys/T.mp3");
        audio.play();
    }
    else if (e.code === "KeyY"){
        let audio = new Audio("black_keys/Y.mp3");
        audio.play();
    }
    else if (e.code === "KeyU") {
        let audio = new Audio("black_keys/U.mp3");
        audio.play();
    }
    else {
        console.log("warning");
    }


})