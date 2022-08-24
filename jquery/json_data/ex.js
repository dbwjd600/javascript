// 1. ul안에 준비된 데이터 수만큼 li추가
//   ㄴ 이미지 주소, 상품명, 가격 각각 출력


// 2. 추가된 li클릭하면 팝업창 노출
//    ㄴ 이미지, 상품명, 가격, 디테일정보


$.ajax({
    url:"data3.json",
    success:function(data){

        let elData;
        // console.log(data.product)
        $.each(data.product,function(key,value){

                    // 내가 어떤 상품을 클릭했는지 힌트를 남겨둠 --> 상품에 대한 code값 (고유번호)
                    // data : 사용자 속성 (data뒤에 -code 는 자유이름지정)
            elData = `<li data-code=${value.code}>
                        <img src="${value.photo}">
                        <div>
                            <b>${value.name}</b>
                            <p>${value.price}</p>
                        </div>
                      </li>`;

            $('ul').append(elData);
            // $('ul').html('<li></li>');
                //      ↑  html문서는 <ul>태그 안 데이터를 <li>데이터로 변경해버림
                //     append : 뒤로(뒤에서) 추가

        })

        // each end 

        // 출력밑에서 이벤트 넣어주기
        //  ㄴ ajax는 비동기 (로드 되는 문서가 먼저나옴)

    $('ul li').on('click',function(){

    // 
        let code = $(this).data('code');

    // 데이터들 중에서 클릭한 상품 코드값과 같은 데이터를 찾아라!  ( 동등 연산자 )
        // let p = data.product.filter( num => num.code == code);
        let p = data.product.filter(function(num){
            return num.code == code;
        });

        console.log(p)

        // console.log(data.product[code].name)

        /*   
            $.each(data.product,function(i,v){
                if(v.code == code) console.log(v)
            }) 
        */

        // let p = data.product.filter(function(매개변수){   });
        // let p = data.product.filter(  (매개변수) => {   } );

        // var a = 0;
        // function aaa(){}
        //     // ㄴ 함수선언식  -  밑에서도 가능 위에서도 가능
        // let aaa = function(){}
        //     // ㄴ 함수표현식  -  밑에서만 호출가능

        // let aaa = word   =>    { return word }
                            // ↑ function
        // let aaa = word => word


    // 출력할 태그안에 값을 변경
        let elPopup = `<div><img src="../../img/01.jpg"></div>
                        <div>
                            <p>상품명</p>
                            <p>가격</p>
                            <p>상품1에 대한 상세설명.........</p>
                        </div>`

        // console.log($(this).data('code'))

        $('.info').html(elPopup);

        $('.popup').addClass('active');

        $('.popup').on('click',function(){
            // console.log(event.target.tagName)

            // if(event.target.className == 'popup active')
            if(event.target.classList.contains('popup'))
            // popup이라는 클래스이름이 존재한다면 - true, 아니면 - false
            $('.popup').removeClass('active');
        });
    })


        // success end

}});
