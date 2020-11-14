$(function () {
    $(".options>li span").eq(1).addClass("span")

    $(".options>li").each(function (i, item) {
        $(item).click(function () {
            $(".options>li span").removeClass("span");

            $(this).find("span").addClass("span");
            if ($(this).index() == 0) {
                $(".input").css({
                    display: "none"
                })
                $("#ma").css({
                    display: "block"
                })
            } else {
                $(".input").css({
                    display: "block"
                })
                $("#ma").css({
                    display: "none"
                })
            }
        })
    })
    $("#ma img").hover(function () {
        $(this).stop().animate({
            left: "-70px"

        })
    }, function () {
        $(this).stop().animate({
            left: "0"
        })
    })

    $("#ma img").hover(function () {
        $("h3").css({
            display: "block"
        })
    }, function () {
        $("h3").css({
            display: "none"
        })
    })
})



$(".btn").click(function () {
    $.ajax({
        type: "get",
        url: "http://jx.xuzhixiang.top/ap/api/login.php",
        data: {
            username: $("input")[0].value,
            password: $("input")[1].value
        }
    }).then(result => {
        // console.log(data);
        if (result.code == 0) {
            alert(result.msg);
        } else {
            var user = {
                token: result.data.token,
                username: result.data.username,
                uid: result.data.id
            }
            sessionStorage.setItem("token", JSON.stringify(user))
            alert(result.msg);
            window.location.href = "http://localhost:8080/html/index.html?username=" + $("input")[0].value + "&id=" + user.uid;
        }
    })
})