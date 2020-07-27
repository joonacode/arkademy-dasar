// Program menggunakan callback function untuk melanjutkan dan menampilkan senua bulan menggunakan method map

const getMonth = callback => {
    console.log('Loading...')
    setTimeout(() => {
        const error = false;
        const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'October', 'November', 'Desmber']
        !error ? callback(null, month) : callback(new Error('Sorry data not found'),[])
    }, 4000)
}

getMonth((err, data) => {
    err ? console.log(err.message) : data.map(item => console.log(item))
})