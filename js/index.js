
window.onload=function(){

    // 手机判断
    if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        window.location.href = "./index-m.html";     //手机
    }


    var btn = document.getElementById('shopping_cart_before');
    var box = document.getElementById('shopping_cart_after');
    box.onmouseover = btn.onmouseover = function(){
        box.style.display= 'block';
    }
    box.onmouseout = btn.onmouseout = function(){
        box.style.display='none';
    }

    var a1 = document.getElementById("nav-item-1");
    var a2 = document.getElementById("header-nav-menu_1");
    a1.onmouseover = a2.onmouseover = function(){
        a2.style.display='block';
    }
    a1.onmouseout = a2.onmouseout = function(){
        a2.style.display='none';
    }

    var aa = document.getElementById("nav-item-2");
    var ab = document.getElementById("header-nav-menu_2");
    aa.onmouseover = ab.onmouseover = function(){
        ab.style.display='block';
    }
    aa.onmouseout = ab.onmouseout = function(){
        ab.style.display='none';
    }


    var b1 = document.getElementById("col-1");
    var b2 = document.getElementById("list-col-1");
    b1.onmouseover = b2.onmouseover = function(){
        b2.style.display='block';
    }
    b1.onmouseout = b2.onmouseout = function(){
        b2.style.display='none';
    }

    var about_left=document.getElementById("one");
    var about_right= document.getElementById("two");
    var about=document.getElementById("two_2");
    var abuot=document.getElementById("two_3");

    about_right.onmouseover=function(){
        about.style.display='block';
        abuot.style.display='none';
        about_right.className='tab-list-after';
        about_left.classList.remove("tab-list-after");
    }
    about_left.onmouseover=function(){
        about.style.display="none";
        abuot.style.display="block";
        about_left.className="tab-list-after";
        about_right.classList.remove("tab-list-after");
    }
  
}

function adclick(){
    var adver_1 = document.getElementById('advertisement');
    adver_1.style.display='none';
}


// 用户点击刷新后返回页面顶部
window.onbeforeunload = function(){
    document.documentElement.scrollTop = 0;  //ie下
    document.body.scrollTop = 0;  //非ie
}


