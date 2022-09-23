$(function(){
  //로딩페이지
    var loadingPage = gsap.timeline({});
    loadingPage.to('.loading .logo-1 .cover',{yPercent:-100,delay:.3})
    .to('.loading .logo-1',{opacity:0,delay:.3})
    .to('.loading .logo-2 .cover',{opacity:0,delay:.3})
    .to('.loading',{opacity:0,display:'none',delay:.3})
    .from('.sc-visual .img-box',{scale:1.5})

      //마우스 커서 효과
  $('.all-wrapper').mousemove(function(e){
    const xPosition = e.clientX - 25; 
    const yPosition = e.clientY - 25;

    gsap.to('.cursor',{
        x:xPosition,
        y:yPosition,
    })
  });


  //스크롤 하면 about 버튼 생성
  $(window).scroll(function(){
    if($(window).scrollTop()){
      $('.about-btn').css('opacity','1');
    }else {
      $('.about-btn').css('opacity','0');
    }
  });

  //forEach 반복문 _ 스크롤하면 사라지는 흰색 텍스트 박스
  $('.white-area').each(function(i,el){
    gsap.to(el,{
      scrollTrigger:{
        trigger:el,
        start:"top 95%",
        end:"bottom top",
      },
      yPercent:-101
      //.white-area를 100% 위로 올려놓음
    })
  });


    //.sc-visual 스크롤 트리거
    gsap.to('.sc-visual .img-box img',{
      scrollTrigger : {
        trigger:".sc-visual",
        start:"top top",
        end:"bottom top",
        scrub:2
      },
      yPercent:20
    });
    //.sc-visual .next-btn에 마우스 올리면 마우스 모양 변화
    $('.sc-visual .next-btn').hover(function(){
      $('.cursor').addClass('on')
    },function(){
      $('.cursor').removeClass('on')
    });
    //a 태그 위에 마우스 올리면 마우스 모양 변함
    $('a').hover(function(){
      $('.cursor').addClass('on')
    },function(){
      $('.cursor').removeClass('on')
    });


  //.sc-artisanal 텍스트 사라졌다 나타남
  gsap.from('.sc-artisanal .inner2',{
    scrollTrigger:{
      trigger:".sc-artisanal .inner2",
      start:"top 95%",
      //트리거의 top 스크롤 80%
      end:"bottom 50%",
      //트리거의 bottom 이 스크롤의 50%에 올 때
      scrub:2
    },
    opacity:0
  });








  //텍스트가 스크롤에 맞춰 x축 방향으로 움직인다.
  gsap.from('.sc-collection .txt-area1 .txt-box span',{
    scrollTrigger:{
      trigger:".sc-collection .txt-area1",
      start:"top bottom",
      end:"bottom top",
      scrub:2.5
    },
    xPercent:-20
  })
  gsap.from('.sc-collection .txt-area2 .txt-box span',{
    scrollTrigger:{
      trigger:".sc-collection .txt-area2",
      start:"top bottom",
      end:"bottom top",
      scrub:2.5
    },
    xPercent:20
  });

  //.sc-product .product-item 순서대로 나타남
  const fadeList = document.querySelectorAll('.sc-product .product-item');
  fadeList.forEach((fadeList, index)=> {
    gsap.from(fadeList,1,{
      scrollTrigger:{
        trigger:fadeList,
        start:"top 80%",
        end:"0% 0%",
    },
    opacity:0,
    delay: (index + 1) * .3
    })
  })







  //스크롤에 맞춰 아래에 숨어있던 텍스트가 나타남
    gsap.from('.sc-group h2 .txt',{
      scrollTrigger:{
        trigger:".sc-group3 h2",
        start:"top bottom",
        end:"top top",
        stragger:0.3
      },
      yPercent:100
    });
  //.product-ico scrollTrigger
  $('[data-y]').each(function(i,el){
    yVal = $(this).data('y')

    gsap.to(el,{
        scrollTrigger:{
            trigger:el,
            start:"top 80%",
            end:"bottom bottom",
            scrub:1,
        },
        yPercent:yVal,
        opacity:1
    });
  });









    //.sc-group4 텍스트 나타남
    gsap.from('.sc-iconsInfo .inner2',{
      scrollTrigger:{
        trigger:".sc-iconsInfo .inner2",
        start:"top 95%",
        //트리거의 top 스크롤 80%
        end:"bottom 50%",
        //트리거의 bottom 이 스크롤의 50%에 올 때
        scrub:2
      },
      opacity:0
    });

})