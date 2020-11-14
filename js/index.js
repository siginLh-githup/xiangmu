$(function () {
    //头部js
    $(".nav-l li").each(function (i, item) {
        $(item).hover(function () {
            if (i == 0) {
                $(".bigtiggle").stop().slideToggle();
            }
            if (i == 1) {
                $(".tiggle").stop().slideToggle();
            }
            if (i == 2) {
                $(".tiggle").stop().slideToggle();
            }
        })
        $(".bigtiggle").hover(function () {
            console.log("aaa");
            $(this).stop().show();
        }, function () {
            $(this).stop().slideToggle();
        })
        $(".tiggle").hover(function () {
            $(this).stop().show();
        }, function () {
            $(this).stop().slideToggle();
        })
    })

    $(".nav-r>li").each(function (i, item) {
        $(item).hover(function () {
            if (i == 3) {
                $(".shopg").stop().slideToggle();
            }
            if (i == 1) {
                $(".yigou").stop().slideToggle();
            }
            $(".shopg").hover(function () {
                console.log("aaa");
                $(this).stop().show();
            }, function () {
                $(this).stop().slideToggle();
            })
            $(".yigou").hover(function () {
                $(this).stop().show();
            }, function () {
                $(this).stop().slideToggle();
            })
        })

    })
    //论播处导航
    console.log($(".showlist>ul li"))
    $(".meau>ul li").each(function (i, item) {
        $(this).hover(function () {
            $(this).css({
                background: " #e42e3c",
            })
            $(".showNav").show();
        }, function () {
            $(".showNav").hide();
            $(this).css({
                background: ""
            })
        })
    })

    //icon导航
    $(".iconNav li").click(function () {
        $(this).css({
            background: "#e42e3c"
        }).siblings().css({
            background: ""
        })
    })
    $(".iconNav li").each(function (i, item) {
        $(item)[i].removeClass("active");
        $(item).click(function () {
            $this.addClass("active")
            $(this).find("span").css({
                color: "#fff"
            })
        })

    })
    $(".iconNav li").hover(function () {
        $(this).css({
            border: "1px solid #e42e3c"
        }).siblings().css({
            border: "0"
        })
    })
    var token = JSON.stringify(sessionStorage.getItem(token));
    console.log(token);
    if (token)

        $("")



})  