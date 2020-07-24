// Buat 2 program bebas menggunakan promise

// Program 1 memperkirakan jenis kelamin dari nama depan

const checkGender = param => {
    return new Promise((resolve, reject) => {
        fetch(`https://api.genderize.io?name=${param}`)
        .then(res => res.json())
        .then(response => resolve(response))
        .catch(err => reject(err))
    })
}
checkGender('Guna')
    .then(res => {
        if(res.error){
            console.log(res.error)
        }else{
            console.log(`Name: ${res.name}`)
            console.log(`Gender: ${res.gender}`)
        }
    })
    .catch(err => console.log(err))

// Program 2 short url

const shortenerUrl = param => {
    return new Promise((resolve, reject) => {
        fetch(`https://api.shrtco.de/v2/shorten?url=${param}`)
        .then(res => res.json())
        .then(response => resolve(response))
        .catch(err => reject('Oops! something went wrong'))
    })
}

shortenerUrl('https://github.com/joonacode/arkademy-dasar')
    .then(res => {
        if(res.ok){
            const {original_link, short_link} = res.result
            console.log('Original link: ', original_link)
            console.log('Short link: ', short_link)
        }else{
            console.log(res.error)
        }
        
    })
    .catch(err => console.log(err))