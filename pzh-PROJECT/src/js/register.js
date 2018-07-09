require.config({
    paths: {
        'jquery': './jquery',
        'http': './httpclient'
    }
})
require(['jquery', 'http'], function($, http){
    // console.log(444)
    
    let index = 0;
    let tag = $('.tag')
    tag[0].children[0].classList.add('active');
    tag.click(function(e){
        e = e || window.event;
        let target = e.target || e.srcElement;
        if(target.tagName === 'LI'){
            if(target.className === 'reg_mail'){
                console.log($('#email'))
                $('#email')[0].style.display = 'block';
            }else{
                $('#email')[0].style.display = 'none';
            }
            for(let i = 0; i < tag[0].children.length; i++){
                tag[0].children[i].classList.remove('active');
                target.classList.add('active');
            }
           
        }
    })
    // console.log( $('#outpet'))
    $('#output')[0].innerHTML = randomNumber(1000,9999);
    $('.change').click(function(){$('#output')[0].innerHTML = randomNumber(1000,9999);})
    let reg = $('#register');
    reg.click(function(){
        if(!/\b1[3-8]\d{9}\b/g.test($('#mobile')[0].value)){
            $('.e_mobile')[0].style.display = 'block';
            return false;
        }else{
            $('.err')[0].style.display = 'none';
        }
        if($('#email')[0].style.display === 'block'){
            if(!/^[\w\-]{3,}@[a-z0-9\-]{2,63}(\.[a-z]{2,6})+$/i.test($('#mail')[0].value)){
                $('.e_mail')[0].style.display = 'block';
                return false;
            } 
        }else{
            $('.e_mail')[0].style.display = 'none';
        }  
        
        if(!/^[^\s]{6,20}$/i.test($('#password')[0].value)){
            $('.e_pwd')[0].style.display = 'block';
            return false;
        }else{
            $('.e_pwd')[0].style.display = 'none';
        }
        if($('#password2')[0].value != $('#password')[0].value){
            $('.e_pwd2')[0].style.display = 'block';
            return false;
        }else{
            $('.e_pwd2')[0].style.display = 'none';
        }
        if(!/[\d\D]/.test($('#nickname')[0].value)){
            $('.e_nick')[0].style.display = 'block';
            return false;
        }else{
            $('.e_nick')[0].style.display = 'none';
        }
        if($('#yzm')[0].value != $('#output')[0].innerHTML){
            // $('.e_pwd2')[0].style.display = 'block';
            $('.e_yzm')[0].style.display = 'block';
            $('#output')[0].innerHTML = randomNumber(1000,9999);
            return false;
        }else{
            $('.e_yzm')[0].style.display = 'none';
        }
        
        
        $.post('register.php',{
            email: $('#mail').val(),
            password: $('#password').val(),
            phone: $('#mobile').val()
        }, function(response){
            var obj = eval('(' + response + ')');
            if(obj.state){
                alert('注册成功！');
            } else {
                alert(obj.message);
            }
        })
            


    })

})