try {
    let s = Number(1234)
    let sArr = s.split("",4) 
    let sArrRev = sArr.reverse()
    let sRev = sArrRev.join("")
    console.log(sRev)    
}
catch (message) {
    console.log(message)
    console.log(s)
}
