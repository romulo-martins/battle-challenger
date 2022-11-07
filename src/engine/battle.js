let log = []

function getLog() {
    return log
}

function generateRandomSpeed(playerSpeed) {
    return Math.floor(Math.random() * (playerSpeed + 1))
}

function generateRandomAttack(playerAttack) {
    return Math.floor(Math.random() * (playerAttack + 1))
}

function getFirstPlayer(player1, player2) {
    const player1Speed = generateRandomSpeed(player1.getSpeed())
    const player2Speed = generateRandomSpeed(player2.getSpeed())

    if (player1Speed == player2Speed) {
        return getFirstPlayer(player1, player2)
    }

    if (player1Speed > player2Speed) {
        const firstPlayerMessage = `${player1.name} (${player1Speed}) foi mais rapido que ${player2.name} (${player2Speed}) e irá começar!`
        log.push(firstPlayerMessage)
        return player1
    } else {
        const firstPlayerMessage = `${player2.name} (${player2Speed}) foi mais rapido que ${player1.name} (${player1Speed}) e irá começar!`
        log.push(firstPlayerMessage)
        return player2
    }
}

function run(player1, player2) {
    log = []
    let gameState = 'running'
    let currentPlayer = getFirstPlayer(player1, player2)

    do {
        if (currentPlayer.id == player1.id) {
            const player1Attack = generateRandomAttack(player1.getAttack())
            player2.attributes.life = player2.attributes.life - player1Attack
            const attackMessage = `${player1.name} atacou ${player2.name} com ${player1Attack} de dano, ${player2.name} com ${player2.attributes.life} pontos de vida restantes;`
            log.push(attackMessage)
            if (player2.attributes.life <= 0) {
                player2.state = 'dead'
                gameState = 'stopped'
                const winnerMessage = `${player1.name} venceu a batalha! ${player1.name} ainda tem ${player1.attributes.life} pontos de vida restantes!`
                log.push(winnerMessage)
            } else {
                currentPlayer = player2
            }
        } else {
            const player2Attack = generateRandomAttack(player2.getAttack())
            player1.attributes.life = player1.attributes.life - player2Attack
            const attackMessage = `${player2.name} atacou ${player1.name} com ${player2Attack} de dano, ${player1.name} com ${player1.attributes.life} pontos de vida restantes;`
            log.push(attackMessage)
            if (player2.attributes.life <= 0) {
                player1.state = 'dead'
                gameState = 'stopped'
                const winnerMessage = `${player2.name} venceu a batalha! ${player2.name} ainda tem ${player2.attributes.life} pontos de vida restantes!`
                log.push(winnerMessage)
            } else {
                currentPlayer = player1
            }
        }
    } while (gameState == 'running')
}

module.exports = {
    run,
    getLog,
    generateRandomSpeed,
    getFirstPlayer
}
