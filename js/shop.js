window.onload=function(){

    function shop(a,b){
        var before = document.getElementById(a);
        var after = document.getElementById(b);
        before.onmouseover=after.onmouseover=function(){
            after.style.opacity='1';
            after.style.transform='translate3d(0,0,0)';
        }
        before.onmouseout=after.onmouseout=function(){
            after.style.opacity='0';
            after.style.transform='translate3d(0,200%,0)';
        }
    }
    shop('re-item-1','re-ac-1');
    shop('re-item-2','re-ac-2');
    shop('re-item-6','re-ac-6');

}