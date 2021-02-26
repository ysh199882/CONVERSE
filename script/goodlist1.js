
// $(() => {
//     var storage = window.localStorage;
//     var mobile = storage['mobile'];
//     if(mobile != undefined){
//         $('.tologin').css('display','none')
//         // $('.loging').css('display','block')
//         $('.loging').prepend(`<span class="welcome">欢迎你，${storage['mobile']}</span>`)
//     }else{
//         $('.log-sign-button').css('display','block')
//         $('register-box').css('display','none')
//     }
// })

$(function(){
    $.ajax({
        url:'../data/hostsell.json',
        type:'get',
        dataType:'json',
        caches:false,
        success:function(json){
            var domStr = ""
            $.each(json,function(index,item){
                domStr +=`
                <div class="brand-product">
                <dl>
                    <dt>
                        <a href=""><img src="${item.imgsrc}" alt=""></a>
                    </dt>
                    <dd class="p-l-name">${item.text}</dd>
                    <dd class="p-l-price">${item.prince}</dd>
                </dl>
            </div>
                `
            })
            $('.l-s-grid').append(domStr)
        }
    })
})