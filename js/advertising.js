// NUMBER 1
let vector1 = document.querySelector(".vector1");
let vector22 = document.querySelector(".vector2");
let p1 = document.querySelector(".nonep");
let minus = document.querySelector(".minus1");
vector1.addEventListener("click", function () {
    if (p1.style.display == "block") {
        p1.style.display = "none";
        vector1.style.display = "block";
        minus.style.display = "none"; 
    }
    else {
        p1.style.display = "block"
        vector1.style.display = "none"
        minus.style.display = "block";
        vector2.style.top = "-143px;"
    }
})
minus.addEventListener("click", function () {
    if (minus.style.display == "block") {
        minus.style.display = "none";
        vector1.style.display = "block";
        p1.style.display = "none";
    }
})
// NUMBER 2
let vector2 = document.querySelector(".vector2");
let rectangle4 = document.querySelector(".rectangle4");
let p2 = document.querySelector(".nonep2");
let div = document.querySelector(".div");
let span33 = document.querySelector(".span33");
let btn2 = document.querySelector(".btn2");
let minus2 = document.querySelector(".minus2");
let span22 = document.querySelector(".span22");
let span11 = document.querySelector(".span11");
let endbody = document.querySelector(".endbody");
let end = document.querySelector(".end");
vector2.addEventListener("click", function () {
    if (p2.style.display == "block") {
        p2.style.display = "none";
        vector2.style.display = "block";
        minus2.style.display = "none";
        vector2.style.top = "-128px"
        vector2.style.left = "260px"
    }
    else {
        rectangle4.style.height = "2318px"
        span22.style.display = "none"
        span11.style.display = "none"
        p2.style.display = "block"
        vector2.style.display = "none"
        minus2.style.display = "block"
        minus2.style.top = "162px"
        minus2.style.left = "260px"
        div.style.top = "105px"
        div.style.left = "0px"
        div.style.position = "absolute"
        end.style.top = "-960px"
        end.style.position = "relative"
        endbody.style.height = "534px"
        endbody.style.width = "329px"
        endbody.style.top = "1800px"
        span33.style.left = "1px"
        btn2.style.left = "138px"
    }
})
minus2.addEventListener("click", function () {
    if (minus2.style.display == "block") {
        minus2.style.display = "none";
        rectangle4.style.height = "2213px"
        end.style.top = "-1061px"
        vector2.style.display = "block";
        p2.style.display = "none";
        vector2.style.top = "1181px"
        vector2.style.left = "266px"
        div.style.top = "9px"
        div.style.left = "0px"
        div.style.position = "absolute"
    }
})
// NUMBER 3 yellow-white 1
let vector4 = document.querySelector(".vector4")
let minus4 = document.querySelector(".minus4")
let p4 = document.querySelector(".phidden")
let spannum1 = document.querySelector(".spannum1")
let spannum2 = document.querySelector(".spannum2")
let div2 = document.querySelector(".div22")
let div3 = document.querySelector(".div3")
let div44 = document.querySelector(".div4")
let div5 = document.querySelector(".div5")

vector4.addEventListener("click", function () {
    if (p4.style.display == "block") {
        p4.style.display = "none";
        vector4.style.display = "block";
        minus4.style.display = "none"
    }
    else {
        p4.style.display = "block";
        vector4.style.display = "none";
        minus4.style.display = "block";
        spannum1.classList.add("stylenum1")
        spannum2.classList.add("stylenum2")
        div2.style.top = "-934px"
        div2.style.left = "-8px"
        div2.style.position = "relative"
        div3.style.top = "-963px"
        div3.style.left = "-8px"
        div3.style.position = "relative"
        div44.style.top = "-989px"
        div44.style.left = "-8px"
        div44.style.position = "relative"
        div5.style.top = "-1626px"
        div5.style.left = "-8px"
        div5.style.position = "relative"
    }
     if (p1.style.display == "block" && p2.style.display == "block") {
        console.log("fqqqqqq")
        div2.style.left = "-1px";
        div2.style.position = "relative";
        div2.style.top = "101px";
        div3.style.top = "70px";
        div3.style.left = "-1px";
        div3.style.position = "relative";
        div44.style.top = "37px";
        div44.style.left = "-1px";
        div44.style.position = "relative";
        div5.style.top = "-527px";
        div5.style.left = "-1px";
        div5.style.position = "relative";
        minus4.style.top = "1566px"
        }
     if (p1.style.display == "none" && p2.style.display == "none") {
        console.log("fqqqqqq")
        div2.style.left = "-1px";
        div2.style.position = "relative";
        div2.style.top = "101px";
        div3.style.top = "70px";
        div3.style.left = "-1px";
        div3.style.position = "relative";
        div44.style.top = "37px";
        div44.style.left = "-1px";
        div44.style.position = "relative";
        div5.style.top = "-532px";
        div5.style.left = "-1px";
        div5.style.position = "relative";
        minus4.style.top = "1566px"
        }
})
minus4.addEventListener("click", function () {
    if (minus4.style.display == "block") {
        minus4.style.display = "none";
        vector4.style.display = "block";
        p4.style.display = "none";
        spannum1.classList.remove("stylenum1")
        spannum2.classList.remove("stylenum2")
        div2.style.top = "-1046px"
        div3.style.top = "-1056px"
        div44.style.top = "-1060px"
        div5.style.top = "-1668px"
    }
    if (p1.style.display == "block" && p2.style.display == "block") {
        console.log("fqqqqqsedrfgyhuj435657q")
        div2.style.left = "0px";
        div2.style.position = "relative";
        div2.style.top = "10px";
        div3.style.top = "25px";
        div3.style.left = "0px";
        div3.style.position = "relative";
        div44.style.top = "18px";
        div44.style.left = "0px";
        div44.style.position = "relative";
        div5.style.top = "-426px";
        div5.style.left = "0px";
        div5.style.position = "relative";
        minus4.style.top = "1566px"
}
    if (p1.style.display == "none" && p2.style.display == "none") {
        console.log("fqqqqqsedrfgyhuj435657q")
        div2.style.left = "0px";
        div2.style.position = "relative";
        div2.style.top = "10px";
        div3.style.top = "25px";
        div3.style.left = "0px";
        div3.style.position = "relative";
        div44.style.top = "18px";
        div44.style.left = "0px";
        div44.style.position = "relative";
        div5.style.top = "-532px";
        div5.style.left = "0px";
        div5.style.position = "relative";
        minus4.style.top = "1566px"
}
})

