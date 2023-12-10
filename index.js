const budik = () => {
    const alarm = document.querySelector(".alarm")
    alarm.classList.add("alarm--ring")
}
let addTime = Number(prompt("Zadej počet vteřin:"))
let addTimeMs = addTime * 1000
const zazvon1 = setTimeout(budik, addTimeMs)

let zvuk = document.querySelector(".zvuk")
const play = () => {
    zvuk.play()
}
const zazvon2 = setTimeout(play, addTimeMs)

const zrusOdpocet1 = () => {
    clearTimeout(zazvon1)
}
const tlacitko1 = document.querySelector(".btnElm1")
tlacitko1.addEventListener("click", zrusOdpocet1)

const zrusOdpocet2 = () => {
    clearTimeout(zazvon2)
}
const tlacitko2 = document.querySelector(".btnElm2")
tlacitko2.addEventListener("click", zrusOdpocet2)