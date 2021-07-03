let vector1 = document.querySelector(".vector11")
let vector22 = document.querySelector(".vector22")
let after = document.querySelector(".after")
let img11 = document.querySelector(".img11")
let part1 = document.querySelector(".part1")
let minus = document.querySelector(".minus22")
vector1.addEventListener("click", function () {
    if (after.style.display == "block") {
        after.style.display = "none"
        minus.style.display = "none"
        vector1.style.display = "block"
    }
    else {
        after.style.display = "block"
        img11.style.height = "1600px"
        part1.style.height = "1438px"
        minus.style.display = "block"
        vector1.style.display = "none"
        vector22.style.position = "relative"
        vector22.style.top = "292px"
    }
    minus.addEventListener("click", function () {
        after.style.display = "none"
        minus.style.display = "none"
        vector1.style.display = "block"
        img11.style.height = "1294px"
        part1.style.height = "1180px"
    })
})
let afterdrop = document.querySelector(".after-drop")
let img111 = document.querySelector(".img11")
let part11 = document.querySelector(".part1")
let minus33 = document.querySelector(".minus33")
vector22.addEventListener("click", function () {
    if (afterdrop.style.display == "block") {
        afterdrop.style.display = "none"
        minus33.style.display = "none"
        vector22.style.display = "block"
    }
    else {
        afterdrop.style.display = "block"
        img111.style.height = "1525px"
        part11.style.height = "1372px"
        minus33.style.display = "block"
        vector22.style.display = "none"
    };
    minus33.addEventListener("click", function () {
        afterdrop.style.display = "none"
        minus33.style.display = "none"
        vector22.style.display = "block"
        img11.style.height = "1294px"
        part11.style.height = "1180px"
    });
});
if (after.style.display = 'block' && vector22.addEventListener("click", function () {
    console.log("qwqeweqweqewq")
    part1.style.height = "1436px"
    img11.style.height = "1722px"
}));
let block11 = document.querySelector('.block1')
let video1 = document.querySelector('.video1')
video1.addEventListener('click', function () {
    block11.style.height = '245vh'
});
block11.addEventListener('click', function () {
    block11.style.height = '0vh'
});



// //////////////////////////
let after111 = document.querySelector(".main22")
let vector111 = document.querySelector(".vector1-11")
let minus111 = document.querySelector(".minus1-11")
vector111.addEventListener("click", function () {
    if (after111.style.display == "block") {
        after111.style.display = "none"
        minus111.style.display = "none"
        vector111.style.display = "block"
    }
    else {
        after111.style.display = "block"
        minus111.style.display = "block"
        vector111.style.display = "none"
    };
    minus111.addEventListener("click", function () {
        after111.style.display = "none"
        minus111.style.display = "none"
        vector111.style.display = "block"
    });
});

let after1111 = document.querySelector(".main33")
let vector1111 = document.querySelector(".vector1-111")
let minus1111 = document.querySelector(".minus1-111")
vector1111.addEventListener("click", function () {
    if (after1111.style.display == "block") {
        after1111.style.display = "none"
        minus1111.style.display = "none"
        vector1111.style.display = "block"
    }
    else {
        after1111.style.display = "block"
        minus1111.style.display = "block"
        vector1111.style.display = "none"
    };
    minus1111.addEventListener("click", function () {
        after1111.style.display = "none"
        minus1111.style.display = "none"
        vector1111.style.display = "block"
        vector1111.style.position = "relative"
        vector1111.style.top = "468px"
        vector1111.style.left = "1072px"
    });
});

