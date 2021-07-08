let hidden1 = document.querySelector(".hidden1")
let hidden2 = document.querySelector(".hidden2")
let hidden3 = document.querySelector(".hidden3")
let hidden4 = document.querySelector(".hidden4")
let vector2 = document.querySelector(".vector2")
let vector3 = document.querySelector(".vector3")
let vector4 = document.querySelector(".vector4")
let vector5 = document.querySelector(".vector5")
let minus1 = document.querySelector(".minus1")
let minus2 = document.querySelector(".minus2")
let minus3 = document.querySelector(".minus3")
let minus4 = document.querySelector(".minus4")
let div2 = document.querySelector(".div2")
let div3 = document.querySelector(".div3")
let div4 = document.querySelector(".div4")
let block = document.querySelector(".block")
let rectangle4 = document.querySelector(".rectangle4")
let back4 = document.querySelector(".back4")
let end = document.querySelector(".end")
let white1 = document.querySelector(".white1")
let bot = document.querySelector(".bot")
let white2 = document.querySelector(".white2")
let bot1 = document.querySelector(".bot1")

vector2.addEventListener("click", function () {
    hidden1.style.display = "block";
    white1.style.display = "block";
    bot.style.display = "block";
    div2.style.top = "366px";
    div3.style.top = "366px";
    div4.style.top = "366px";
    div2.style.left = "-3px";
    div3.style.left = "-3px";
    div4.style.left = "-3px";
    div2.style.width = "302px";
    div3.style.width = "302px";
    div4.style.width = "302px";
    div2.style.position = "absolute";
    div3.style.position = "absolute";
    div4.style.position = "absolute";
    vector2.style.display = "none";
    minus1.style.display = 'block';
    minus1.style.top = "1643px";
    minus1.style.left = "250px";
    minus1.style.position = "relative";
    block.style.position = "relative";
    block.style.top = "246px";
    block.style.left = "-10px";
    block.style.width = "315px";
    rectangle4.style.height = "3682px";
    back4.style.height = "1931px";
    end.style.top = "248px";
    end.style.left = "-8px";
    end.style.position = "relative";
})
vector2.addEventListener("click", function () {
    if (hidden2.style.display == "block") {
        console.log("okjfhngfjmghj")
        div3.style.top = "425px";
        div4.style.top = "425px";
        minus2.style.top = "1819px";
        block.style.top = "307px";
        rectangle4.style.height = "3741px";
        back4.style.height = "1988px";
        end.style.top = "304px";
    }
})
vector2.addEventListener("click", function () {
    if (hidden3.style.display == "block") {
        div4.style.top = "741px";
        minus3.style.top = "1869px";
        minus3.style.left = "255px";
        block.style.top = "620px";
        rectangle4.style.height = "4050px";
        back4.style.height = "2302px";
        end.style.top = "614px";
    }
})
vector2.addEventListener("click", function () {
    if (hidden4.style.display == "block") {
        minus4.style.top = "1917px";
        minus4.style.left = "255px";
        block.style.top = "396px";
        rectangle4.style.height = "3829px";
        back4.style.height = "2090px";
        end.style.top = "397px";
    }
})
minus1.addEventListener("click", function () {
    hidden1.style.display = "none";
    white1.style.display = "none";
    bot.style.display = "none";
    vector2.style.display = "block";
    minus1.style.display = 'none';
    div2.style.top = "0px";
    div3.style.top = "0px";
    div4.style.top = "0px";
    block.style.top = "-115px";
    block.style.left = "-10px";
    end.style.top = "-115px";
    end.style.left = "-8px";
    rectangle4.style.height = "3333px";
    back4.style.height = "1575px";
})
vector3.addEventListener("click", function () {
    hidden2.style.display = "block";
    div3.style.top = "80px";
    div4.style.top = "80px";
    div2.style.left = "-3px";
    div3.style.left = "-3px";
    div4.style.left = "-3px";
    div3.style.width = "302px";
    div4.style.width = "302px";
    div3.style.position = "absolute";
    div4.style.position = "absolute";
    vector3.style.display = "none";
    minus2.style.display = 'block';
    minus2.style.top = "1686px";
    minus2.style.left = "247px";
    minus2.style.position = "relative";
    block.style.position = "relative";
    block.style.top = "-35px";
    block.style.left = "-10px";
    block.style.width = "315px";
    rectangle4.style.height = "3420px";
    back4.style.height = "1660px";
    end.style.left = "-8px";
    end.style.top = "-33px";
    end.style.position = "relative";
})
vector3.addEventListener("click", function () {
    if (hidden1.style.display == "block") {
        hidden2.style.display = "block";
        div3.style.top = "426px";
        div4.style.top = "426px";
        minus2.style.display = 'block';
        minus2.style.top = "1817px";
        minus2.style.left = "259px";
        minus2.style.position = "relative";
        block.style.top = "307px";
        rectangle4.style.height = "3510px";
        back4.style.height = "1779px";
        end.style.top = "78px";
    }
})
minus2.addEventListener("click", function () {
    hidden2.style.display = "none";
    vector3.style.display = "block";
    minus2.style.display = 'none';
    div3.style.top = "0px";
    div4.style.top = "0px";
    block.style.top = "-115px";
    block.style.left = "-10px";
    end.style.top = "-115px";
    end.style.left = "-8px";
    rectangle4.style.height = "3333px";
    back4.style.height = "1575px";
})
minus2.addEventListener("click", function () {
    if (hidden1.style.display == "block") {
        hidden2.style.display = "none";
        minus2.style.display = 'none';
        vector3.style.display = 'block';
        div3.style.top = "153px";
        div4.style.top = "155px";
        block.style.top = "35px";
        rectangle4.style.height = "3530px";
        back4.style.height = "1761px";
        end.style.top = "87px";
    }
})
vector4.addEventListener("click", function () {
    white2.style.display = "block";
    bot1.style.display = "block";
    hidden3.style.display = "block";
    div4.style.top = "380px";
    div4.style.left = "-3px";
    div4.style.width = "302px";
    div4.style.position = "absolute";
    vector4.style.display = "none";
    minus3.style.display = 'block';
    minus3.style.top = "1735px";
    minus3.style.left = "247px";
    minus3.style.position = "relative";
    block.style.position = "relative";
    block.style.top = "240px";
    block.style.left = "-10px";
    block.style.width = "315px";
    rectangle4.style.height = "3456px";
    back4.style.height = "1700px";
    end.style.top = "20px";
    end.style.left = "-8px";
    end.style.position = "relative";
})
vector4.addEventListener("click", function () {
    if (hidden2.style.display == "block") {
        hidden3.style.display = "block";
        div4.style.top = "798px";
        minus3.style.display = 'block';
        minus3.style.top = "1867px";
        minus3.style.left = "257px";
        minus3.style.position = "relative";
        block.style.top = "677px";
        rectangle4.style.height = "4112px";
        back4.style.height = "2343px";
        end.style.top = "678px";
    }
})
minus3.addEventListener("click", function () {
    white2.style.display = "none";
    bot1.style.display = "none";
    hidden3.style.display = "none";
    vector4.style.display = "block";
    minus3.style.display = 'none';
    div4.style.top = "0px";
    block.style.top = "-115px";
    block.style.left = "-10px";
    end.style.top = "-115px";
    end.style.left = "-8px";
    rectangle4.style.height = "3333px";
    back4.style.height = "1575px";
})
minus3.addEventListener("click", function () {
    if (hidden2.style.display == "block") {
        hidden3.style.display = "none";
        minus3.style.display = 'none';
        vector4.style.display = 'block';
        div4.style.top = "210px";
        block.style.top = "89px";
        rectangle4.style.height = "3530px";
        back4.style.height = "1761px";
        end.style.top = "87px";
    }
})
vector5.addEventListener("click", function () {
    hidden4.style.display = "block";
    vector5.style.display = "none";
    minus4.style.display = 'block';
    minus4.style.top = "1785px";
    minus4.style.left = "247px";
    minus4.style.position = "relative";
    block.style.position = "relative";
    block.style.top = "35px";
    block.style.left = "-10px";
    block.style.width = "315px";
    rectangle4.style.height = "3479px";
    back4.style.height = "1700px";
    end.style.top = "20px";
    end.style.left = "-8px";
    end.style.position = "relative";
})
vector5.addEventListener("click", function () {
    if (hidden3.style.display == "block") {
        hidden4.style.display = "block";
        minus4.style.display = 'block';
        minus4.style.top = "1917px";
        minus4.style.left = "257px";
        minus4.style.position = "relative";
        block.style.top = "829px";
        rectangle4.style.height = "4267px";
        back4.style.height = "2496px";
        end.style.top = "833px";
    }
})
minus4.addEventListener("click", function () {
    hidden4.style.display = "none";
    vector5.style.display = "block";
    minus4.style.display = 'none';
    block.style.top = "-115px";
    block.style.left = "-10px";
    end.style.top = "-115px";
    end.style.left = "-8px";
    rectangle4.style.height = "3333px";
    back4.style.height = "1575px";
})
minus4.addEventListener("click", function () {
    if (hidden3.style.display == "block") {
        hidden4.style.display = "none";
        minus4.style.display = 'none';
        vector5.style.display = 'block'
        block.style.top = "251px";
        rectangle4.style.height = "3700px";
        back4.style.height = "1942px";
        end.style.top = "257px";
    }
})