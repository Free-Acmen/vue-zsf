import { server, apikey } from './serverConfig'

export const request = url => new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()
    xhr.open('GET', url)
    xhr.send(null)
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                resolve(JSON.parse(xhr.responseText))
            } else {
                reject(`错误: ${xhr.status}`)
            }
        }
    }
})

export const ajax = (...args) => {
    // let agrs = [].slice.call(arguments)
    let ajaxArr = agrs.map(function(val){
        return request(val)
    })
    return Promise.all(ajaxArr)
}


//影院热映
export const hotMovie = (count, start) => {
    return request(`${server}/v2/movie/in_theaters?apikey=${apikey}&count=${count}&start=${start}`)
}
