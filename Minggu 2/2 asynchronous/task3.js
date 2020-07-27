// Buat 2 program bebas menggunakan promise

// Program 1 memperkirakan jenis kelamin dari nama depan

// fetch mengembalikan promise
console.log(fetch(`https://api.genderize.io?name=as`))

const checkGender = param => {
    fetch(`https://api.genderize.io?name=${param}`)
    .then(res => res.json())
    .then(result => {
        if(result.error){
            console.log(result.error)
        }else{
            console.log(`Name: ${result.name}`)
            console.log(`Gender: ${result.gender}`)
        }
    })
    .catch(err => console.log(err))
}

checkGender('Guna')
checkGender('Jihyo')

// Program 2 short url

const shortenerUrl = param => {
    fetch(`https://api.shrtco.de/v2/shorten?url=${param}`)
    .then(res => res.json())
    .then(result => {
        if(result.ok){
            const {original_link, short_link} = result.result
            console.log('Original link: ', original_link)
            console.log('Short link: ', short_link)
        }else{
            console.log(result.error)
        }
    })
    .catch(err => console.log('Oops! something went wrong'))
}

shortenerUrl('https://github.com/joonacode/arkademy-dasar')