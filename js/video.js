let block = document.querySelector('.block')
let video = document.querySelectorAll('.vid')
let div = document.querySelectorAll('.div')
let person3 = document.querySelector(".person3")
let imgback3 = document.querySelector(".imgback3")
for (let i = 0; i < video.length; i++){
    for (let m = 0; m < div.length; m++) {
        if (div[0].addEventListener("click", function () {
            div[0].style.transform = "scale(1.1)"
            div[0].style.transition = '1s';
            div[0].style.position = 'absolute';
            div[0].style.zIndex = '11';
            div[0].style.left = '88px';
            div[0].style.top = '50px';
            div[0].style.height = '290px';
            div[0].style.width = '150px';
            block.style.height = '159vh'
            video[0].style.display = "none";
            video[1].style.top = "188px"
            video[1].style.left = "187px"
            video[2].style.top = "369px"
        }));
        if (block.addEventListener('click', function () {
            div[0].style.transform = "scale(1)"
            div[0].style.left = '0px';
            div[0].style.top = '0px';
            block.style.height = '0vh'
            video[0].style.display = "block";
            video[1].style.top = "196px"
            video[1].style.left = "195px"
            div[1].style.position = "relative";
            div[1].style.left = "-8px"
            div[1].style.top = "-8px"
        }));
        // 
        if (div[1].addEventListener("click", function () {
            div[1].style.transform = "scale(1.1)"
            div[1].style.transition = '1s';
            div[1].style.position = 'absolute';
            div[1].style.zIndex = '11';
            div[1].style.left = '-89px';
            div[1].style.top = '50px';
            block.style.height = '159vh'
            video[1].style.display = "none";
            video[2].style.top = "369px";
        }));
        if (block.addEventListener('click', function () {
            div[1].style.transform = "scale(1)"
            div[1].style.top = "-91px"
            div[0].style.top = "-8px"
            div[0].style.left = "-8px"
            div[0].style.position = "relative"
            block.style.height = '0vh'
            video[1].style.display = "block";
            video[2].style.top = "290px";
            video[0].style.left = "37px";
            video[0].style.top = "194px";
            imgback3.style.top = "422px"
            imgback3.style.left = "0px"
            person3.style.top = "432px"
            person3.style.left = "11px"
        }));
        // // // 
        if (div[2].addEventListener("click", function () {
            div[2].style.transform = "scale(1.1)"
            div[2].style.transition = '1s';
            div[2].style.position = 'absolute';
            div[2].style.zIndex = '11';
            div[2].style.top = '-66px';
            block.style.height = '159vh'
            video[2].style.display = "none";
            person3.style.width = "268px"
            imgback3.style.width = "286px"
        }));
        if (block.addEventListener('click', function () {
            div[2].style.transform = "scale(1)"
            div[2].style.top = '9px';
            block.style.height = '0vh'
            video[2].style.display = "block";
        }));
    }
}
