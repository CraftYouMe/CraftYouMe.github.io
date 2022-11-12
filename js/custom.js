window.onscroll = percent;// 执行函数
// 页面百分比
function percent() {
    let a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
        b = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - document.documentElement.clientHeight, // 整个网页高度
        result = Math.round(a / b * 100), // 计算百分比
        up = document.querySelector("#go-up") // 获取按钮

    if (result <= 95) {
        up.childNodes[0].style.display = 'none'
        up.childNodes[1].style.display = 'block'
        up.childNodes[1].innerHTML = result;
    } else {
        up.childNodes[1].style.display = 'none'
        up.childNodes[0].style.display = 'block'
    }
}

// 分享本页
function share() {
    let url = window.location.origin + window.location.pathname
    new ClipboardJS(".share", { text: function() { return '标题：' + document.title + '\n链接：' + url } });
    btf.snackbarShow("本页链接已复制到剪切板，快去分享吧~")
}

//js有一个小问题：就是只要鼠标滚动不论哪里都会响应，即便你滚动的是子元素

//2022.9.11 已修复，需要jq，请自行引入
document.getElementById("name-container").setAttribute("style", "display:none");

var position = $(window).scrollTop();

$(window).scroll(function () {

  var scroll = $(window).scrollTop();

  if (scroll > position) {


    document.getElementById("name-container").setAttribute("style", "");
    document.getElementsByClassName("menus_items")[1].setAttribute("style", "display:none!important");

  } else {


    document.getElementsByClassName("menus_items")[1].setAttribute("style", "");
    document.getElementById("name-container").setAttribute("style", "display:none");

  }

  position = scroll;

});
function scrollToTop(){
    document.getElementsByClassName("menus_items")[1].setAttribute("style","");
    document.getElementById("name-container").setAttribute("style","display:none");
    btf.scrollToDest(0, 500);
}
//修复没有弄右键菜单的童鞋无法回顶部的问题
document.getElementById("page-name").innerText = document.title.split(" | Ariasakaの小窝")[0];
/*这里是去掉你的网站全局名称的设置，如果你不需要去掉，你可以写成：
document.getElementById("page-name").innerText=document.title

或者把你的网站的分隔符和全局网站名称加上去*/


