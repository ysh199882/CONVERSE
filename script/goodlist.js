// $(() => {
//     var storage = window.localStorage;
//     var mobile = storage['mobile'];
//     if(mobile != undefined){
//         $('.tologin').css('display','none')
//         $('.loging').css('display','block')
//         $('.loging').prepend(`<span class="welcome">欢迎你，${mobile}</span>`)
//     }else{
//         $('.log-sign-button').css('display','block')
//         $('register-box').css('display','none')
//     }
// })

$(function () {
    if (localStorage.getItem('CONVAS')) {
        // 获取购物车数据
        var goodsArr = JSON.parse(localStorage.getItem('CONVAS'))
        // 获取所有数据
        $.ajax({
            url: '../data/CONVAS.json',
            type: 'get',
            dataType: 'json',
            success: function (json) {
                var domStr = ''
                $.each(json, function (index, item) {
                    $.each(goodsArr, function (i, obj) {
                        if (item.id == obj.id) {
                            domStr += `
                            
                <div class="list-change">

                <input type="checkbox">
            </div>
            <div  class="goods-box">
                <div class="goods-img">
                <a href=""><img src="${item.imgsrc}" alt=""></a></div>
                <div class="goods-detial">
                    <h4>${item.text}</h4>
                    <p>型号：170584C001</p>
                    <p>颜色：黑/深灰黑色</p>
                    <p>尺码：40</p>
                </div>
                <div class="goods-price">
                <p>￥${item.price}</p></div>
            </div>
                `
                console.log(domStr);
                        }
                    })
                })
                $('.shopcart-list').html(domStr)
            }
        })

        // 删除商品
        $('.shopcart-list').on('click', 'li em', function () {
            // 当前点击的商品id
            var id = $(this).attr('data-id')
            $.each(goodsArr, function (index, item) {
                if (item.id === id) {
                    goodsArr.splice(index, 1)
                    return false
                }
            })
            // 删除dom结构
            $(this).parent().remove()
            // 更新本地存储的数据
            localStorage.setItem('CONVAS', JSON.stringify(goodsArr))
            if (goodsArr.length <= 0) {
                localStorage.removeItem('CONVAS')
                var newLi = '<li>购物车暂无数据！</li>'
                $('.shopcart-list').html(newLi)
            }
        })

    } else {
        var newLi = '<li>购物车暂无数据！</li>'
        $('.shopcart-list').html(newLi)
    }
})










//   var goodsArr = JSON.parse(localStorage.getItem('goods'));
//   function dataJson(data) {
//     console.log(data);
//     console.log(goodsArr);
//     // // console.log(data.data.length);
//     var len = data.data.length;
//     var domStr = '';
//     var domStr1 = ''

//     for (var i = 0; i < len; i++) {
//       for (var j = 0; j < goodsArr.length; j++) {
//         if (data.data[i].id === goodsArr[j].id) {
//           var price = data.data[i].price * goodsArr[j].num
//           domStr += `
//               <li class="payli" value="${price}">
//                 <input type="checkbox" class="checked">
//                 <img src="${data.data[i].imgurl}" alt="">
//                 <h3>${data.data[i].title}</h3>
//                 <p>${data.data[i].price}</p>
//                 <span>${goodsArr[j].num}</span>
//                 <em data-id="${data.data[i].id}">删除</em>
//               <>
//               `;

//         domStr +=`
//         <div class="list-change">
//         <input type="checkbox">
//         </div>
//         <div  class="goods-box">
//             <div class="goods-img">
//             ${data.data[i].imgsrc}
//             </div>
//         <div class="goods-detial">
//             <h4>${data.data[i].text}</h4>
//             <p></p>
//         </div>
//         <div class="goods-prince">${data.data[i].prince}</div>
//         <em data-id="${data.data[i].id}">删除</em>
//     </div>`;
//         }
//       }
//     }
//     for (var i = 0; i < 5; i++) {
//       domStr1 += `
//         <div class="good">
//           <img src="${data.data[i].imgurl}" alt="">
//           <a href="##">${data.data[i].title}</a>
//           <span>${data.data[i].price}</span>
//           <i>23423 已评价</i>
//         </div>
//   `;
//     };
//     $('.list').html(domStr);
//     $('.goods').html(domStr1);
//     var liLen = $('.payli').length
//     var tot = 0
//     for (var x =0;x<liLen;x++) {
//       tot += $('.payli')[x].value
//     }
//     $('.tot').text(`￥${tot}`)
//   }
