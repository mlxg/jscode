/**
 * 闭包
 * Created by cailq on 17-4-12.
 */

var loop = (i) => {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}
for (var i = 0; i < 5; i++) {
    loop(i)
}
for (var i = 0; i < 5; i++) {
    (function (j) {  // j = i
        setTimeout(function () {
            console.log(j);
        }, 1000);
    })(i);
}

console.log(new Date, i);
console.log(i);