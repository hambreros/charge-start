controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (state == 1) {
        if (stroke != 1) {
            stroke = 1
            scene.setBackgroundColor(8)
            distance += 1
        } else {
            looser()
        }
    } else {
        looser()
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (state == 1) {
        if (stroke != 0) {
            stroke = 0
            scene.setBackgroundColor(2)
            distance += 1
        } else {
            looser()
        }
    } else {
        looser()
    }
})
function looser () {
    scene.setBackgroundColor(5)
    state = 10
    game.setGameOverMessage(false, "loser")
    game.gameOver(false)
    game.reset()
}
let score = 0
let textSprite: TextSprite = null
let distance = 0
let stroke = 0
let state = 0
state = 0
pause(randint(2000, 3000))
if (state == 0) {
    scene.setBackgroundColor(1)
    music.play(music.createSoundEffect(WaveShape.Sine, 1829, 2690, 124, 205, 338, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    state = 1
    stroke = 1
} else {
    looser()
}
forever(function () {
    if (distance > 19) {
        state = 2
        scene.setBackgroundColor(7)
        textSprite = textsprite.create(convertToText(score))
        textSprite.setMaxFontHeight(10)
    }
})
forever(function () {
    if (state == 1) {
        score = score + 10
        pause(10)
    }
})
