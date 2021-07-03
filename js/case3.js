let block = document.querySelector('.block')
let map = document.querySelector('.img5')
map.addEventListener('click', function () {
    block.style.height = '243vh';
})
block.addEventListener('click', function () {
    block.style.height = '0vh'
})
