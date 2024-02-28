const gameLogo = document.querySelector('img[data-type="gameLogo"]');
const translucentSun = document.querySelector('img[data-type="translucentSun"]');
const logo1 = document.querySelector('img[data-number="1"]');
const logo2 = document.querySelector('img[data-number="2"]');
const logo3 = document.querySelector('img[data-number="3"]');
const logo4 = document.querySelector('img[data-number="4"]');

/* Delete the Borders below later. */
// gameLogo.style.border = "2px solid #fff";
// logo1.style.border = "2px solid red";
// logo2.style.border = "2px solid green";
// logo3.style.border = "2px solid blue";
// logo4.style.border = "2px solid yellow";
/*Delete the Borders above later.*/


/* Attributes given to the BIG Game Logo that says "Art Shutdown". */
// gameLogo.style.position = "absolute";
// gameLogo.style.top = "50%";
// gameLogo.style.left = "50%";
// gameLogo.style.transform = "translate(-50%, -50%)";
// gameLogo.style.zIndex = "10";
/* Attributes given to the BIG Game Logo that says "Art Shutdown". */

/* Attributes given to the small Sun Logo number 1. */
logo1.style.position = "absolute";
logo1.style.top = "0%";
logo1.style.left = "0%";
// logo1.style.zIndex = "10";

/* Attributes given to the small Sun Logo number 2. */
logo2.style.position = "absolute";
logo2.style.top = "0%";
logo2.style.right = "0%";
// logo2.style.zIndex = "10";

/* Attributes given to the small Sun Logo number 3. */
logo3.style.position = "absolute";
logo3.style.bottom = "0%";
logo3.style.left = "0%";
// logo3.style.zIndex = "10";

/* Attributes given to the small Sun Logo number 4. */
logo4.style.position = "absolute";
logo4.style.bottom = "0%";
logo4.style.right = "0%";
// logo4.style.zIndex = "10";


logo1.classList.add('slideAnimationToRight');
logo2.classList.add('slideAnimationToBottom');
logo3.classList.add('slideAnimationToTop');
logo4.classList.add('slideAnimationToLeft');
translucentSun.classList.add('rotateTranslucentSun');


const mainScreen = document.querySelector("#mainScreen");
mainScreen.addEventListener("contextmenu", (event) => {
    document.getElementById("deleteLater").innerHTML = "RIGHT CLICKED!";
    event.preventDefault();
});