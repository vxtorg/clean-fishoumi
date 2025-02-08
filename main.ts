function bot () {
    if (Plr > 0) {
        Bot = randint(1, 3)
        basic.showLeds(`
            . # # # .
            . # . # .
            . # # # #
            . # . . #
            . # # # #
            `)
        if (Bot == 1) {
            basic.showIcon(IconNames.SmallSquare)
        } else if (Bot == 2) {
            basic.showIcon(IconNames.Square)
        } else {
            basic.showIcon(IconNames.Scissors)
        }
        basic.pause(1000)
        if (Plr == Bot) {
            basic.showIcon(IconNames.Asleep)
            score()
        } else if (Plr == 2 && Bot == 1) {
            basic.showIcon(IconNames.Happy)
            ScorePlr += 1
            score()
        } else if (Plr == 3 && Bot == 1) {
            basic.showIcon(IconNames.Sad)
            ScoreBot += 1
            score()
        } else if (Plr == 1 && Bot == 2) {
            basic.showIcon(IconNames.Sad)
            ScoreBot += 1
            score()
        } else if (Plr == 3 && Bot == 2) {
            basic.showIcon(IconNames.Happy)
            ScorePlr += 1
            score()
        } else if (Plr == 1 && Bot == 3) {
            basic.showIcon(IconNames.Happy)
            ScorePlr += 1
            score()
        } else if (Plr == 2 && Bot == 3) {
            basic.showIcon(IconNames.Sad)
            ScoreBot += 1
            score()
        } else {
            basic.showString("error ")
        }
    }
}
function score () {
    basic.showString("" + (ScorePlr))
    basic.showString("-")
    basic.showString("" + (ScoreBot))
}
function plr () {
    if (input.isGesture(Gesture.TiltLeft)) {
        basic.showIcon(IconNames.SmallSquare)
        if (input.buttonIsPressed(Button.A)) {
            Plr = 1
            basic.showIcon(IconNames.Yes)
            bot()
        }
    } else if (input.isGesture(Gesture.TiltRight)) {
        basic.showIcon(IconNames.Square)
        if (input.buttonIsPressed(Button.B)) {
            Plr = 2
            if (Plr == 2) {
                basic.showIcon(IconNames.Yes)
                bot()
            }
        }
    } else if (input.isGesture(Gesture.LogoDown)) {
        basic.showIcon(IconNames.Scissors)
        if (input.logoIsPressed()) {
            Plr = 3
            basic.showIcon(IconNames.Yes)
            bot()
        }
    } else {
        basic.clearScreen()
    }
}
let ScoreBot = 0
let ScorePlr = 0
let Bot = 0
let Plr = 0
Plr = 2
Bot = 0
basic.forever(function () {
    plr()
})
