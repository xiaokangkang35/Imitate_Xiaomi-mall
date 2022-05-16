window.onload=function(){
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


    var link_1 = document.getElementById('link-cate');
    var link_2 = document.getElementById('site-cate');
    var link_3 = document.getElementById('site-c')
    link_1.onmouseover=link_2.onmouseover=function(){
        link_2.style.display='block';
        link_3.style.zIndex='3';
    }
    link_1.onmouseout = link_2.onmouseout=function(){
        link_2.style.display='none';
        link_3.style.zIndex='1';
    }
}