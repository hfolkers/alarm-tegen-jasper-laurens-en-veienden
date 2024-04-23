input.onPinPressed(TouchPin.P0, function () {
    music.setBuiltInSpeakerEnabled(false)
    basic.showIcon(IconNames.Angry)
    basic.showIcon(IconNames.Angry)
    basic.showLeds(`
        # # . # #
        . . . . .
        . . . . .
        # # # # #
        # . # . #
        `)
    basic.showLeds(`
        # # . # #
        . . . . .
        . . . . .
        # # # # #
        # . # . #
        `)
    basic.showLeds(`
        # # . # #
        # . . . #
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.showLeds(`
        # # . # #
        # . . . #
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
    basic.showLeds(`
        # # . # #
        # # . # #
        . . . . .
        # . . . #
        . # # # .
        `)
    music.setBuiltInSpeakerEnabled(true)
    music.play(music.tonePlayable(1000, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.play(music.tonePlayable(1000, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    music.setBuiltInSpeakerEnabled(false)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    music.setBuiltInSpeakerEnabled(true)
    for (let index = 0; index < 10000000000; index++) {
        music.play(music.createSoundExpression(WaveShape.Sine, 200, 5000, 255, 255, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    }
})
input.onButtonPressed(Button.AB, function () {
    music.setBuiltInSpeakerEnabled(true)
})
music.setBuiltInSpeakerEnabled(true)
music.play(music.stringPlayable("A B A B A B A B ", 350), music.PlaybackMode.UntilDone)
music.play(music.stringPlayable("A B A B A B A B ", 350), music.PlaybackMode.UntilDone)
basic.pause(1000)
music.play(music.stringPlayable("A G A C5 - - - - ", 550), music.PlaybackMode.UntilDone)
