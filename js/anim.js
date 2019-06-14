$(function(){
    init.start();
    init.cyd();
    init.page();
    // var link = $('<link id="cssfli" rel="stylesheet" type="text/css" href="./css/index.css"/>');
    // $("head").append(link);
})
var init ={
    // 开始
    start:function(){
        init.one();  //开始执行第一页的动画
        init.next();  //
        // init.tcs();
        $(".all .li").eq(0).css({"opacity":"1"});
        

    },
    index:0,
    a:false,
    //开始高度度
    cyd:function(){
        var ah = $(window).height();
        $(".all").css("height",ah) ;
    },
    //第一页动画
    one:function(){
        $(".one-title").css("animation","myonetitle 2s");
        $(".photo-img").css("animation"," myphoto 2s");
        $(".one-c-p p").css("animation","myonep 2s");
        $(".one-line").css( "animation","myoneline 2s");
    },
    // 第二页动画
    two:function(){
        $(".two-title").css("animation","mytwotitle 2s");
        $(".two-line").css("animation", "mytwoline 2s");
        $(".two-con ul").css("animation","mytwoul 2s");
    },
    // 第三页动画
    three:function(){
        $(".three-title").css("animation","mythreetitle 2s");
        $(".three-con ul").css("animation","mythreecon 2s");
    },
    four:function(){
        $(".four li").css("animation","myfourli 2s");
    },
    five:function(){
        $(".five p").css("animation","myfivep 2s");
    },
    six:function(){
        $(".s-l-1,.s-l-2").css('animation','mysl 2s');
        $(".six-right1").css("animation","mysixr 2s");
    },
    // 点击事件
    next:function(){
        $(".next_page").click(function(){
            init.goindex();
            // console.log(init.index);
            // alert(h);  //测试
        });
        $(".origin li").click(function(){
            // alert(0);       //测试
            
            index = $(this).index();
            init.index = index;
            switch(index){
                case 0:
                    init.one();
                    break;
                case 1:
                    init.two();
                  
                    break;
                case 2:
                    init.three();
                    
                    break;
                case 3:
                    init.four();
                  
                    break;
                case 4:
                    init.five();
                   
                    break;
                case 5:
                    init.six();
                  
                    break;
            }
            $(".origin li").eq(index).addClass("active").siblings().removeClass("active");
            $(".all .li").eq(init.index).css("z-index","2").siblings().css("z-index","0");
            $(".all .li").eq(index).css({"opacity":1}).siblings().css({"opacity":0});
            $(".all .origin").css({"opacity":1,"z-index":"2"});
            if(index == 5){        // 初始化贪吃蛇
                $(".six-right1,.six-right2").css({"z-index":"0"})
            }else{
                $(".six-right1,.six-right2").css({"z-index":"-1"})
            }
            // console.log(index);
        })
    },
    //下一页
    goindex:function(){
        if(init.index < 5){
            init.index ++;
        }else{
            init.index = 0;
        }
        switch(init.index){
            case 0:
                init.one();
                break;
            case 1:
                init.two();
                break;
            case 2:
                init.three();
                break;
            case 3:
                init.four();
                break;
            case 4:
                init.five();
                break;
            case 5:
                init.six();
                break;
        }
        //给圆点的样式
        $(".origin li").eq(init.index).addClass("active").siblings().removeClass("active");
        //翻页
        $(".all .li").eq(init.index).css("z-index","2").siblings().css("z-index","0");
        $(".all .li").eq(init.index).css({"opacity":1}).siblings().css({"opacity":0});
        //设置圆点的不透明度
        $(".all .origin").css({"opacity":"1","z-index":"2"});
    },
    
    //不同页面加载不同css
    page:function(){
             var   w = $(window).width()
           
            
                if( w >=310  && w<=414 ){
                    $("#cssfli").attr("href","./css/index2.css");
                }else if(w > 414 && w < 580){
                    $("#cssfli").attr("href","./css/index1.css");
                }else if(w > 580   && w < 980){
                    $("#cssfli").attr("href","./css/index3.css");
                }else if(w > 980 && w <1435){
                    $("#cssfli").attr("href","./css/index4.css");
                }
                else{
                    $("#cssfli").attr("href","./css/index.css");
                }
            
        window.onresize = function(){
            var   w = $(window).width()
           
            
            if( w >=310  && w<=414 ){
                $("#cssfli").attr("href","./css/index2.css");
            }else if(w > 414 && w < 500){
                $("#cssfli").attr("href","./css/index1.css");
            }else if(w > 500   && w < 980){
                $("#cssfli").attr("href","./css/index3.css");
            }else if(w > 980 && w <1435){
                $("#cssfli").attr("href","./css/index4.css");
            }
            else{
                $("#cssfli").attr("href","./css/index.css");
            }
        }
       
    }
}
   