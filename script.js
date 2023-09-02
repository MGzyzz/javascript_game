function RandomWords() {
    let words = ['hello', 'hi', 'good morning', 'sun', 'python']
    let removeSpaceWords = words.map(word => word.replace(/ /g, ''))
    let randominxed = Math.floor(Math.random() * removeSpaceWords.length)
    console.log(removeSpaceWords[randominxed])
    return removeSpaceWords[randominxed]
}

function createArena(words) {
    massive = []
    for (let i = 0; i < words.length; i++) {
        massive.push('-')
    }
    return massive
}



function main() {
    alert('Загадано слово, угадайте его')
    let change = 0
    let randomwords = RandomWords()
    let check_two = createArena(randomwords)
    console.log(check_two)
    while (true) {
        words = prompt(`${check_two}\nВведите букву`).toLowerCase()
        console.log(words)
        if (words != null) {
            if (!(words.length > 2)) {
                console.log(randomwords)
                for (let i = 0; i < randomwords.length; i++) {
                    if (words == randomwords[i]) {
                        check_two[i] = words
                    }
                }
                console.log(check_two)
                if (!(check_two.includes('-'))) {
                    break;
                }
            } else {
                console.log('Вы вели больше одной буквы, попробуйте еще раз')
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