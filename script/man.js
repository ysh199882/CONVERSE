// var storage = window.localStorage;
//     var mobile = storage['mobile'];
//     if(mobile != undefined){
//         $('.tologin').css('display','none')
//         // $('.loging').css('display','block')
//         $('.loging').prepend(`<span class="welcome">欢迎你，${storage['mobile']}</span>`)
//     }else{
//         $('.log-sign-button').css('display','block')
//         $('register-box').css('display','none')
//     }
$(function(){
    $.ajax({
        url:'../data/CONVAS.json',
        type:'get',
        dataType:'json',
        caches:false,
        success:function(json){
            var domStr = ""
            $.each(json,function(index,item){
                domStr +=`<dl >
                <dt>
                    <img src="${item.imgsrc}" alt="">
                </dt>
                <dd class="p-l-name">${item.text}</dd>
                <dd class="p-l-price">${item.price}</dd>
            </dl>`
            })
            $('.product-content-right').append(domStr)
        }
    })
})