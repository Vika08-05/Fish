let block = document.querySelector('.block')
let adress = document.querySelector('.adress')
adress.addEventListener('click', function () {
        block.style.height = '143vh'
    })
block.addEventListener('click', function () {
    block.style.height = '0vh'
})

let send = document.querySelector(".send1")
let name1 = document.getElementById("name")
let number = document.getElementById("number")
send.addEventListener("click", function () {
    localStorage.setItem(name1.value, number.value)
})

// ////////////////////////////////////////////////////////////////////
const Direction = {
  left: `left`,
  right: `right`,
}
let items = document.querySelectorAll(`.item`);
let maxLength = items.length;
let slideWrapper = document.querySelector(`.wrap`);
let leftButton = `<button type="button" class="custom-arrows custom-arrows--disappearing custom-arrows--prev" data-action="left"><img class="prev" src="img/desktop/Arrow 2.png" alt=""></button>`;
let rightButton = `<button type="button" class="custom-arrows custom-arrows--disappearing custom-arrows--next" data-action="right"><img class="next" src="img/desktop/Arrow 2.png" alt=""></button>`;

if (maxLength = 3 ) {
  slideWrapper.insertAdjacentHTML('beforebegin',leftButton);
  slideWrapper.insertAdjacentHTML('afterend',rightButton);
  document.addEventListener(`click`, (evt) => {
    let eventTarget = evt.target;
    if(eventTarget.classList.contains(`custom-arrows`)) {
      nextSlide(eventTarget.getAttribute(`data-action`));
    } 
    const sliderContainer = eventTarget;
    const data = {"event":"command","func":"pauseVideo","args":""};
    const message = JSON.stringify(data);

    if (sliderContainer.querySelector(`.boom iframe`)) {
      document.querySelector(`iframe [position="3"]`).contentWindow.postMessage(message, '*');
    }
  })
}
items.forEach((it, index) => {
  it.setAttribute(`position`, index + 1)
})

function nextSlide(direction) {
  let item3 = document.querySelector(".item-3")
  let item1 = document.querySelector(".item-1")
  let item2 = document.querySelector(".item-2")
  console.log(direction);
  if (Direction.right === direction) {
    document.querySelector('.item[position = "1"]').style.zIndex = "1"
    document.querySelector('.item[position = "3"]').style.zIndex = "1"
    items.forEach((it, index) => {
      let prevValue = +it.getAttribute(`position`);
      let nextValue = prevValue - 1 < 1 ? 3 : prevValue - 1;
      it.setAttribute(`position`, nextValue);
    })
  } else {
    document.querySelector('.item[position = "1"]').style.zIndex = "1"
    document.querySelector('.item[position = "3"]').style.zIndex = "1"
    items.forEach((it, index) => {
      let prevValue = +it.getAttribute(`position`);
      let nextValue = prevValue + 1 > maxLength ? 1 : prevValue + 1;
      it.setAttribute(`position`, nextValue);
    })
  }
  document.querySelector('.item[position = "2"]').style.zIndex = "2"
  if (item3.style.zIndex = 2) {
    item3.style.left = "431px";
  }
  if (item3.style.zIndex = 3) {
    // item3.style.left = "500px";
    item3.style.left = "432px";
  }
  if (item1.style.zIndex = 2) {
    item1.style.left = "424px";
  }
  if (item1.style.zIndex = 3) {
    item1.style.left = "460px";
  }
  if (item2.style.zIndex = 1) {
    item2.style.left = "498px";
    // item2.style.left = "522px";
  }
}
let rightClick = function() {}



let header = document.querySelector("header")
let aboutus = document.querySelector(".about-us")
let rectangle1 = document.querySelector(".rectangle1")
let bodyspan = document.querySelector(".body-span")
let rectangle2 = document.querySelector(".rectangle2")
let p1 = document.querySelector(".p1")




