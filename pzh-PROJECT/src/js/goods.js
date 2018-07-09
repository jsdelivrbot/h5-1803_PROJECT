require.config({
    paths: {
        'jquery': './jquery',
        'http': './httpclient'
    }
})
require(['jquery', 'http'], function($, http){
    // let params = "?002"
    params = location.search;
    if(params == ''){
        params = '?001';
    }
    params = params.slice(1);
    params = params.split('&');

    $.ajax({
        url: 'goods.php',
        success: function(res){
            let data = window.eval('(' + res + ')');
                // console.log(data);
            if(data.status){
                // console.log(data.data)
                genGoods(data.data);
            }
            //生成商品详情
            function genGoods(data){
                data.map(function(item){
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
                    if(item.id == params){
                        // console.log(item.imgSta,item.imgEnd);
                        let sta = item.imgSta;
                        let end = item.imgEnd * 1 + 1;
                        let col = ['img', 'title', 'price', 'weight',  'pre'];
                        for(let i = 0; i < col.length; i++){
                            if(col[i] == 'img'){
                                let img = $('<img src="' + item[col[i]] + '" id="zoom">').appendTo($('.pro_img'));
                                $('#zoom').ezPlus();
                            }
                            else if(col[i] == 'title'){
                                let p = $('<p></p>').text(item[col[i]]).appendTo($('.pro_name'));
                            }
                            else{
                                let span = $('<span></span>').text(item[col[i]]).appendTo($('.bq_price'));
                                if(col[i] == 'pre'){
                                    span.appendTo($('.real_price'))
                                }
                            }
                        }
                        //生成小图
                        for(let i = sta; i < end; i++){
                            let img = $('<img src="../img/' + i +'.jpg">').appendTo($('.s_img'));
                        }
                    }
                })
            }

            let sImg = $('.s_img');
            //点击小图切换大图
            let imgs = sImg[0].children;
            imgs[0].classList.add('active');
            for(let i = 0; i < imgs.length; i ++){
                imgs[i].onmouseover = function(){
                    $('.pro_img')[0].children[0].src = imgs[i].src;
                    for(let j = 0; j < imgs.length; j++){
                        imgs[j].classList.remove('active');
                    }
                    imgs[i].classList.add('active');
                }
            }
        }
    })

    let buyNow = $('<a class="buyNow" href="./car.html">立即购买</a>').appendTo($('.pro_buy'));
    let addCar = $('<div class="addCar"></div>').appendTo($('.pro_buy'));
    let collection = $('<div class="collection"></div>').appendTo($('.pro_buy'));
    let buyNum = $('#buynum')[0];
    $('.reduce').click(function(){
        buyNum.value --;
        if(buyNum.value <= 1){
            buyNum.value = 1;
        }
    })
    $('.add').click(function(){
        buyNum.value ++;
    })

    let goodslist = [];
    let cookies = document.cookie.split('; ');
    cookies.forEach(function(item){
        item = item.split('=');
        if(item[0] === 'goodslist'){
            goodslist = JSON.parse(item[1]);
        }
    });
    addCar.click(function(){
        let tarId = params[0];
            let goods = {
                tarId:tarId,
                qty:parseInt(buyNum.value)
            }
            goodslist.push(goods);
        Cookie.set('goodslist', JSON.stringify(goodslist));
        carNum();
    })

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
    function carNum(){
        Cookie.get('goodslist');
        let carnum = 0;
        goodslist.map(function(item){
            carnum += item.qty;
            $('.carNum').text(carnum);
        })
    }
    carNum();
})

