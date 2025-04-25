namespace SpriteKind {
    export const Effect = SpriteKind.create()
}
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (state == 1) {
        if (stroke2 != 1) {
            stroke2 = 1
            distance2 += 1
        } else {
            distance2 += -3
        }
    } else {
        if (state != 2) {
            game.setGameOverMessage(false, "loser B")
            looser()
        }
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (state == 1) {
        if (stroke2 != 0) {
            stroke2 = 0
            distance2 += 1
        } else {
            distance2 += -3
        }
    } else {
        if (state != 2) {
            game.setGameOverMessage(false, "loser B")
            looser()
        }
    }
})
function looser () {
    scene.setBackgroundColor(5)
    state = 10
    game.gameOver(false)
    game.reset()
}
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (state == 1) {
        if (stroke != 0) {
            stroke = 0
            distance += 1
        } else {
            distance += -3
        }
    } else {
        if (state != 2) {
            game.setGameOverMessage(false, "loser A")
            looser()
        }
    }
})
controller.player1.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (state == 1) {
        if (stroke != 1) {
            stroke = 1
            distance += 1
        } else {
            distance += -3
        }
    } else {
        if (state != 2) {
            game.setGameOverMessage(false, "loser A")
            looser()
        }
    }
})
let score = 0
let distance = 0
let distance2 = 0
let stroke2 = 0
let stroke = 0
let state = 0
let big_black_ball = sprites.create(assets.image`myImage`, SpriteKind.Player)
let player_A = sprites.create(assets.image`payer A start`, SpriteKind.Player)
let player_B = sprites.create(assets.image`payer B start0`, SpriteKind.Player)
player_A.changeScale(1, ScaleAnchor.Middle)
player_B.changeScale(1, ScaleAnchor.Middle)
player_A.setPosition(0, 70)
player_B.setPosition(160, 65)
big_black_ball.setPosition(80, 8)
scene.setBackgroundImage(assets.image`water background`)
state = 0
pause(randint(2000, 3000))
if (state == 0) {
    scene.setBackgroundColor(1)
    music.play(music.createSoundEffect(WaveShape.Sine, 1829, 2690, 124, 205, 338, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
}
state = 1
stroke = 1
stroke2 = 1
animation.runImageAnimation(
player_A,
assets.animation`player A`,
200,
true
)
animation.runImageAnimation(
player_B,
assets.animation`player B`,
200,
true
)
animation.runMovementAnimation(
big_black_ball,
animation.animationPresets(animation.flyToCenter),
400,
false
)
let water_splash = sprites.create(img`
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    ................................................
    .................fffffffffffffffff..............
    ......ffffffffffffffffffffffffffffffff..........
    .....ffffffffffffffffffffffffffffffffff.........
    ......fffffffffffffffffffffffffffffffff.........
    ........fffffffffffffffffffffffffffff...........
    ................................................
    ................................................
    ................................................
    ................................................
    `, SpriteKind.Effect)
water_splash.setPosition(66, 70)
animation.runImageAnimation(
water_splash,
assets.animation`water splash`,
200,
true
)
pause(2000)
animation.stopAnimation(animation.AnimationTypes.All, water_splash)
forever(function () {
    if (distance > 19) {
        state = 2
        scene.setBackgroundColor(7)
        game.setGameOverMessage(true, "Winner A " + convertToText(score) + " by " + convertToText(distance - distance2))
        game.gameOver(true)
        game.reset()
    }
    if (distance2 > 19) {
        state = 2
        scene.setBackgroundColor(7)
        game.setGameOverMessage(true, "Winner B " + convertToText(score) + " by " + convertToText(distance2 - distance))
        game.gameOver(true)
        game.reset()
    }
})
forever(function () {
    if (state == 1) {
        score = score + 10
        pause(10)
        player_A.setPosition(distance * 4 + 0, 70)
        player_B.setPosition(distance2 * -4 + 160, 70)
    }
})
