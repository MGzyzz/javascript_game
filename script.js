function RandomWords(words) {
    let removeSpaceWords = words.map(word => word.replace(/ /g, ''))
    let randominxed = Math.floor(Math.random() * removeSpaceWords.length)
    return removeSpaceWords[randominxed]
}

function createArena(words) {
    massive = []
    for (let i = 0; i < words.length; i++) {
        massive.push('-')
    }
    return massive
}

function check_word(arena) {
    while (true) {
        let word = prompt(`${arena.join('')}\nВведите букву`).toLowerCase()
        if (word != null) {
            if (!(word.length > 1)) {
                return word
            } else {
                console.log('Вы вели больше одной буквы, попробуйте еще раз')
            }
        } else {
            return null
        }
    }
}

function main() {
    alert('Загадано слово, угадайте его')
    let change = 0
    massive_words = ['hello', 'hi', 'good morning', 'sun', 'python']
    let randomwords = RandomWords(massive_words)
    let arena = createArena(randomwords)
    while (true) {
        words = check_word(arena)
        if (words != null) {
            console.log(randomwords)
            for (let i = 0; i < randomwords.length; i++) {
                if (words == randomwords[i]) {
                    arena[i] = words
                }
            }
            console.log(!(randomwords.includes(words)))
            if (!(randomwords.includes(words))) {
                change++;
            }
            console.log(arena)
            if (!(arena.includes('-'))) {
                break;
            }
        } else {
            break
        }
    }
    let choose = prompt(`Игра окончена. Загаданное слово было ${randomwords} Количество попыток ${change}\nХотите повторить игру? y/n`)
    if (choose != null && choose == 'y') {
        main()
    }

}

main()