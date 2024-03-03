document.addEventListener("DOMContentLoaded", function () {
    const pages = document.querySelectorAll(".page");
    let readyButton = document.getElementById("readyButton");
    let startButton = document.getElementById("buttonToStartGame");
    let mainScreen = pages[0];
    let lobbyScreen = pages[1];
    let gameScreen = pages[2];
    // lobby.classList.add("active");
    mainScreen.classList.add("active");

    readyButton.addEventListener("click", () => {
        mainScreen.classList.remove("active");
        lobbyScreen.classList.add("active");
        startButton.addEventListener("click", () => {
            mainScreen.classList.remove("active");
            lobbyScreen.classList.remove("active");
            gameScreen.classList.add("active");
        })
        // window.addEventListener("beforeunload", function (event) {
        //     event.preventDefault();
        //     event.returnValue = '';
        //     return 'Your custom warning message goes here.';
        // });
    });
});