let send = document.querySelector(".send1")
let name1 = document.getElementById("name")
let number = document.getElementById("number")
let text = document.getElementById("text")
send.addEventListener("click", function () {
    localStorage.setItem(name1.value, number.value,text.value)
})
