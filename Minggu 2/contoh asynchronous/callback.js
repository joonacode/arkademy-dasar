const getDataPost = (url, method, callback) => {
    const ajax = new XMLHttpRequest();

    ajax.open(method, url);
    ajax.send();
    ajax.onload = () => {
        let result = JSON.parse(ajax.responseText)
        callback(result)
    }

}

const url = 'https://jsonplaceholder.typicode.com/posts';

getDataPost(url, 'GET', (result) => {
    console.log(result.map(v => v.title))
})
