$.get("http://jx.xuzhixiang.top/ap/api/detail.php" + window.location.search, {
    uid: 202091
}, data => {
    console.log(data);
    let str = "";
    str += `
                <div id="midArea">
                    <img src="${data.data.pimg}">
                    <div id="zoom"></div>
                </div>
                <div id="bigArea">
                    <img src="${data.data.pimg}">
                </div>
                <div id="smallArea">
                    <img src=""><img src="">
                </div> 
                `;
    var zoomBox = document.querySelector("#zoomBox");
    console.log(zoomBox);
    zoomBox.innerHTML = str
})


function Zoom() {
    this.zoomBox = document.getElementById("zoomBox");
    this.midArea = document.getElementById("midArea");
    this.midImg = this.midArea.children[0];
    this.zoom = document.getElementById("zoom");
    this.bigArea = $("bigArea");
    this.bigImg = this.bigArea.children[0];
}
Zoom.prototype.start = function () {
    this.midArea.onmouseover = () => {
        this.zoom.style.display = "block";
        this.bigArea.style.display = "block";
    }
    this.midArea.onmouseout = () => {
        this.zoom.style.display = "none";
        this.bigArea.style.display = "none";
    }
    this.midArea.onmousemove = (e) => {
        let evt = e || event;
        /* let x = evt.offsetX;
        let y = evt.offsetY; */
        let x = evt.pageX - this.zoomBox.offsetLeft;
        let y = evt.pageY - this.zoomBox.offsetTop;

        let l = x - this.zoom.offsetWidth / 2;
        let t = y - this.zoom.offsetHeight / 2;

        let mw = this.zoomBox.offsetWidth - this.zoom.offsetWidth;
        let mh = this.zoomBox.offsetHeight - this.zoom.offsetHeight;

        l = l <= 0 ? 0 : l >= mw ? mw : l;
        t = t <= 0 ? 0 : t >= mh ? mh : t;


        this.zoom.style.left = l + "px";
        this.zoom.style.top = t + "px";


        this.bigImg.style.left = - this.zoom.offsetLeft * this.bigImg.offsetWidth / this.midImg.offsetWidth + "px";
        this.bigImg.style.top = - this.zoom.offsetTop * this.bigImg.offsetHeight / this.midImg.offsetHeight + "px";


    }
}
