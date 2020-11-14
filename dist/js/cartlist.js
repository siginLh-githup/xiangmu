$.get(
    "http://jx.xuzhixiang.top/ap/api/cart-list.php?id=" +
    JSON.parse(sessionStorage.getItem("token")).uid
).then(result => {
    console.log(result);
    var carList = result.data;
    // console.log(cartList);
    // $("#carNum").text("商品总数 " + carList.length);
    var str = "";
    for (var i = 0; i < carList.length; i++) {
        str += `
      <tr>
      <th style="width: 5%"><input type="checkbox" class="${carList[i].pnum *
            carList[i].pprice}" name="0" id="chek"></th>
      <th style="width: 25%">${carList[i].pname}</th>
      <th style="width: 25%"><img style="width: 100px;height: 100px" src=${carList[i].pimg
            } alt=""></th>
      <th style="width: 10%">${carList[i].pprice}元</th>
      <th style="width: 10%">${carList[i].pnum}</th>
      <th style="width: 10%">${carList[i].pnum * carList[i].pprice}.00元</th>
      <th style="width: 20%">
          <button class=${carList[i].pid} id="del">删除<button>
      </th>
      </tr>`;
    }
    console.log();
    $("#otr").html(str);
});
var arr = [];
$(function () {
    $("#otr").click(function (e) {
        if (e.target.id == "del") {
            if (confirm("确认要删除这个宝贝吗?")) {
                $.ajax({
                    url: "http://jx.xuzhixiang.top/ap/api/cart-delete.php",
                    method: "get",
                    data: {
                        uid: JSON.parse(sessionStorage.getItem("token")).uid,
                        pid: e.target.className
                    }
                }).then(result => {
                    if (result.msg) {
                        alert("删除成功");
                        // window.location.href = "";
                    } else {
                        alert("删除失败");
                    }
                });
            }
        }

        if (e.target.id == "chek" && e.target.input == "checked") {
            //console.log(e.target.className);
            arr.push(e.target.className * 1);
            e.target.name = e.target.className;
        } else if (e.target.id == "chek" && !e.target.checked) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] == e.target.className * 1) {
                    arr.splice(i, 1);
                }
            }
        }
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        console.log(sum)
        $("#sum").text("合计" + sum + "元")
    });
})
$(function () {
    $("#sy").click(function () {
        window.location.href = "http://localhost:8080/index.html?username=" + token.username + "&id=" + token.uid;
    })
})