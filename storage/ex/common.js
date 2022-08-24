
$('header').load('inc.html a', menu);

function menu(){
                              // ↓  앞단의 값이 존재하지 않을 때만 실행함 (|| : 역슬러시) 
    $('header a').eq(localStorage.num || 0).addClass('active');
    // 클릭할때만 실행이 되기때문에 위로 빼줌

    // ↓ 아예동작을안함. → load가 비동기이기 때문에 앞전에 먼저 실행해버림
    $('header a').on('click',function(){
        
        let idx = $(this).index();
        localStorage.num=idx
        
        // event.preventDefault();
        // console.log('hi~');
    })
}