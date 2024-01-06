radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showIcon(IconNames.Skull)
        basic.pause(500)
        basic.showIcon(IconNames.No)
        basic.pause(500)
    } else {
        basic.showIcon(IconNames.Yes)
    }
})
radio.setGroup(1)
