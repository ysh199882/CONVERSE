//登录按钮下拉框
$('.login').click(function(){
    $('.header-expanded').slideDown('slow');
    $(".expanded-box").fadeIn(1)
    $('.register-box').fadeOut(1)
    $('#body').click(function(){
        $('.header-expanded').slideUp('slow');
    })
});
//注册按钮下拉框
$('.register').click(function(){
    $('.header-expanded').slideDown('slow');
    $(".expanded-box").fadeOut(1)
    $('.register-box').fadeIn(1)
    $('register-box').css('display','block')
})
//注册账户按钮跳转
$('.create-button').click(function(){
    $(".expanded-box").fadeOut(1)
    $('.register-box').fadeIn(1)
    $('register-box').css('display','block')
})

//注册功能实现










//账户下拉框
$('.welcome').hover(function(){
    // $('.logingmenu').slideDown('slow')
    $('.logingmenu').css('display','block')
},$('.logingmenu').mouseleave(function(){
    $('.logingmenu').slideUp('slow')
}))

//退出账户
$('.exit').click(function(){
    alert('您已成功退出！')
    window.location.reload();

})



//验证码
  // 随机去四个值
  var items=[1,2,3,4,5,6,7,8,9,0,'p','q','r','a','i','x','w','m','h','c']
  function getRandomArrayElements(arr, count) {
      var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
      while (i-- > min) {
          index = Math.floor((i + 1) * Math.random());
          temp = shuffled[index];
          shuffled[index] = shuffled[i];
          shuffled[i] = temp;
      }
      return shuffled.slice(min);
  }
  // 随机颜色
  function randomHexColor() { //随机生成十六进制颜色
      return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).substr(-6);
  }
  // 随机倾斜
  function random(min, max){
      return min + Math.floor(Math.random() * (max - min + 1));
  }
  // 随机字体大小
  function randomSize(min, max) {
      return min + Math.floor(Math.random() * (max - min + 1));
  }
  // 集成
  function VerificationCode(Div,num){
      Div.empty();
      var str='';
      $.each(getRandomArrayElements(items, num),function (i,item){
          str+=item
          Div.append("<p style='color: " + randomHexColor() + ";transform:rotate(" + random(-85,85) + "deg);font-size: " + randomSize(16,24) + "px'>" + item + "</p>")
      })
      Div.attr('value',str)

      Div.click(function (){
          VerificationCode(Div,4);
      })
  }

  // 初始加载
  var Codeyan;
  
  VerificationCode($(".box"),4);
  $("#registration-btn").click(function (){
      if($("#loginCode").val() == ''){
       Codeyan == null
      }else if($("#loginCode").val()==$(".box").attr('value')){
        Codeyan = true;
      }else{
          Codeyan = false
      }
      VerificationCode($(".box"),4);
  })

  $('.xieyi1 [type=checkbox]').change(function () {
      if ($(this).prop("checked")) {
        $('.header-login').css('background-color','#000')
      } else {
        $('.header-login').css('background-color','#ccc')
      }
  })
//   

//登录条件判定
  $('.header-login').click(function(){
    var account = $('#username').val()
    var password = $('#pass').val()

    if (localStorage[account]) {

    }
    if(account === '15137842127' && password === '199882OK'){
        
        setCookie({
            key: 'login',
            val:'loginSucess',
            days:15
        })
        
        //判断是否记住登录名
        if($('#keeplogin').prop('checked') != undefined){
            setCookie({
                key:'user',
                val:account,
                days:15
            })
        }else{
            removeCookie('user')
        }

        //判断协议是否勾选
        if(!$('.login-waring').prop('checked')){
            alert('请勾选协议！')
            return false
        }

        //判断验证码
        if(Codeyan == null){
            alert('请输入验证码')
            return false
        }else if(Codeyan == false){
            console.log(Codeyan);
            alert('验证码错误！')
            return false
        }

        alert('登录成功')

        //登录成功页面展示
        $('.header-expanded').slideUp('slow');
        $('.tologin').css('display','none')
        $('.loging').css('display','block')

        $('.loging').hover(function(){
            $('.loginmenu').slideDown('slow')
        })


    }else{
        alert('账户密码错误！')
        return false
    }
   
})

// setCookie({
//     key: 'login',
//     val:'loginSucess',
//     days:15
// })

// //判断是否记住登录名
// if($('#keeplogin').prop('checked') != undefined){
//     setCookie({
//         key:'user',
//         val:account,
//         days:15
//     })
// }else{
//     removeCookie('user')
// }

$(function(){

     //设置错误信息
     function setError(id){
        $(id).css('border-color','red');
        $(id).next().css('display','block');
        // console.log($(id).next()[0]);
        $(id).next().css('color','red');
    }

    //清除错误信息
    function clearError(id,clas){
        $(id).css('border-color','#999')
        $(id).next().css('display','none')
    }




    //对手机号进行验证
    $('#mobile').blur(function(){
        checkMobile('#mobile')
    }).focus(function(){
        // $('#mobile').css('border-color','#999')
        // $('.error').css('display','none')
        clearError('#mobile','.error')
    })

    function checkMobile(id){
        var reg = /^[1][0-9]{10}$/;
        var $mobile = $(id).val();
        if(!reg.test($mobile)){
            // $('#mobile').css('border-color','red')
            // $('.error').css('display','block')
            // $('.error').css('color','red')
            setError('#mobile')
            return false
        }

        
        function setCookie() {
            
        }
    }

    localStorage['Bender'] = JSON.stringify({
        username: 'Bender',
        password: '123456'
    })

    console.log(localStorage['Bender'])

   
    //对邮箱进行验证
    $('#email').blur(function(){
        checkEmail('#email')
    }).focus(function(){
        clearError('#email','.error')
    })

    function checkEmail(id){
        var reg = /^[\w!#$%&'*+/=?^_`{|}~-]+(?:\.[\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?$/;
        var $email = $(id).val()

        if(!reg.test($email)){
            setError('#email','.error')
            return false
        }

    }

    



})











