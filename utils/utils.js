let sessionGen = () => {
    let s = ""
    for(let i = 0; i < 26; i++){
        s += String.fromCharCode(Math.floor(Math.random() * 26) + 'a'.charCodeAt(0))
    }

    return s;
}

module.exports = {sessionGen};