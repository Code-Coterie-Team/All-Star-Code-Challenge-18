function strCount(str, letter) {
    let globalString = new RegExp(letter, 'g');
    let countOfLetter = str.match(globalString);
    return countOfLetter === 0 || countOfLetter === null || countOfLetter === "" ? 0 : countOfLetter.length


}

let result = strCount("helo", "b");
console.log(result);