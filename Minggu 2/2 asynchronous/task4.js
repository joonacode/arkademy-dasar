// Buat program menggunakan fetch untuk menampilkan semua nama dari rest API jsonplaceholder

const getUser = async() => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json() 
        data.length > 0 ? data.map(v => console.log(v.name)) : console.log('Data not found')
    }catch(err){
        console.log(err)
    }
    
}

getUser()