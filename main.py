def bot():
    global Bot
    if Plr > 0:
        Bot = randint(1, 3)
        basic.show_leds("""
            . # # # .
            . # . # .
            . # # # #
            . # . . #
            . # # # #
            """)
        if Bot == 1:
            basic.show_icon(IconNames.SMALL_SQUARE)
        elif Bot == 2:
            basic.show_icon(IconNames.SQUARE)
        else:
            basic.show_icon(IconNames.SCISSORS)
        basic.pause(2000)
        if Plr == Bot:
            basic.show_icon(IconNames.ASLEEP)
        elif Plr == 2 and Bot == 1:
            basic.show_icon(IconNames.HAPPY)
        elif Plr == 3 and Bot == 1:
            basic.show_icon(IconNames.SAD)
        elif Plr == 1 and Bot == 2:
            basic.show_icon(IconNames.SAD)
        elif Plr == 3 and Bot == 2:
            basic.show_icon(IconNames.HAPPY)
        elif Plr == 1 and Bot == 3:
            basic.show_icon(IconNames.HAPPY)
        elif Plr == 2 and Bot == 3:
            basic.show_icon(IconNames.SAD)
        else:
            basic.show_string("error ")
def plr():
    global Plr
    if input.is_gesture(Gesture.TILT_LEFT):
        basic.show_icon(IconNames.SMALL_SQUARE)
        if input.button_is_pressed(Button.A):
            Plr = 1
            basic.show_icon(IconNames.YES)
            bot()
    elif input.is_gesture(Gesture.TILT_RIGHT):
        basic.show_icon(IconNames.SQUARE)
        if input.button_is_pressed(Button.B):
            Plr = 2
            if Plr == 2:
                basic.show_icon(IconNames.YES)
                bot()
    elif input.is_gesture(Gesture.LOGO_DOWN):
        basic.show_icon(IconNames.SCISSORS)
        if input.logo_is_pressed():
            Plr = 3
            basic.show_icon(IconNames.YES)
            bot()
    else:
        basic.clear_screen()
Bot = 0
Plr = 0
Plr = 2
Bot = 0

def on_forever():
    plr()
basic.forever(on_forever)
