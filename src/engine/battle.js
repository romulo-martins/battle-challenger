const log = []

function getLog() {
    return log
}

function generateRandomSpeed(playerSpeed) {
    return Math.floor(Math.random() * (playerSpeed + 1))
}

function getFirstPlayer(player1, player2) {
    const player1Speed = generateRandomSpeed(player1.getSpeed())    
    const player2Speed = generateRandomSpeed(player2.getSpeed())
    
    if (player1Speed == player2Speed) {
        return getFirstPlayer(player1, player2)
    } 

    if (player1Speed > player2Speed) {
        return player1
    } else {
        return player2
    }
}

function run(player1, player2) {
    // TODO: implement game rules
}

module.exports = { 
    run, 
    getLog,
    generateRandomSpeed,
    getFirstPlayer
}
