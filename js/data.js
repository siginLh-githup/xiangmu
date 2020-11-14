var data1 = [
    {
        pimg: "../images/1.jpg",
        pname: "宝路成犬中小型犬全价犬粮 牛肉味7.5kg 泰迪茶杯犬柯基 宠物狗粮",
        pprice: "45.00",
        uid: 20201111
    }
    , {
        pimg: "../images/1.jpg",
        pname: "麦富迪猫罐头麦富迪亲嘴鱼肉粒包85g*12整盒幼猫零食营养增肥湿粮",
        pprice: "32.00",
        uid: 20201111
    }
    , {
        pimg: "../images/2.jpg",
        pname: "西西猫膨润土猫砂10公斤除臭结团猫沙膨润土低尘猫砂20斤10kg猫咪用品",
        pprice: "84.00",
        uid: 20201111
    }
    , {
        pimg: "../images/13.jpg",
        pname: "麦富迪清齿倍健洁齿骨11g*50狗狗零食磨牙棒耐咬洁齿棒除口臭幼犬泰迪小型大型犬",
        pprice: "75.00",
        uid: 20201111
    }
    , {
        pimg: "../images/4.jpg",
        pname: "滋益巅峰 Ziwi Peak 鸡肉配方猫罐头85g",
        pprice: "145.00",
        uid: 20201111
    },
    {
        pimg: "../images/5.jpg",
        pname: "贝蒂 狗狗零食鸡胸肉340g净重 鸡小胸 肉干 泰迪 金毛 磨牙训练 奖励 宠物零食 貝蒂",
        pprice: "95.00",
        uid: 20201111
    }
    , {
        pimg: "../images/6.jpg",
        pname: "名兔宠物草紫花苜蓿草毛重1kg兔粮饲料兔子草粮兔子龙猫荷兰猪兔草干草牧草",
        pprice: "32.00",
        uid: 20201111
    }
    , {
        pimg: "../images/7.jpg",
        pname: "麦富迪 妙鲜包狗湿粮肉粒包拌饭营养湿粮宠物狗零食罐头大型犬小型犬通用挑食拌粮 随机口味1袋",
        pprice: "84.00",
        uid: 20201111
    }
    , {
        pimg: "../images/9.jpg",
        pname: "蓓尔萌 猫狗零食 猫咪幼猫冻干鸡胸肉多春鱼牛肝蛋冻干鸭肝狗零食520g零食大礼包 满足大桶",
        pprice: "75.00",
        uid: 20201111
    }
    , {
        pimg: "../images/10.jpg",
        pname: "麦富迪宠物零食狗狗肉粒包95g*12混合口味狗湿粮拌粮伴侣",
        pprice: "145.00",
        uid: 20201111
    }
];
for (let i = 0; i < data1.length; i++) {
    $.post("http://jx.xuzhixiang.top/ap/api/goods/goods-add.php", data1[i], data => {
        console.log(data);
    });
}
var uid = JSON.parse(localStorage.getItem("uid"));
if (uid == null) {
    $.get("http://jx.xuzhixiang.top/ap/api/productlist.php", {
        uid: 20201111
    }, data => {
        console.log(data)
        let str = "";
        for (var i = 0; i < data.data.length - 10; i++) {
            str += `
                    <li data-id="${data.pid}">
                    <a href="Detailspage.html?id=${data.data[i].pid}" >
                         <img src="${data.data[i].pimg}" alt="">
                    </a>
                    <p>
                        <a href="Detailspage.html?id=${data.data[i].pid}" >
                        ${data.data[i].pname}
                        </a>
                    </p>
                    <p>
                    <a href="Detailspage.html?id=${data.data[i].pid}" >
                        <span class="iconfont icon-gouwuche" id="abtn"></span>
                    </a>
                        <span>${data.data[i].pprice}</span>
                    </p>
                </li>`
        }
        $(".marlkRight").html(str);
        $(".shopList").html(str);
    })
}
