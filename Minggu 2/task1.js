/* 
1. map()

Digunakan untuk melakukan perulangan dan mengembalikan nilai array baru 
contoh: array.map(v => v)

2. filter()

Method filter mengembalikan nilai array dari hasil nilai yang sudah di filter
contoh: array.filter(v => v < 20)


3. every()

Untuk mengecek apakah semua array lulus dari pengecekan. mengembalikan nilai true atau false
contoh: array.every(v => v > 10)

4. find()

Method find mengembalikan nilai elemen array pertama yang lulus pengecekan.
contoh: array.find(v => v > 5)


5. push()

Method push menambahkan elemen baru ke akhir array
contoh: array.push('widodo')


6. pop()

Method pop menghapus elemen terakhir dari array
contoh: array.pop()


7. Number()

konversi angka didalam kutip (string) ke number 
Number('90')


8. toUpperCase()

Untuk mengkonversi string ke huruf besar / kapital
string.toUpperCase()


9. toLowerCase()

Untuk mengkonversi string ke huruf kecil
string.toLowerCase()


10. trim()

Method trim() menghilangkan spasi dari kedua sisi string awal dan akhir: 
string.trim()
*/

const x = [2, 6,1, 10];
console.log(x.every(v => v > 5))