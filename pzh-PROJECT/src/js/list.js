require.config({
    paths: {
        'jquery': './jquery',
        'http': './httpclient'
    }
})
require(['jquery', 'http'], function($, http){

    $.ajax({
        url: 'list.php',
        data: {limit: 0},
        success: function(res){
            var data = window.eval('(' + res + ')');
                // console.log(data);
            if(data.status){
                // console.log(data.data)
                genUl(data.data);
            }
        }
    })
    //生成商品列表
    function genUl(data){
        let ul = $('<ul class="list_ul"></ul>');
        let arr = [];
        let col = ['img', 'price', 'weight', 'title', 'buy', 'talk'];
        data.map(function(item){

            arr.push(item);
            let li = $('<li></li>');
            for(let i = 0; i < col.length; i++){
                if(col[i] == 'img'){
                    let a = $('<a href="#' + item.id + '" id="' + item.id + '"></a>');
                    let img = $('<img src="' + item[col[i]] + '">').appendTo(a);
                    a.appendTo(li);
                }else{
                    let p = $('<p></p>').text(item[col[i]]).appendTo(li);
                    if(col[i] == 'talk'){
                        p.html('已有<span>' + item[col[i]] + '</span>人评论').appendTo(li);
                    }
                }

            }
            if(item.hot == '1'){
                let hot = ['img', 'price', 'buy', 'title'];
                let li = $('<li></li>');
                for(let i = 0; i < hot.length; i ++){
                    let p = $('<p></p>').text(item[hot[i]]).appendTo(li);
                    if(hot[i] == 'img'){
                        p.text('');
                        let img = $('<img data-imgid="' + item.id + '" src="' + item[hot[i]] + '"/>').appendTo(p);
                    }
                }
                li.appendTo($('.hot_pro'));
            }
            let div = $('<div class="addCar"  data-guid="' + item.id + '"><span></span>加入购物车</div>').appendTo(li);
            let div2 = $('<div class="collect"><span></span>收藏</div>').appendTo(li);
                // console.log(div[0][length]);    
            li.appendTo(ul);
        })       
        for(let i = 0; i < 4; i ++){
            let span = $('<span class="i"></span>').text(i + 1).appendTo(ul);
            span.click(function(){
                let i = span.text() - 1;
                console.log(i)
                $.ajax({
                    url: 'list.php',
                    data: {limit: i},
                    success: function(res){
                        var data = window.eval('(' + res + ')');
                            // console.log(data);
                        if(data.status){
                            // console.log(data.data)
                            $('.list_ul').html('');
                            $('.hot_pro').html('');
                            genUl(data.data);
                        }
                    }
                })
            })
        }   
        ul.appendTo($('.lists'));
    }


    let goodslist = [];
    let cookies = document.cookie.split('; ');
    cookies.forEach(function(item){
        item = item.split('=');
        if(item[0] === 'goodslist'){
            goodslist = JSON.parse(item[1]);
        }
    });

    $('.lists').click(function(e){
        e = e || window.event;
        target = e.target || window.srcElement;
        if(target.parentNode.tagName == 'A'){
            console.log(target.parentNode.id);
            location.href = 'goods.html?' + target.parentNode.id;
        }
        if(target.className == "addCar"){
            let tarId = target.getAttribute('data-guid');
            let idx;
            let has = goodslist.some(function(item,i){
                idx = i;
                return item.tarId === tarId;
            });
            if(has){
                goodslist[idx].qty ++;
            }else{
                let goods = {
                    tarId:tarId,
                    qty:1
                }
                goodslist.push(goods);
            }
            Cookie.set('goodslist', JSON.stringify(goodslist));
            
            carNum();
            // alert('商品已成功添加到购物车');
        }
    })
    function carNum(){
        Cookie.get('goodslist');
        let carnum = 0;
        goodslist.map(function(item){
            carnum += item.qty;
            $('.carNum').text(carnum);
        })
    }
    carNum();
    $('.hot_pro').click(function(e){
        e = e || window.event;
        target = e.target || window.srcElement;
        if(target.tagName == 'IMG'){
            let imgId = target.getAttribute('data-imgid')
            location.href = 'goods.html?' + imgId;
        } 
    })

    $('.turn_car').click(function(){
        location.href = './car.html';
    })
})