// NUMBER 4 yellow-white 2
let vector5 = document.querySelector(".vector5")
let minus5 = document.querySelector(".minus5")
let div3top = document.querySelector(".div3")
let div4top = document.querySelector(".div4")
let phidden1 = document.querySelector(".phidden")
let div5top = document.querySelector(".div5")
let p5 = document.querySelector(".phidden2")
let spannum3 = document.querySelector(".spannum5")
let spannum4 = document.querySelector(".spannum4")

vector5.addEventListener("click", function () {
    if (p5.style.display == "block") {
        p5.style.display = "none";
        vector5.style.display = "block";
        minus5.style.display = "none"
    }
    else {
        div3top.style.top = "-1029px"
        div4top.style.top = "-1029px"
        div5top.style.top = "-1620px"
        p5.style.display = "block";
        vector5.style.display = "none";
        minus5.style.display = "block";
        minus5.style.position = "absolute";
        minus5.style.left = "265px";
        minus5.style.top = "1661px";
        spannum4.classList.add("stylenum4")
        spannum5.classList.add("stylenum5")
    }

   if (phidden1.style.display == "block") {
        div3top.style.top = "-907px";
        div4top.style.top = "-948px";
        div5top.style.top = "-1592px";
    } 
   if (phidden1.style.display == "none") {
        div3top.style.top = "50px";
        div4top.style.top = "33px";
        div5top.style.top = "-524px";
    }
    if (p1.style.display == "block" && p2.style.display == "block") {
        div3.style.top = "133px";
        div4top.style.top = "118px";
        div5top.style.top = "-507px";
        rectangle4.style.height = "2400px";
        span33top.style.top = "2379px";
        btn2top.style.top = "2359px";
        span22end.style.top = "2200px";
        endfishtop.style.top = "2235px";
        btn1.style.top = "2275px";
        span11end.style.top = "2132px";
        endbodytop.style.height = "613px"
        div3.style.left = "-3px";
    } 
})
minus5.addEventListener("click", function () {
    if (minus5.style.display == "block") {
        div3top.style.top = "-1042px"
        div4top.style.top = "-1040px"
        div5top.style.top = "-1636px"
        minus5.style.display = "none";
        vector5.style.display = "block";
        p5.style.display = "none";
        spannum4.classList.remove("stylenum4")
        spannum5.classList.remove("stylenum5")
    }
    if (phidden1.style.display == "none") {
        div3top.style.top = "20px";
        div4top.style.top = "17px";
        div5top.style.top = "-524px";
    } 
})
// NUMBER 3 yellow-white 3
let vector6 = document.querySelector(".vector6")
let minus6 = document.querySelector(".minus6")
let p6 = document.querySelector(".phidden3")
let spannum5 = document.querySelector(".spannum8")
let spannum6 = document.querySelector(".spannum9")
let rectangle4top = document.querySelector(".rectangle4")
let endbodytop = document.querySelector(".endbody")
let phidden2 = document.querySelector(".phidden2")
let div4top2 = document.querySelector(".div4")
let div5top2 = document.querySelector(".div5")
let endfishtop = document.querySelector(".endfish")
let btn1 = document.querySelector(".btn1")
let btn2top = document.querySelector(".btn2")
let span33top = document.querySelector(".span33")
let span22top = document.querySelector(".span22")
let span11top = document.querySelector(".span11")
let span22end = document.querySelector(".end .span22")
let span11end = document.querySelector(".end .span11")

