let div2 = document.querySelector(".div2")
let div3 = document.querySelector(".div3")
let div4 = document.querySelector(".div4")
let div5 = document.querySelector(".div5")
let div6 = document.querySelector(".div6")
let hidden1 = document.querySelector(".hidden1")
let hidden2 = document.querySelector(".hidden2")
let hidden3 = document.querySelector(".hidden3")
let hidden4 = document.querySelector(".hidden4")
let hidden5 = document.querySelector(".hidden5")
let hidden6 = document.querySelector(".hidden6")
let vector1 = document.querySelector(".vector1")
let vector2 = document.querySelector(".vector2")
let vector3 = document.querySelector(".vector3")
let vector4 = document.querySelector(".vector4")
let vector5 = document.querySelector(".vector5")
let vector6 = document.querySelector(".vector6")
let minus1 = document.querySelector(".minus1")
let minus2 = document.querySelector(".minus2")
let minus3 = document.querySelector(".minus3")
let minus4 = document.querySelector(".minus4")
let minus5 = document.querySelector(".minus5")
let minus6 = document.querySelector(".minus6")
let block = document.querySelector(".block")
let rectangle4 = document.querySelector(".rectangle4")
let back4 = document.querySelector(".back4")
let end = document.querySelector(".end")




vector1.addEventListener("click", function () {
    hidden1.style.display = "block";
    div2.style.top = "52px";
    div3.style.top = "52px";
    div4.style.top = "52px";
    div5.style.top = "52px";
    div6.style.top = "52px";
    div2.style.width = "302px";
    div3.style.width = "302px";
    div4.style.width = "302px";
    div5.style.width = "302px";
    div6.style.width = "302px";
    div2.style.position = "absolute";
    div3.style.position = "absolute";
    div4.style.position = "absolute";
    div5.style.position = "absolute";
    div6.style.position = "absolute";
    vector1.style.display = "none";
    minus1.style.display = 'block';
    minus1.style.top = "1262px";
    block.style.position = "relative";
    block.style.top = "-96px";
    rectangle4.style.height = "2683px";
    back4.style.height = "1779px";
    end.style.top = "796px";
})
// vector1.addEventListener("click", function () {
//     if (hidden2.style.display == "block") {
//         hidden1.style.display = "block";
//         div3.style.top = "93px";
//         div4.style.top = "86px";
//         div5.style.top = "77px";
//         div6.style.top = "74px";
//         vector1.style.display = "none";
//         minus1.style.display = 'block';
//         minus1.style.top = "1262px";
//         block.style.position = "relative";
//         block.style.top = "-96px";
//         rectangle4.style.height = "2683px";
//         back4.style.height = "1779px";
//         end.style.top = "796px";
//     }
// })
minus1.addEventListener("click", function () {
    hidden1.style.display = "none";
    vector1.style.display = "block";
    minus1.style.display = 'none';
    div2.style.top = "0px";
    div3.style.top = "0px";
    div4.style.top = "0px";
    div5.style.top = "0px";
    div6.style.top = "10px";
    block.style.top = "-149px";
    block.style.left = "-6px";
    end.style.top = "796px";
    end.style.left = "-1px";
    rectangle4.style.height = "2638px";
    back4.style.height = "1736px";
})
vector2.addEventListener("click", function () {
        hidden2.style.display = "block";
        div3.style.top = "52px";
        div4.style.top = "52px";
        div5.style.top = "52px";
        div6.style.top = "52px";
        div3.style.width = "302px";
        div4.style.width = "302px";
        div5.style.width = "302px";
        div6.style.width = "302px";
        div3.style.position = "absolute";
        div4.style.position = "absolute";
        div5.style.position = "absolute";
        div6.style.position = "absolute";
        vector2.style.display = "none";
        minus2.style.display = 'block';
        minus2.style.top = "1322px";
        block.style.position = "relative";
        block.style.top = "-96px";
        rectangle4.style.height = "2683px";
        back4.style.height = "1779px";
        end.style.top = "796px";
})
vector2.addEventListener("click", function () {
    if (hidden1.style.display == "none") {
        hidden2.style.display = "block";
        div3.style.top = "52px";
        div4.style.top = "52px";
        div5.style.top = "52px";
        div6.style.top = "52px";
        div3.style.width = "302px";
        div4.style.width = "302px";
        div5.style.width = "302px";
        div6.style.width = "302px";
        div3.style.position = "absolute";
        div4.style.position = "absolute";
        div5.style.position = "absolute";
        div6.style.position = "absolute";
        vector2.style.display = "none";
        minus2.style.display = 'block';
        minus2.style.top = "1322px";
        block.style.position = "relative";
        block.style.top = "-96px";
        rectangle4.style.height = "2683px";
        back4.style.height = "1779px";
        end.style.top = "796px";
    }
})
vector2.addEventListener("click", function () {
    if (hidden1.style.display == "block") {
        hidden2.style.display = "block";
        div3.style.top = "93px";
        div4.style.top = "90px";
        div5.style.top = "80px";
        div6.style.top = "80px";
        block.style.top = "-76px";
        rectangle4.style.height = "2700px";
        back4.style.height = "1779px";
        end.style.top = "796px";
    }
})
minus2.addEventListener("click", function () {
    hidden2.style.display = "none";
    vector2.style.display = "block";
    minus2.style.display = 'none';
    div3.style.top = "0px";
    div4.style.top = "0px";
    div5.style.top = "0px";
    div6.style.top = "10px";
    block.style.top = "-149px";
    block.style.left = "-6px";
    end.style.top = "796px";
    end.style.left = "-1px";
    rectangle4.style.height = "2638px";
    back4.style.height = "1736px";
})
// 3
vector3.addEventListener("click", function () {
    hidden3.style.display = "block";
    div4.style.top = "52px";
    div5.style.top = "52px";
    div6.style.top = "52px";
    div3.style.width = "302px";
    div4.style.width = "302px";
    div5.style.width = "302px";
    div6.style.width = "302px";
    div4.style.position = "absolute";
    div5.style.position = "absolute";
    div6.style.position = "absolute";
    vector3.style.display = "none";
    minus3.style.display = 'block';
    minus3.style.top = "1378px";
    block.style.position = "relative";
    block.style.top = "-96px";
    rectangle4.style.height = "2683px";
    back4.style.height = "1779px";
    end.style.top = "796px";
})
vector3.addEventListener("click", function () {
    if (hidden2.style.display == "none") {
        hidden3.style.display = "block";
        div4.style.top = "52px";
        div5.style.top = "52px";
        div6.style.top = "52px";
        div3.style.width = "302px";
        div4.style.width = "302px";
        div5.style.width = "302px";
        div6.style.width = "302px";
        div4.style.position = "absolute";
        div5.style.position = "absolute";
        div6.style.position = "absolute";
        vector3.style.display = "none";
        minus3.style.display = 'block';
        minus3.style.top = "1378px";
        block.style.position = "relative";
        block.style.top = "-96px";
        rectangle4.style.height = "2683px";
        back4.style.height = "1779px";
        end.style.top = "796px";
    }
})
vector3.addEventListener("click", function () {
    if (hidden2.style.display == "block") {
        hidden3.style.display = "block";
        div4.style.top = "135px";
        div5.style.top = "138px";
        div6.style.top = "154px";
        block.style.top = "0px";
        rectangle4.style.height = "2793px";
        back4.style.height = "1886px";
        end.style.top = "796px";
    }
})
minus3.addEventListener("click", function () {
    hidden3.style.display = "none";
    vector3.style.display = "block";
    minus3.style.display = 'none';
    div4.style.top = "0px";
    div5.style.top = "0px";
    div6.style.top = "10px";
    block.style.top = "-149px";
    block.style.left = "-6px";
    end.style.top = "796px";
    end.style.left = "-1px";
    rectangle4.style.height = "2638px";
    back4.style.height = "1736px";
})
vector4.addEventListener("click", function () {
    hidden4.style.display = "block";
    div5.style.top = "52px";
    div6.style.top = "52px";
    div3.style.width = "302px";
    div5.style.width = "302px";
    div6.style.width = "302px";
    div5.style.position = "absolute";
    div6.style.position = "absolute";
    vector4.style.display = "none";
    minus4.style.display = 'block';
    minus4.style.top = "1433px";
    block.style.position = "relative";
    block.style.top = "-96px";
    rectangle4.style.height = "2683px";
    back4.style.height = "1779px";
    end.style.top = "796px";
})
vector4.addEventListener("click", function () {
    if (hidden3.style.display == "none") {
        hidden4.style.display = "block";
        div5.style.top = "52px";
        div6.style.top = "52px";
        div3.style.width = "302px";
        div5.style.width = "302px";
        div6.style.width = "302px";
        div5.style.position = "absolute";
        div6.style.position = "absolute";
        vector4.style.display = "none";
        minus4.style.display = 'block';
        minus4.style.top = "1433px";
        block.style.position = "relative";
        block.style.top = "-96px";
        rectangle4.style.height = "2683px";
        back4.style.height = "1779px";
        end.style.top = "796px";
    }
})
vector4.addEventListener("click", function () {
    if (hidden3.style.display == "block") {
        hidden4.style.display = "block";
        div5.style.top = "174px";
        div6.style.top = "182px";
        block.style.top = "29px";
        rectangle4.style.height = "2812px";
        back4.style.height = "1920px";
        end.style.top = "796px";
    }
})
minus4.addEventListener("click", function () {
    hidden4.style.display = "none";
    vector4.style.display = "block";
    minus4.style.display = 'none';
    div5.style.top = "0px";
    div6.style.top = "10px";
    block.style.top = "-149px";
    block.style.left = "-6px";
    end.style.top = "796px";
    end.style.left = "-1px";
    rectangle4.style.height = "2638px";
    back4.style.height = "1736px";
})
vector5.addEventListener("click", function () {
    hidden5.style.display = "block";
    div6.style.top = "52px";
    div3.style.width = "302px";
    div5.style.width = "302px";
    div6.style.width = "302px";
    div5.style.position = "absolute";
    div6.style.position = "absolute";
    vector5.style.display = "none";
    minus5.style.display = 'block';
    minus5.style.top = "1488px";
    block.style.position = "relative";
    block.style.top = "-96px";
    rectangle4.style.height = "2683px";
    back4.style.height = "1779px";
    end.style.top = "796px";
})
vector5.addEventListener("click", function () {
    if (hidden4.style.display == "none") {
        hidden5.style.display = "block";
        div6.style.top = "52px";
        div3.style.width = "302px";
        div5.style.width = "302px";
        div6.style.width = "302px";
        div5.style.position = "absolute";
        div6.style.position = "absolute";
        vector5.style.display = "none";
        minus5.style.display = 'block';
        minus5.style.top = "1488px";
        block.style.position = "relative";
        block.style.top = "-96px";
        rectangle4.style.height = "2683px";
        back4.style.height = "1779px";
        end.style.top = "796px";
    }
})
vector5.addEventListener("click", function () {
    if (hidden4.style.display == "block") {
        hidden5.style.display = "block";
        div6.style.top = "224px";
        block.style.top = "72px";
        rectangle4.style.height = "2851px";
        back4.style.height = "1970px";
        end.style.top = "796px";
    }
})
minus5.addEventListener("click", function () {
    hidden5.style.display = "none";
    vector5.style.display = "block";
    minus5.style.display = 'none';
    div6.style.top = "10px";
    block.style.top = "-149px";
    block.style.left = "-6px";
    end.style.top = "796px";
    end.style.left = "-1px";
    rectangle4.style.height = "2638px";
    back4.style.height = "1736px";
})
vector6.addEventListener("click", function () {
    hidden6.style.display = "block";
    div3.style.width = "302px";
    div5.style.width = "302px";
    div6.style.width = "302px";
    div5.style.position = "absolute";
    vector6.style.display = "none";
    minus6.style.display = 'block';
    minus6.style.top = "1533px";
    block.style.position = "relative";
    block.style.top = "-96px";
    rectangle4.style.height = "2683px";
    back4.style.height = "1779px";
    end.style.top = "796px";
})
vector6.addEventListener("click", function () {
    if (hidden5.style.display == "none") {
        hidden6.style.display = "block";
        div3.style.width = "302px";
        div5.style.width = "302px";
        div6.style.width = "302px";
        div5.style.position = "absolute";
        vector6.style.display = "none";
        minus6.style.display = 'block';
        minus6.style.top = "1533px";
        block.style.position = "relative";
        block.style.top = "-96px";
        rectangle4.style.height = "2683px";
        back4.style.height = "1779px";
        end.style.top = "796px";
    }
})
vector6.addEventListener("click", function () {
    if (hidden5.style.display == "block") {
        hidden6.style.display = "block";
        block.style.top = "126px";
        rectangle4.style.height = "2898px";
        back4.style.height = "1995px";
        end.style.top = "796px";
    }
})
minus6.addEventListener("click", function () {
    hidden6.style.display = "none";
    vector6.style.display = "block";
    minus6.style.display = 'none';
    block.style.top = "-149px";
    block.style.left = "-6px";
    end.style.top = "796px";
    end.style.left = "-1px";
    rectangle4.style.height = "2638px";
    back4.style.height = "1736px";
})