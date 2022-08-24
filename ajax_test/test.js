// $.ajax({
//     url:"./data.json",
//     success:function(data){

//         let elData;

//         $.each(data.items,function(v){
//             elData += `<div class="thumb">
//                         <a href=${v.detail} class="image">
//                         <img src=${v.thumb} alt="" />
//                         </a>
//                         <h2>Magna feugiat lorem</h2>
//                     </div>`;
//         })
//         $('#main').html(elData);
//     }
// })



$.ajax({
    url:"./data.json",
    success:function(data){
        let tags='';
        $.each(data.items,function(k,v){
            tags += `<div class="thumb">
                        <a href="images/fulls/01.jpg" class="image">
                            <img src="images/thumbs/01.jpg" alt="" />
                        </a>
                        <h2>Magna feugiat lorem</h2>
                    </div>`;
        })
        $('#main').html(tags);


        $('.thumb').on('click',function(){  
            event.preventDefault();

            $('.pic img').attr('src','변경할주소');
            $('.caption h2').text('src','변경할 제목');

            $('.poptrox-overlay').fadeIn();
        })
    }
})

