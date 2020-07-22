const param = Number(prompt('Masukan angka'))

param ? printSegitiga(param) : console.log('Data harus number')
function printSegitiga(param) {
    if(typeof(param) === 'number'){
        for (let a = param; a >= 1; a--) {
            let tampung = '';
            for (let b = 1; b <= a; b++) {
                tampung += b
            }
            console.log(tampung)
        }
    }else{
        console.log('Data harus number')
    }
}

// 12345
// 1234
// 123
// 12
// 1