
fetch('data3.json')
    .then(function(data){ return data.json() })
    .then(function(realData){
        // console.log(realData.product[0]);
        
        const elUl = document.querySelector('ul');

        // 고가
        function sorDcd(){
                                                // 문자가아닌 자리가 중요 한거(b,a)
            realData.product.sort(function(a,b){
                if(a.price < b.price){return 1;}
                if( a.price > b.price){return -1;}
                return 0;
            });
            printFun();
        }
        // 저가
        function sortAcd(){
            realData.product.sort(function(a,b){
                if(a.price > b.price){return 1;}
                if( a.price < b.price){return -1;}
                return 0;
            });
            printFun();
        }
        // function sortFun(){
        //     realData.product.sort(function(a,b){
        //         if(a.price < b.price){return 1;}
        //         if( a.price > b.price){return -1;}
        //         return 0;
        //     });
        // }

        function printFun(){
            // let tags = '';  →  문자를 추가하겠다 (빈깡통)
            let tags = [ ];
            let list = '';

            realData.product.forEach(function(v){
                // {
                //     "code":1,
                //     "name":"상품명 1",
                //     "price":1000,
                //     "datail":"상품1 상세설명.....",
                //     "photo":"../../img/01.jpg"
                // },
    
                        //  function( 매개변수 ) → (값, 키값, 전체값)
                        // { } 중괄호는 객체.
                        // ` ` 백티큐는 문자.
    
            tags.push( `<li>
                        <img src="${v.photo}">
                        <div>
                            <b>${v.name}</b>
                            <p>${v.price}원</p>
                        </div>
                    </li>`);
            }); //  : 바닐라
    
                        // tags += `<li>
                        //             <img src="${v.photo}">
                        //             <div>
                        //                 <b>상품명</b>
                        //                 <p>1,000원</p>
                        //             </div>
                        //         </li>`
                        //     }); //  : 바닐라
    
                        // elUl.innerHTML = `<li></li>`;  → 6개의 li

            // print
            // tags를 forEach를 만들어서 출력문을 만들자!
            tags.forEach(function(v){
                // elUl.append(v);  // 바닐라는 문자형태로 줌

                list += v;
            });

            elUl.innerHTML = list;
        }
        printFun();

        const btn = document.querySelectorAll('button');
        btn[0].addEventListener('click',function(){
            sortAcd();
        })
        btn[1].addEventListener('click',function(){
            sorDcd();
        })

    });






// fetch('data3.json')
//     .then(function(데이터){ 데이터 객체타입 변경 })
//     .then(function(){});