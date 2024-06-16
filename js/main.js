'use strict'


var ballSize = 100

function onBallClick(elBall) {
    var ballText = document.querySelector('.ball span')

    ballSize += 50

    elBall.style.height = ballSize + 'px'
    elBall.style.width = ballSize + 'px'

    ballText.innerText = ballSize
}