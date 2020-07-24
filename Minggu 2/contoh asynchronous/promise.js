const sum = (url, method) => {
    return new Promise((resolve, reject) => {
        const ajax = new XMLHttpRequest();
        ajax.open(method, url);
        ajax.send();
        ajax.onload = () => {
            if(ajax.status === 200){
                const result = JSON.parse(ajax.responseText);
                resolve(result)
            }else{
                reject('Error')
            }
        }
    })
}
const url = 'https://jsonplaceholder.typicode.com/posts';
sum(url, 'GET')
    .then(res => console.log(res))
    .catch(err => console.log(err))

// const sum = (num1, num2) => {
//     return new Promise((resolve, reject) => {
//         if(typeof num1 == 'number' && typeof num2 == 'number'){
//             const data = num1+num2;

//             setTimeout(() => {
//                 resolve(data)
//             }, 3000)
//         }else{
//             reject('inputan harus angka')
//         }
//     })
// }

// sum(10, 90)
//     .then(res => console.log(res))
//     .catch(err => console.log(err))