/**
 * 闭包
 * Created by cailq on 17-4-12.
 */

var a = new Promise(
    function (resolve, reject) {
        console.log(1)
        setTimeout(() => {
            console.log(2)
        }, 0)
        console.log(3)
        console.log(4)e
        resolve(true)
    }
)

a.then(() => {
    console.log(8)
})

var b = new Promise(() => {
    console.log(5)
    setTimeout(() => console.log(6), 0)
}, 0)

console.log(7)