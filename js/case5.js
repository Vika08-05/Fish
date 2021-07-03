let block1 = document.querySelector('.block')
let map1 = document.querySelector('.img8')
map1.addEventListener('click', function () {
    block1.style.height = '229.5vh';
})
block1.addEventListener('click', function () {
    block1.style.height = '0vh'
})