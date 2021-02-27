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
                domStr +=`<dl>
                <dt>
                    <img src="${item.imgsrc}" alt="">
                </dt>
                <dd class="p-l-name">${item.text}</dd>
                <dd class="p-l-price">${item.price}</dd>
                <div data-id="${item.id}">加入购物车</div> 
            </dl>`
            })
            $('.product-content-right').append(domStr)
        }
    })

    $('#body').on('click','dl div',function (){
        // 存储商品id和数量
        // "goods"=>"[{'id':'abc4','num':2},{'id':'abc2','num':1}]"
        var id = $(this).attr('data-id')//当前点击商品的id
        var goodsArr = []//购物车数据的数组
        if (localStorage.getItem('CONVAS')) {
          goodsArr = JSON.parse( localStorage.getItem('CONVAS') )
        }
        // 标记购物车是否已有该商品
        var flag = false
        // 判断购物车是否已有该商品
        $.each(goodsArr,function (index,item){
          if (item.id === id) {//购物车已该商品
            item.num++//商品数量+1
            flag = true
          }
        })
        if (!flag) {
          // push一个商品对象到goodsArr
          goodsArr.push({"id":id,"num":1})
        }
        // 数据更新到本地存储
        localStorage.setItem('CONVAS', JSON.stringify(goodsArr) )
        alert('加入购物车成功！')
      })



})


