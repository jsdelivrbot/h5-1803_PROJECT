require.config({
    paths: {
        'jquery': './jquery',
        'http': './httpclient'
    }
})
require(['jquery', 'http'], function($, http){


    let goodslist = JSON.parse(Cookie.get('goodslist'));
    $.ajax({
        url: 'car.php',
        success: function(res){
            let data = window.eval('(' + res + ')');
            if(data.status){
                genGoods(data.data);
            }
        }
    })

    function genGoods(data){
        let col = ['img', 'title', 'weights', 'price', 'yh', 'qty', 'total', 'action'];
        let ul = $('<ul></ul>');
        let arr = [];
        goodslist.map(function(tar){
            data.map(function(ori){
                if(tar.tarId == ori.id){
                    let obj = Object.assign({}, tar, ori);
                    arr.push(obj);
                }
            })
        })

        let total = 0;
        let allQty = 0;
        let allWei = 0;

        for(let i in arr){

            let li = $('<li></li>');
            
            total += arr[i].price.slice(1) * arr[i].qty;
            allQty += arr[i].qty;
            allWei += arr[i].weights.slice(0, -2) * 1;
            $('.total').text(total.toFixed(2));
            $('.total2').text(total.toFixed(2));
            $('.all_qty').text(allQty);
            $('.all_weight').text(allWei.toFixed(2));
            for(let j in col){                
            
                let div = $('<div class="d' + j + '"></div>').text(arr[i][col[j]]);
                if(col[j] == 'img'){
                    div = $('<div class="d' + j + '"></div>');
                    let ipt = $('<input data-ipt="' + arr[i].id + '" class="ipts" type="checkbox" checked/>').appendTo(div);
                    let img = $('<img src="' + arr[i][col[j]] + '" />').appendTo(div);
                }
                if(col[j] == 'total'){
                    div.text((arr[i].price.slice(1) * arr[i].qty).toFixed(2));
                }
                if(col[j] == 'price'){
                    div.text(arr[i][col[j]].slice(1));
                }
                if(col[j] == 'qty'){
                    div = $('<div class="d' + j + '"></div>');
                    let span = $('<span class="reduce"></span>').text('-').appendTo(div);
                    let ipt = $('<input type="text" class="pro_qty"/>').val(arr[i][col[j]]).appendTo(div);
                    span = $('<span class="add"></span>').text('+').appendTo(div)
                }
                if(col[j] == 'action'){
                    let a = $('<a ></a>').text('移入收藏').appendTo(div);
                    a = $('<a data-guid="' + arr[i].id + '" class="del_btn"></a>').text('删除');
                    a.appendTo(div);
                }
                div.appendTo(li);
            }
            li.appendTo(ul)
        }
        ul.appendTo($('.car_list'))
    }

    
    
    $('#content').click(function(e){
        e = e || window.event;
        target = e.target || window.srcElement;

        if(target.className == 'reduce'){
            target.nextSibling.value --;
            if(target.nextSibling.value < 1){
                target.nextSibling.value =1;
            }
        }
        if(target.className == 'add'){
            target.previousSibling.value ++;
        }

        if(target.className == 'del_btn'){
            let tarLi = target.parentNode.parentNode;
            let guid = target.getAttribute('data-guid');
            tarLi.parentNode.removeChild(tarLi);
            for(let i in goodslist){
                if(goodslist[i].tarId == guid){
                    goodslist.splice(i,1);
                    Cookie.set('goodslist', JSON.stringify(goodslist));
                    cal();
                }
            }
        }   
        if(target.className == 'clear_car'){
            console.log(target)
            Cookie.remove('goodslist');
            $('.car_list').html('');
            $('.total').text(0.00);
            $('.total2').text(0.00);
            $('.all_qty').text(0.00);
            $('.all_weight').text(0.00);
        }

        if(target.className == 'del_checked'){
            console.log(target,$('.ipts').length)
            let ipts = $('.ipts');
            for(let i = 0; i < ipts.length; i ++){
                if(ipts[i].checked){
                    let tarLi = ipts[i].parentNode.parentNode;
                    let ipt = ipts[i].getAttribute('data-ipt');
                    tarLi.parentNode.removeChild(tarLi);
                    for(let i in goodslist){
                        if(goodslist[i].tarId == ipt){
                            goodslist.splice(i,1);
                            Cookie.set('goodslist', JSON.stringify(goodslist));
                            cal();
                        }
                    }
                }
            }
        }

        if(target.className == 'ipts'){
            let tarNum = parseInt(target.parentNode.parentNode.querySelector('.pro_qty').value);
            console.log(tarNum)
            let tarId = target.getAttribute('data-ipt');
            if(target.checked == false){
                for(let i in goodslist){
                    if(goodslist[i].tarId == tarId){
                        goodslist.splice(i,1);
                        Cookie.set('goodslist', JSON.stringify(goodslist));
                        cal();
                    }
                }
            }else{
                let goods = {
                    tarId:tarId,
                    qty:tarNum
                }
                goodslist.push(goods);
            
                Cookie.set('goodslist', JSON.stringify(goodslist));
                cal();
            }
        }
            

    })
    
    function cal(){
        $.ajax({
            url: 'car.php',
            success: function(res){
                let data = window.eval('(' + res + ')');;
                if(goodslist.length == 0){
                    $('.total').text(0.00);
                    $('.total2').text(0.00);
                    $('.all_qty').text(0.00);
                    $('.all_weight').text(0.00);
                }
                let arr = [];
                goodslist.map(function(tar){
                    data.data.map(function(ori){
                        if(tar.tarId == ori.id){
                            let obj = Object.assign({}, tar, ori);
                            arr.push(obj);
                        }
                    })
                })
                let total = 0;
                let allQty = 0;
                let allWei = 0;
                for(let i in arr){
                    let li = $('<li></li>');                               
                    total += arr[i].price.slice(1) * arr[i].qty;
                    allQty += arr[i].qty;
                    allWei += arr[i].weights.slice(0, -2) * 1;
                    $('.total').text(total.toFixed(2));
                    $('.total2').text(total.toFixed(2));
                    $('.all_qty').text(allQty);
                    $('.all_weight').text(allWei.toFixed(2));
                }
            }
        })
    }

})

