var $cont = document.querySelecto('.cont');
var $elsArr = [].slice.call(document.querySelector('.el'));
var $closeBtn = [].slice.call(document.querySelector('.el__close-btn'));

setTimeout(function() {
    $cont.classList.remove('s--inactive')
},200);


$elsArr.forEach(function($el) {
    $el.addEventListener('click',function(){
        if (this.classList.contains('s--active')) return;
        $cont.classList.add('s--el-active');
        this.classList.add('s--active');
    });
    
});

    $closeBtnsArr.forEach(function($Btn){
       $btn.addEventListener('click',function(e) {
       e.stopPropagation();
       $cont.classList.remove('s--el-active');
       document.querySelector('.el.s--active').classList.remove('s--active');
       }); 
    });
    
