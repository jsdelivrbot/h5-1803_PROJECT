require.config({
    paths: {
        'jquery': './jquery',
        'http': './httpclient'
    }
})
require(['jquery', 'http'], function($, http){
    $.ajax({
        url: 'html/index.php',
        success: function(res){
            var data = window.eval('(' + res + ')');
            genUl(data.data);
            if(data.status){
                $('img').ready(function(){
                    run();
                })
            }
        }
    })
    function run(){
        let all = $('.top_aside');
        for(let k = 0; k < all.length; k++){
            let focus = $('.aside')[k];
            let ul = focus.children[0];
            ul.append(ul.children[0].cloneNode(true));
            let len = ul.children.length;
            let index = 0;
            let page = document.createElement('div');
            page.className = 'page';
            for(let i=1;i<len;i++){
                let span = document.createElement('span');
                span.innerText = i;
                if(i === 1){
                    span.classList.add('active');
                }
                page.appendChild(span);
            }
            focus.appendChild(page);
            let imgWidth = ul.querySelector('img').offsetWidth;
            ul.style.width = imgWidth*len + 'px';
            let timers = setInterval(autoPlay,3000);
            focus.onmouseenter = ()=>{
                clearInterval(timers);
            }
            focus.onmouseleave = ()=>{
                timers = setInterval(autoPlay,3000);
            }
            focus.onmouseover = e=>{
                if(e.target.parentNode.className === 'page'){
                    index = e.target.innerText-1;
                    show();
                }
            }
            function autoPlay(){
                index++;

                show();
            }
            function show(){
                if(index >= len){
                    ul.style.left = 0;
                    index = 1;
                }
                animate(ul,{left:-imgWidth*index});
                for(let i=0;i<len-1;i++){
                    page.children[i].className = '';
                }
                if(index === len - 1){
                    page.children[0].className = 'active';
                }else{
                    page.children[index].className = 'active'
                }
            }
        }
    }
    function genUl(data){
        let arr = [];
        let col = ['img', 'h4', 'p'];
        data.map(function(item){
            arr.push(item);
            if(item.ban != "0"){
                let li_ban = $('<li></li>');
                let img = $('<img src="' + item.ban + '">').appendTo(li_ban);
                if(item.part == 'dog'){
                    li_ban.appendTo($('.imgBox_dog'));
                }
                if(item.part == 'cat'){
                    li_ban.appendTo($('.imgBox_cat'));
                }
                if(item.part == 'water'){
                    li_ban.appendTo($('.imgBox_water'));
                }
                if(item.part == 'pet'){
                    li_ban.appendTo($('.imgBox_pet'));
                }
                if(item.part == 'insert'){
                    li_ban.appendTo($('.imgBox_insert'));
                }
            }
            let li = $('<li></li>');
            for(let i = 0; i < col.length; i++){
                // console.log(col[i])
                if(col[i] == 'img'){
                    let img = $('<img src="' + item[col[i]] + '">');
                    img.appendTo(li);
                }
                if(col[i] == 'h4'){
                    let h4 = $('<h4></h4>');
                    h4.text(item[col[i]]);
                    h4.appendTo(li);
                }
                if(col[i] == 'p'){
                    let p = $('<p></p>')
                    p.text(item[col[i]]);
                    p.appendTo(li);
                }
                if(item.part == 'dog'){
                    li.appendTo($('.up_cont_dog'));
                }
                if(item.part == 'cat'){
                    li.appendTo($('.up_cont_cat'));
                }
                if(item.part == 'water'){
                    li.appendTo($('.up_cont_water'));
                }
                if(item.part == 'pet'){
                    li.appendTo($('.up_cont_pet'));
                }
                if(item.part == 'insert'){
                    li.appendTo($('.up_cont_insert'));
                }
            }
            li.click(function(){
                window.location.href = './html/list.html';
            })
        })
    }
    let idx = 0;
    let banner = $('#banner');
    let bcont = $('.ban_cont')[0];
    let bitem = $('.ban_item')[0];
    bcont.children[idx].style.display = 'block';
    bitem.children[idx].className = 'active';
    
    let timer = setInterval(move, 3000);
    banner.mouseover(function(){
        clearInterval(timer);
    })
    banner.mouseover(function(e){
        e = e || window.event;
        target = e.target || window.srcElement;
        if(target.parentNode.classList.contains('ban_item')){
            idx = target.innerText - 1;
            lunbo();
        }
    })
    banner.mouseout(function(){
        timer = setInterval(move, 3000);
    })
    function move(){
        idx ++;
        if(idx >= bcont.children.length){
            idx = 0;
        }
        lunbo();
    }
    function lunbo(){
        for(let i = 0; i < bcont.children.length; i ++){
            bcont.children[i].style.display = 'none';
            bitem.children[i].className = '';
        }
        bcont.children[idx].style.display = 'block';
        bitem.children[idx].className = 'active';
    }
})