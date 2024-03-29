const game = {
    words: ['hello', 'javascript', 'good morning', 'sun', 'python'],
    currentWord: '',
    arena: [],
    attemps: 0,
    wrongletters: []
}


function getRandomWords() {
    const removeSpaceWords = game.words.map(word => word.replace(/ /g, ''))
    game.words = removeSpaceWords
    const randominxed = Math.floor(Math.random() * game.words.length)
    return game.words.splice(randominxed, 1)[0]
}

function createArena(words) {
    return Array(words.length).fill('-')
}

function getUserInput(arena) {
    while (true) {
        const input = prompt(`${arena.join('')}\nВведите букву`)
        if (input != null) {
            var regex = /^[a-zA-Z]+$/;
            if ((0 != input.length) && (input.length < 2) && (input.match(regex))) {
                return input.toLowerCase()
            } else {
                alert('Вы вели больше одной буквы или неправильный символ, попробуйте еще раз')
            }
        } else {
            return null
        }
    }
}

function main() {
    alert('Загадано слово, угадайте его')
    game.currentWord = getRandomWords()
    game.arena = createArena(game.currentWord)
    while (true) {
        const input = getUserInput(game.arena)
        let found = false
        console.log(input)
        if (input != null) {
            for (let i = 0; i < game.currentWord.length; i++) {
                if (input == game.currentWord[i]) {
                    game.arena[i] = input
                    found = true
                }
            }
            if (!found) {
                game.attemps++;
            }
            if (!(game.arena.includes('-'))) {
                break;
            }
        } else {
            break
        }
        game.wrongletters.push(input)
    }
    console.log(game.words)
    if (!(game.words.length == 0)) {
        const choose = prompt(`Игра окончена. Загаданное слово было ${game.currentWord} Количество попыток ${game.attemps}\nХотите повторить игру? y/n`)
        if (choose != null && choose == 'y') {
            game.attemps = 0
            main()
        } else {
            alert('игра окончена')
        }
    } else {
        alert('Игра окончена. Вы угадали все слова')
        console.log(game.attemps, game.arena, game.currentWord, game.words, game.wrongletters)
        console.log('stop')
    }
}

main()