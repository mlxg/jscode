/**
 * 跨域
 * Created by cailq on 17-4-13.
 */

function startRequest() {
    var ifr = document.creatElement('iframe')
    ifr.style.display = 'none'
    ifr.src = 'www.baidu.com'
    document.body.appendChild(ifr)
}

function checkHash() {
    try {
        var data = location.hash ? location.hash.substring(1) : ''
        if (console.log) {
            console.log(data)
        }
    } catch (e) {
    }
}

setInterval(checkHash, 2000)