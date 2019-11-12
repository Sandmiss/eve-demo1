function bindEvent () {
    $('.left-btn li a').on('click', function () {
        $('.left-btn li a.on').removeClass('on');
        $(this).addClass('on');
    });
    $('.left-btn li .btn1').on('click', function () {
        $('.item.on').removeClass('on');
        $('.mid-content .item1').addClass('on');
    });
    $('.left-btn li .btn2').on('click', function () {
        $('.item.on').removeClass('on');
        $('.mid-content .item2').addClass('on');
    });
    $('.left-btn li .btn3').on('click', function () {
        $('.item.on').removeClass('on');
        $('.mid-content .item3').addClass('on');
    });

    $('.item2 .txt a').on('click', function () {
        $('.item2 .intro.on').removeClass('on');
        $('.item2 .intro').addClass('on');
        $('.item2 .btn').css('display','block');
    });
    $('.item2 .txt a.img1').on('click', function () {
        $('.item2 .intro1').addClass('on');
    });
    $('.item2 .txt a.img2').on('click', function () {
        $('.item2 .intro2').addClass('on');
    });
    $('.item2 .txt a.img3').on('click', function () {
        $('.item2 .intro3').addClass('on');
    });
    $('.item2 .txt a.img4').on('click', function () {
        $('.item2 .intro4').addClass('on');
    });

    $('.close1').on('click', function () {
        $('.item2 .intro.on').removeClass('on');
        $('.item2 .intro-common.on').removeClass('on');
        $('.item2 .btn').css('display','none');
    });

    // prev next
    $('.item2 .btn .prev').on('click', function () {
        $('.mid-content .item2 .intro .intro-common.on .intro-txt .txt-c p.on').prev().addClass('on');
        $('.mid-content .item2 .intro .intro-common.on .intro-txt .txt-c p.on').next().removeClass('on');
    });
    $('.item2 .btn .next').on('click', function () {
        $('.mid-content .item2 .intro .intro-common.on .intro-txt .txt-c p.on').next().addClass('on');
        $('.mid-content .item2 .intro .intro-common.on .intro-txt .txt-c p.on').prev().removeClass('on');
    });


    // item3
    $('.mid-content .item3 .txt .cj').on('click', function () {
        $('.mid-content .item3 .txt').css('display', 'none');
        $('.mid-content .item3 .intro').css('display', 'none');
        $('.mid-content .item3 .tc-box').addClass('on');
        $('.mid-content .item3 .tc-box .tc-item.on').removeClass('on');        
        $('.mid-content .item3 a.return').css('display', 'block');
    });
    $('.mid-content .item3 .txt .cj1').on('click', function () {
        $('.mid-content .item3 .tc-box .tc-item:nth-of-type(1)').addClass('on');
    });
    $('.mid-content .item3 .txt .cj2').on('click', function () {
        $('.mid-content .item3 .tc-box .tc-item:nth-of-type(2)').addClass('on');
    });
    $('.mid-content .item3 .txt .cj3').on('click', function () {
        $('.mid-content .item3 .tc-box .tc-item:nth-of-type(3)').addClass('on');
    });
    $('.mid-content .item3 .txt .cj4').on('click', function () {
        $('.mid-content .item3 .tc-box .tc-item:nth-of-type(4)').addClass('on');
    });

    $('.mid-content .item3 a.return').on('click', function () {
        $('.mid-content .item3 .tc-box').removeClass('on');
        $('.mid-content .item3 .txt').css('display', 'block');
        $('.mid-content .item3 .intro').css('display', 'block');
        $('.mid-content .item3 a.return').css('display', 'none');
        $('.mid-content .item3 .tc-box .tc-item.on').removeClass('on');
    })

    
}
bindEvent();