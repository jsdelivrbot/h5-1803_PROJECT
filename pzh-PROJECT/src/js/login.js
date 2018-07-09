require.config({
    paths: {
        'jquery': './jquery',
        'http': './httpclient'
    }
})
require(['jquery', 'http'], function($, http){
    $(function(){
        $('#output')[0].innerHTML = randomNumber(1000,9999);
        $('#login').click(function(){
            $.post('login.php',{
                username: $('#username').val().trim(),
                password: $('#password').val().trim()
            }
            , function(response){
                if($('#username')[0].value == ''){
                    alert('请输入用户名');
                    return false;
                }
                if($('#password')[0].value == ''){
                    alert('请输入密码');
                    return false;
                }
                if($('#yzm')[0].value != $('#output')[0].innerHTML){
                    alert('验证码错误');
                    $('#output')[0].innerHTML = randomNumber(1000,9999);

                    return false;
                }
                var obj = eval('(' + response + ')');
                if(obj.status){
                    alert('登录成功');
                    setTimeout(function(){
                        window.location.href = '../index.html';
                    },60)
                
                }else{
                    alert(obj.message);
                }
            })        
        })
    })
})