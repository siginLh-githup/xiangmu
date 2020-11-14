var aInputs = document.querySelectorAll("input[type]");
var aTip = document.querySelectorAll(".tip");
var bg = document.querySelector(".true");
var lv = document.querySelector(".lv");
var lvSpan = lv.children;
var btn = document.querySelector("button");

var regZh = /^1(3|4|5|7|8|9)\d{9}$/
var regPs = /^[A-z]{1}[A-Za-z0-9]{8,20}/i;

aInputs[0].onfocus = function () {
    aTip[0].style.display = "block";
}

aInputs[1].onfocus = function () {
    aTip[1].style.display = "block";
}

aInputs[2].onfocus = function () {
    aTip[2].style.display = "block";
}

aInputs[0].onchange = function () {
    if (!regZh.test(aInputs[0].value)) {
        aTip[0].innerText = "格式不正确，请您输入正确的手机号";
        aTip[0].style.color = "red"

    } else {
        aTip[0].style.display = "none";
        bg.style.background = "url(../images/sprite.png)no-repeat -115px -93px "
    }
}


var btnNum = document.querySelector("#btn")
function RandNum() {
    var num = "123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var str = "";
    for (var i = 0; i < 4; i++) {
        var randIndex = Math.floor(Math.random() * num.length);
        str += num[randIndex];
    }
    return str;
}

btnNum.onclick = function () {
    aInputs[1].value = RandNum();
    var regNum = aInputs[1].value;
    console.log(regNum);
    aInputs[1].onchange = function () {
        var regNum1 = aInputs[1].value;
        console.log(regNum1);
        if (regNum != regNum1) {
            aTip[1].innerText = "验证码格式错误或已失效请重新输入"
            aTip[1].style.color = "red"
        }
    }
}
btn.onmouseover = function () {
    btn.style.background = "red"
}
btn.onmouseout = function () {
    btn.style.background = ""
}

aInputs[2].oninput = function () {
    var flag1 = false;
    var flag2 = false;
    var flag3 = false;
    var val = aInputs[2].value;
    if (aInputs[2].value.length >= 8) {
        lv.style.display = "block";
        for (var i = 0; i < val.length; i++) {
            var CharCode = val.charCodeAt(i);
            if (CharCode >= 65 && CharCode <= 90) {
                flag1 = true;
            }
            if (CharCode >= 48 && CharCode <= 57) {
                flag2 = true;
            }
            if (CharCode >= 97 && CharCode <= 122) {
                flag3 = true;
            }
        }

        if (flag1 && flag2 && flag3) {
            lvSpan[3].style.background = "#ffaa00"
        } else if (flag1 && flag2 || flag1 && flag3 || flag3 && flag2) {
            lvSpan[2].style.background = "#ffaa00"
        } else {
            lvSpan[1].style.background = "#ffaa00"
        }
    }
    btn.onclick = function () {
        console.log(regZh.test(aInputs[0].value));
        console.log(flag1);
        console.log(flag2);
        console.log(flag3);
        if (regZh.test(aInputs[0].value) && flag1 && flag2 && flag3) {
            $.get("http://jx.xuzhixiang.top/ap/api/reg.php", {
                "username": aInputs[0].value,
                "password": aInputs[2].value
            }, data => {
                console.log(data);
                if (data.code = 0) {
                    alert(data.msg);
                }
                alert(data.msg);
            })
        }
    }

}

