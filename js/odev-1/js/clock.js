setInterval(showTime, 1000)

askName()
showTime()

function askName() {
    let userName = prompt("Adınız nedir?")
    document.querySelector("#myName").innerHTML = userName
}

function showTime() {
    // clock operations
    let time = new Date()
    let h = time.getHours()
    let m = time.getMinutes()
    let s = time.getSeconds()

    // adding 0 if less than 10
    h = h < 10 ? `0${h}`: h.toString();
    m = m < 10 ? `0${m}`: m.toString();
    s = s < 10 ? `0${s}`: s.toString();
    
    // day operations
    let dtext;
    d = time.getDay()
    switch (d) {
        case 1:
            dtext = "Pazartesi"
            break
        case 2:
            dtext = "Salı"
            break
        case 3:
            dtext = "Çarşamba"
            break
        case 4:
            dtext = "Perşembe"
            break
        case 5:
            dtext = "Cuma"
            break
        case 6:
            dtext = "Cumartesi"
            break
        case 0:
            dtext = "Pazar"
            break
    }

    let timeInfo = `${h}:${m}:${s} ${dtext}`
    document.getElementById("myClock").innerHTML = timeInfo; 
}