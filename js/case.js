let vector1 = document.querySelector(".vector1")
let vector11 = document.querySelector(".vector1-1")
let after = document.querySelector(".after")
let main2 = document.querySelector(".main2")
let img1 = document.querySelector(".img1")
let minus = document.querySelector(".minus")
let minus11 = document.querySelector(".minus1-1")
vector1.addEventListener("click", function () {
    console.log("ok")
    if (after.style.display == "block") {
        after.style.display = "none"
        img1.style.height = "1024px"
        minus.style.display = "none"
        vector1.style.display = "block"
    }
    else {
        after.style.display = "block"
        img1.style.height = "1224px"
        minus.style.display = "block"
        vector1.style.display = "none"
    }
    minus.addEventListener("click", function () {
        after.style.display = "none"
        img1.style.height = "1024px"
        minus.style.display = "none"
        vector1.style.display = "block"
    })
})
vector11.addEventListener("click", function () {
    if (main2.style.display == "block") {
        main2.style.display = "none"
        minus11.style.display = "none"
        vector11.style.display = "block"
    }
    else {
        main2.style.display = "block"
        minus11.style.display = "block"
        vector11.style.display = "none"
    }
    minus11.addEventListener("click", function () {
        main2.style.display = "none"
        minus11.style.display = "none"
        vector11.style.display = "block"
    })
})

let block = document.querySelector('.block')
let video = document.querySelector('.video')
video.addEventListener('click', function () {
        block.style.height = '213.6vh'
    })
block.addEventListener('click', function () {
    block.style.height = '0vh'
})