vector6.addEventListener("click", function () {
    if (p6.style.display == "block") {
        p6.style.display = "none";
        vector6.style.display = "block";
        minus6.style.display = "none"
        div3.style.marginTop = "50px"
    }
    else {
        p6.style.display = "block";
        vector6.style.display = "none";
        minus6.style.display = "block";
        spannum6.classList.add("stylenum9")
        spannum5.classList.add("stylenum8")
    }
    if (phidden2.style.display == "block") {
        rectangle4top.style.height = "2438px";
        endbodytop.style.height = "682px";
        div4top2.style.top = "-905px";
        div5top2.style.top = "-1592px";
        span11top.style.display = "none";
        span22top.style.display = "none";
        endfishtop.style.top = "2249px";
        btn1.style.top = "2306px";
        span33top.style.top = "2400px";
        span22end.style.top = "2210px";
        span11end.style.top = "2149px";
        btn2top.style.top = "2380px";
    }
    if (p1.style.display == "block" && p2.style.display == "block") {
        div4top2.style.top = "133px";
        div4top2.style.left = "-3px";
        div5top2.style.top = "-538px";
        div5top2.style.left = "-3px";
        rectangle4.style.height = "2492px";
        end.style.top = "-885px"
    } 
})
minus6.addEventListener("click", function () {
    if (minus6.style.display == "block") {
        minus6.style.display = "none";
        vector6.style.display = "block";
        p6.style.display = "none";
        spannum5.classList.remove("stylenum8")
        spannum6.classList.remove("stylenum9")
    }
})
// NUMBER 3 yellow-white 4
let vector7 = document.querySelector(".vector7")
let minus7 = document.querySelector(".minus7")
let p7 = document.querySelector(".phidden4")
let spannum11 = document.querySelector(".spannum11")
let spannum12 = document.querySelector(".spannum12")
let phidden3 = document.querySelector(".phidden3")
let div5top3 = document.querySelector(".div5")

vector7.addEventListener("click", function () {
    if (p7.style.display == "block") {
        p7.style.display = "none";
        vector7.style.display = "block";
        minus7.style.display = "none"
    }
    else {
        p7.style.display = "block";
        vector7.style.display = "none";
        minus7.style.display = "block";
        spannum11.classList.add("stylenum11")
        spannum12.classList.add("stylenum12")
    }
})
minus7.addEventListener("click", function () {
    if (minus7.style.display == "block") {
        minus7.style.display = "none";
        vector7.style.display = "block";
        p7.style.display = "none";
        spannum11.classList.remove("stylenum11")
        spannum12.classList.remove("stylenum12")
    }
})
// NUMBER 3 yellow-white 5
let vector8 = document.querySelector(".vector8")
let minus8 = document.querySelector(".minus8")
let p9 = document.querySelector(".phidden5")
let p44 = document.querySelector(".phidden4")
let spannum14 = document.querySelector(".spannum14")
let spannum15 = document.querySelector(".spannum15")


vector8.addEventListener("click", function () {
    if (p9.style.display == "block") {
        p9.style.display = "none";
        vector8.style.display = "block";
        minus8.style.display = "none"
    }
    else {
        p9.style.display = "block";
        vector8.style.display = "none";
        minus8.style.display = "block";
        spannum14.classList.add("stylenum14")
        spannum15.classList.add("stylenum15")
    }
    if (p44.style.display == "block") {
        rectangle4top.style.height = "2438px";
        endbodytop.style.height = "782px";
        endfishtop.style.top = "2349px";
        btn1.style.top = "2406px";
        span33top.style.top = "2500px";
        span22end.style.top = "2310px";
        span11end.style.top = "2249px";
        btn2top.style.top = "2480px";
        div5top.style.top = "-1666px"
    }
    if (p44.style.display == "none") {
        rectangle4top.style.height = "2279px";
        endbodytop.style.height = "580px";
        endfishtop.style.top = "2212px";
        btn1.style.top = "2268px";
        span33top.style.top = "2359px";
        span22end.style.top = "2168px";
        span11end.style.top = "2104px";
        btn2top.style.top = "2343px";
        div5top.style.top = "-586px"
        span22top.style.display = "none";
        span11top.style.display = "none";
    }
    if (p1.style.display == "block" && p2.style.display == "block") {
        div5top2.style.top = "-638px";
        div5top2.style.left = "-3px";
        rectangle4.style.height = "2543px";
        end.style.top = "-948px"
    } 
})
minus8.addEventListener("click", function () {
    if (minus8.style.display == "block") {
        minus8.style.display = "none";
        vector8.style.display = "block";
        p9.style.display = "none";
        spannum14.classList.remove("stylenum14")
        spannum15.classList.remove("stylenum15")
    }
})