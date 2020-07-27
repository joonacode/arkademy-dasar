// Buat program menggunakan then catch dan try catch untuk mengecek hari kerja

const checkWeekdays = day => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
            const check = dataDay.find(item => item === day.toLowerCase())
            if(check){
                resolve(check)
            }else{
                reject(new Error('Today is not a work day'))
            }
        },  3000)
    })
}

// Pengunaan then dan catch
checkWeekdays('Monday')
    .then(res => console.log(res))
    .catch(err => console.log(err.message))

// Jika langsung di console.log(checkWeekdays('monday')) maka status promisenya pending untuk menangkap data resolve / reject menggunakan then dan catch
// Method then akan terpanggil jika pormisenya fulfilled
// Method catch akan terpanggil jika status promisenya rejected

// Penggunaan try and catch
const asyncWeek = async(param) => {
    try{
        const result = await(checkWeekdays(param))
        console.log(result)
    }catch(err){
        console.log(err.message)
    }
}

asyncWeek('senin')

// async mengubah function menjadi asynchronous
// Await Menunda eksekusi hingga proses asynchronous selesai 
// Didalam block try disimpan code javascript yang mungkin terjadi error / akan mengembailkan nilai jika promisenya fulfilled
// Didalam block catch akan menangkap error yang terjadi pada block try apabila pada block try si error muncul