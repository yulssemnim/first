$(function(){
    /* 메뉴버튼 클릭시  */
    $('ul#menu li').click(function(e){
        e.preventDefault();
        //변수 ht에 브라우저의 높이값 저장
        let ht = $(window).height();
        //변수 i에 클릭한 li의 순서값을 저장
        let i = $(this).index();
        //브라우저의 높이값*인덱스값은 현재 박스의 스크롤 위치값과 동일
        let nowTop = i*ht;
        $('html,body').stop().animate({
            scrollTop : nowTop
        },1400);
    });

    //스크롤 이벤트 - 메뉴 on class
    $(window).on('scroll',function(){
        let ht =$(window).height();
        let sct = $(window).scrollTop();
        let sectionlength = $('#wrap section').length;
        for(let i =0 ; i<sectionlength; i++){
            if(sct>=ht*i && sct<ht*(i+1)){
                $('ul#menu li').removeClass();
                $('ul#menu li').eq(i).addClass('on');
            }
        }      
    });

    //마우스휠 이벤트
    $('section').on('wheel',function(e){
        e.preventDefault();
        let nav; 
        if(e.originalEvent.wheelDelta>0 || e.originalEvent.detail<0){
             nav = $(this).prev();
           
        }else{
             nav = $(this).next();
        }

        if(nav.length){
            let moveTop = nav.offset().top;
            $('html,body').stop().animate({
                scrollTop : moveTop
            },1400);
            console.log(nav);
        }
    });

    //마우스무브 이벤트
    $('section').on('mousemove',function(e){
        let posX = e.pageX;
        let posY = e.pageY;
        //console.log(posX+'/'+posY);
        //첫번째 박스 이미지 위치값을 마우스 커서의 위치값과 연동
        $('.p11').css({
            bottom: 20- (posY/30),
            right:20 - (posX/30)
        });
        $('.p12').css({
            bottom: -40 + (posY/20),
            right:130 + (posX/20)
        });
        $('.p13').css({
            top: 180 - (posY/50),
            right:60 - (posX/50)
        });
        /* 두번째 박스의 위치값을 마우스 커서의 위치값과 연동 */
        $(".p21").css({
            "right": -180 - (posX / 30),
            "bottom": -480 - (posY / 30)
        });
        $(".p22").css({
            "right": 130 - (posX / 50),
            "bottom": -40 - (posY / 50)
        });

        /* 세번째 박스의 위치값을 마우스 커서의 위치값과 연동 */
        $(".p31").css({
            "right": 180 - (posX / 30),
            "bottom": 30 - (posY / 30)
        });
        $(".p32").css({
            "right": 110 - (posX / 20),
            "bottom": -270 - (posY / 20)
        });
        $(".p33").css({
            "right": -70 - (posX / 20),
            "bottom": -130 - (posY / 20)
        });


        /* 네번째 박스의 위치값을 마우스 커서의 위치값과 연동 */
        $(".p41").css({
            "right": 20 - (posX / 30),
            "bottom": -120 - (posY / 30)
        });
        $(".p42").css({
            "right": 0 - (posX / 20),
            "bottom": -180 - (posY / 20)
        });
    });

});