function RandomWords() {
    words = ['hello', 'hi', 'good morning']
    let randominxed = Math.floor(Math.random() * words.length)
    return words[randominxed]
}

function createArena(words) {
    massive = []
    for (let i = 0; i < words.length; i++) {
        massive.push('-')
    }
    return massive
}

function main() {
    change = 0
    check = RandomWords()
    console.log(words)
    check_two = createArena(check)
    console.log(check_two)
    while (true) {
        words = prompt('Введите букву')
        if (words) {
            console.log(check)
            for (let i = 0; i < check.length; i++) {
                if (words == check[i]) {
                    check_two[i] = words
                }
            }
            console.log(check_two)
            if (!(check_two.includes('-'))) {
                console.log('work if')
                break;
            }
        } else {
            console.log('Work')
            break;
        }
    }
    console.log(`Игра окончена. Количество попыток ${change}`)
}
main()