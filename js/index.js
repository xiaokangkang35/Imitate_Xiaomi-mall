
window.onload=function(){

    // 手机判断
    if((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
        window.location.href = "./index-m.html";     //手机
    }


    var btn = document.getElementById('shopping_cart_before');
    var box = document.getElementById('shopping_cart_after');
    var box_text = document.getElementById('shopping_cart_after_text')
    box.onmouseover = btn.onmouseover = function(){
        box.style.height='100px';
        btn.classList.add('cart-mini_hover');
        box_text.style.display='block';
    }
    box.onmouseout = btn.onmouseout = function(){
        box.style.height='0px';
        btn.classList.remove('cart-mini_hover');
        box_text.style.display='none';
    }

    function navigation(nav,nav_menu){
        var a1 = document.getElementById(nav);
        var a2 = document.getElementById(nav_menu);
        a1.onmouseover = a2.onmouseover = function(){
            a2.style.height='229px';
        }
        a1.onmouseout = a2.onmouseout = function(){
            a2.style.height='0px';
        }
    }

    navigation("nav-item-1","header-nav-menu_1");
    navigation("nav-item-2","header-nav-menu_2");

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

    function right_button(a,b,c){
            var r_f = document.getElementById(a);
            var r_img_f = document.getElementById(b);
            var r_span = document.getElementById(c);
        r_f.onmouseover=function(){
            r_img_f.style.opacity='1';
            r_span.style.color='#ff6700';
        }
            r_f.onmouseout=function(){
            r_img_f.style.opacity='0';
            r_span.style.color='#757575';
        }
    }
    right_button('r_first','r-img-first','r-first-span');
    right_button('r-2','r-i-2','r-s-2');
    right_button('r-3','r-i-3','r-s-3');
    right_button('r-4','r-i-4','r-s-4');
    right_button('r-5','r-i-5','r-s-5');
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



