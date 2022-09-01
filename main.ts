input.onButtonPressed(Button.A, function () {
    numero += 1
    basic.showNumber(numero)
})
input.onButtonPressed(Button.AB, function () {
    text = "bye"
})
input.onButtonPressed(Button.B, function () {
    numero += -1
    basic.showNumber(numero)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showString(text)
})
let numero = 0
let text = ""
text = "Hello"
numero = 0
basic.forever(function () {
	
})
