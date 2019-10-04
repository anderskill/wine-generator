var myImages1 = new Array();
myImages1.push("./images/wine-1.png");
myImages1.push("./images/wine-2.png");
myImages1.push("./images/wine-3.png");
myImages1.push("./images/wine-4.png");
// myImages1.push("img_05.gif");
// myImages1.push("img_06.gif");
// myImages1.push("img_07.gif");
// myImages1.push("img_08.gif");
// myImages1.push("img_09.gif");

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function pickimg2() {
    document.randimg.src = myImages1[getRandomInt(0, myImages1.length - 1)];
}