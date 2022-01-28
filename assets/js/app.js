let videoElem = document.getElementById("audio");
let playButton = document.getElementById("btn");

playButton.addEventListener("click", handlePlayButton, false);
playVideo();

async function playVideo() {
    try {
        await videoElem.play();
        playButton.classList.add("playing");
    } catch (err) {
        playButton.classList.remove("playing");
    }
}

function handlePlayButton() {
    if (videoElem.paused) {
        playVideo();
    } else {
        videoElem.pause();
        playButton.classList.remove("playing");
    }

    // toggle button text start/stop
    if (btn.innerText == "start") {
        btn.innerText = "stop";
    } else {
        btn.innerText = "start";
    }
}
