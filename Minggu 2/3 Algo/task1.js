const checkPalindrom = kata => {
    let tampung=''
    for(let a = kata.length-1;a>=0;a--){
        tampung += kata[a].toLowerCase()
    }
    return tampung === kata.toLowerCase() ? 'Palindrom' : 'Bukan Palindrom'
}

console.log(checkPalindrom('Kasur Rusak'))
console.log(checkPalindrom('Malam'))
console.log(checkPalindrom('Cep'))