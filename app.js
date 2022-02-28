
//funtction that updated the UI for time

const countdown = () => {
    const endDate = new Date("Feb 28, 2023 00:00:00").getTime()
    const now = new Date().getTime()

    const difference = endDate - now

    //difining hours, secounds, and days

    const seconds = 1000
    const minutes = seconds * 60
    const hours = minutes * 60 
    const days = hours * 24

    let timeDays = Math.floor(difference / days)
    let timeHours = Math.floor((difference % days) / hours)
    let timeMinutes = Math.floor((difference % hours) / minutes)
    let timeSeconds = Math.floor((difference % minutes) / seconds)

    // displays addtional digit if number is less then 10
    timeHours = timeHours < 10 ? "0" + timeHours : timeHours
    timeMinutes = timeMinutes < 10 ? "0" + timeMinutes : timeMinutes
    timeSeconds = timeSeconds < 10 ? "0" + timeSeconds : timeSeconds
    
    //inserting elements from html ids
    document.getElementById("days").innerHTML = timeDays
    document.getElementById("hours").innerHTML = timeHours
    document.getElementById("minutes").innerHTML = timeMinutes
    document.getElementById("seconds").innerHTML = timeSeconds

}


// takes in the time period you want to repeat
setInterval(countdown, 1000)