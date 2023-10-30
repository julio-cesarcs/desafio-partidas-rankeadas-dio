main()

function main(){

    let rank = getRank(999,99)
    let level = getLevel(rank)

    console.log(`O Herói tem de saldo de ${rank} está no nível de ${level}`)
}

function getRank(numberWin, numberLose) {
    return numberWin - numberLose
}

function getLevel(rank) {

    if (rank <= 10) {
        return "Ferro"
    } else if (rank >= 11 && rank <= 20) {
        return "Bronze"
    } else if (rank >= 21 && rank <= 50) {
        return "Prata"
    } else if (rank >= 51 && rank <= 80) {
        return "Ouro"
    } else if (rank >= 81 && rank <= 50) {
        return "Diamante"
    } else if (rank >= 91 && rank <= 50) {
        return "Lendário"
    } else if (rank >= 101) {
        return "Imortal"
    }
}
