let words = ['hello', 'hi', 'good morning', 'sun', 'python']


function getRandomWords() {
    const removeSpaceWords = words.map(word => word.replace(/ /g, ''))
    words = removeSpaceWords
    const randominxed = Math.floor(Math.random() * words.length)
    return words.splice(randominxed, 1)[0]
}


function createArena(words) {
    return Array(words.length).fill('-')
}

function getUserInput(arena) {
    while (true) {
        const input = prompt(`${arena.join('')}\nВведите букву`).toLowerCase()
        if (input != null) {
            if ((0 != input.length) && (input.length < 2)) {
                return input
            } else {
                alert('Вы вели больше одной буквы, попробуйте еще раз')
            }
        } else {
            return null
        }
    }
}

function main() {
    alert('Загадано слово, угадайте его')
    let change = 0
    const randomwords = getRandomWords()
    let arena = createArena(randomwords)
    while (true) {
        const input = getUserInput(arena)
        let found = false
        if (input != null) {
            for (let i = 0; i < randomwords.length; i++) {
                if (input == randomwords[i]) {
                    arena[i] = input
                    found = true
                }
            }
            if (!found) {
                change++;
            }
            if (!(arena.includes('-'))) {
                break;
            }
        } else {
            break
        }
    }
    console.log(words)
    if (!(words.length == 0)) {
        const choose = prompt(`Игра окончена. Загаданное слово было ${randomwords} Количество попыток ${change}\nХотите повторить игру? y/n`)
        if (choose != null && choose == 'y') {
            main()
        }
    } else {
        alert('Игра окончена. Вы угадали все слова')
        console.log('stop')
    }
}


main()