'use strict'


var ballSize = 100

function onBallClick(elBall) {
    var ballText = document.querySelector('.ball span')

    ballSize += getRandomInt(20, 60)

    if (ballSize > 400) ballSize = 100

    elBall.style.height = ballSize + 'px'
    elBall.style.width = ballSize + 'px'

    ballText.innerText = ballSize
}