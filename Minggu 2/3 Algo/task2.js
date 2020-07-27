const reverseWords = kata => {
    const newKata = kata.split(' ');
    const output=[]
    for(let a=newKata.length-1;a>=0;a--){
        output.push(newKata[a])
    }
    return output.join(' ')
}

console.log(reverseWords('Saya Belajar Javascript'))