let fish1 = [];
for (let i = 2,j=0; i < 20; i++,j++) {
    if(i<10){
        fish1[j] =`img/animation1/1_000${i}.png`; 
    }
    else{
        fish1[j] =`img/animation1/1_00${i}.png`; 
    }
}
console.log(fish1);

let scroll = true;
let lastScroll = 0;
function checkScroll() {
    let currentScroll = document.documentElement.scrollTop || document.body.scrollTop; 
    if (currentScroll > 0 && lastScroll <= currentScroll) {
        lastScroll = currentScroll;
        scroll = true;
    } else {
        lastScroll = currentScroll;
        scroll = false;
    }

}

if (window.matchMedia("(min-width: 310px) and (max-width: 425px)").matches) {
    let img_fish1 = document.querySelector('.header-img')
    window.addEventListener('scroll', function () {
      checkScroll();
      if (this.pageYOffset <= 10) {
        aboutus.style.marginTop = "566px"
        img_fish1.src = fish1[0];
        header.style.position= 'fixed';
        header.style.top= '-3px';
        img_fish1.style.top = '0';
        rectangle1.style.position = 'fixed';
        rectangle1.style.marginTop = '0px';
        rectangle2.style.position = 'fixed';
        rectangle2.style.marginTop = '0px';
        bodyspan.style.position = 'fixed';
        bodyspan.style.marginTop = '0px';
        p1.style.position = 'fixed';
        p1.style.marginTop = '0px';
    }
    else if (this.pageYOffset <= 30) {
        img_fish1.src = fish1[1]
    }
    else if (this.pageYOffset <= 40) {
        img_fish1.src = fish1[2]
    }
    else if (this.pageYOffset <= 50) {
        img_fish1.src = fish1[3]
    }
    else if (this.pageYOffset <= 60) {
        img_fish1.src = fish1[4]
    }
    else if (this.pageYOffset <= 70) {
        img_fish1.src = fish1[5]
    }
    else if (this.pageYOffset <= 80) {
        img_fish1.src = fish1[6]
    }
    else if (this.pageYOffset <= 90) {
        img_fish1.src = fish1[7]
    }
    else if (this.pageYOffset <= 100) {
        img_fish1.src = fish1[8]
    }
    else if (this.pageYOffset <= 110) {
        img_fish1.src = fish1[9]
    }
    else if (this.pageYOffset <= 120) {
        img_fish1.src = fish1[10]
    }
    else if (this.pageYOffset <= 130) {
        img_fish1.src = fish1[11]
    }
    else if (this.pageYOffset <= 140) {
        img_fish1.src = fish1[12]
    }
    else if (this.pageYOffset <= 150) {
        img_fish1.src = fish1[13]
    }
    else if (this.pageYOffset <= 160) {
        img_fish1.src = fish1[14]
    }
    else if (this.pageYOffset <= 170) {
        img_fish1.src = fish1[15]
    }
    else if (this.pageYOffset <= 180) {
        img_fish1.src = fish1[16];
        if(!scroll){
            img_fish1.style.position= 'fixed';
            img_fish1.style.top= '0';
        }
    }
    else if (this.pageYOffset >= 180 && this.pageYOffset <= 190) { 
        img_fish1.src = fish1[17]
        if(scroll){
          header.style.position = 'relative';
          aboutus.style.marginTop = "0px";
          rectangle1.style.position = 'absolute';
          rectangle1.style.marginTop = '0px';
          rectangle2.style.position = 'absolute';
          rectangle2.style.marginTop = '0px';
          bodyspan.style.position = 'absolute';
          bodyspan.style.marginTop = '0px';
          p1.style.position = 'absolute';
          p1.style.marginTop = '22px';
        }
    }
    else if (this.pageYOffset >= 190 || this.pageYOffset < 190+350) {
        img_fish1.src = fish1[17];
        if(!scroll){
          // img_fish1.style.position= 'fixed';
          // img_fish1.style.top = '0';
        }
    }
  });
}