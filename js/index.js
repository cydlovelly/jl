$(function(){
    act.exe();
});
//行为
var act = {
    // 总事件集合
    exe:function(){
        act.cut();
        act.game();
        act.clase();
        act.ani();
        act.nexta();
    },


    //点击切换事件
    cut:function(){
        $(".s-l-1").click(function(){
            $(this).addClass("active2").siblings().removeClass("active2");
            $(".six-right1").show().siblings().hide();
        });
        //点击切换为
        $(".s-l-2").click(function(){
            $(this).addClass("active2").siblings().removeClass("active2");
            $(".six-right2").show().siblings().hide();
        });
    },


    //点击弹出游戏框
    game:function(){
        $(".six-right1").click(function(){
            $(".box,.box1").show(300);

        });
        $(".six-right2").click(function(){
            $(".box,.box2").show(300);
        });
    },


    //关闭游戏的界面
    clase:function(){
        $(".clase").click(function(){
            // $(".box1,box2").hide(500);
            $(".box").slideUp(300);
        })
    },
    
    //第四页的鼠标经过事件
    ani:function(){
        $("#four li").hover(function(){
            var index = $(this).index();
            switch(index){
                case 0:
                    $(".f_l_1").eq(0).css({
                        "opacity":1,
                    })
                    $(".f_l_2").eq(0).css({
                        "opacity":0,

                    })
                    break;
                case 1:
                    $(".f_l_1").eq(1).css({
                        "opacity":1,
                    })
                    $(".f_l_2").eq(1).css({
                        "opacity":0,
                   
                    })
                    break;
                case 2:
                    $(".f_l_1").eq(2).css({
                        "opacity":1,
                    })
                    $(".f_l_2").eq(2).css({
                        "opacity":0,
                    })
                    break;
                case 3:
                    $(".f_l_1").eq(3).css({
                        "opacity":1,
                    })
                    $(".f_l_2").eq(3).css({
                        "opacity":0,
                    })
                    break;
                case 4:
                    $(".f_l_1").eq(4).css({
                        "opacity":1,
                    })
                    $(".f_l_2").eq(4).css({
                        "opacity":0,
                    })
                    break;
                case 5:
                    $(".f_l_1").eq(5).css({
                        "opacity":1,
                    })
                    $(".f_l_2").eq(5).css({
                        "opacity":0,
                    })
                    break;
                case 6:
                    $(".f_l_1").eq(6).css({
                        "opacity":1,
                    })
                    $(".f_l_2").eq(6).css({
                        "opacity":0,
                    })
                    break;
                case 7:
                    $(".f_l_1").eq(7).css({
                        "opacity":1,
                    })
                    $(".f_l_2").eq(7).css({
                        "opacity":0,
                   
                    })
                    break;
            }

            console.log(index);
        },function(){
            // 0
            $(".f_l_1").eq(0).css({
                "opacity":0,
            })
            $(".f_l_2").eq(0).css({
                "opacity":1,
            })
            // 1
            $(".f_l_1").eq(1).css({
                "opacity":0,
            })
            $(".f_l_2").eq(1).css({
                "opacity":1,
            })
            // 2
            $(".f_l_1").eq(2).css({
                "opacity":0,
            })
            $(".f_l_2").eq(2).css({
                "opacity":1,
            })
            //3
            $(".f_l_1").eq(3).css({
                "opacity":0,
            })
            $(".f_l_2").eq(3).css({
                "opacity":1,
            })
            //4
            $(".f_l_1").eq(4).css({
                "opacity":0,
            })
            $(".f_l_2").eq(4).css({
                "opacity":1,
            })
            //5
            $(".f_l_1").eq(5).css({
                "opacity":0,
            })
            $(".f_l_2").eq(5).css({
                "opacity":1,
            })
            //6
            $(".f_l_1").eq(6).css({
                "opacity":0,
            })
            $(".f_l_2").eq(6).css({
                "opacity":1,
            })
            //7
            $(".f_l_1").eq(7).css({
                "opacity":0,
            })
            $(".f_l_2").eq(7).css({
                "opacity":1,
            })
        })
        
    },
    //下一页的动画
    nexta:function(){
        $(".next_page").hover(function(){
                $(this).css({
                    "color":"rgb(147, 157, 255)",
                    "opacity":0.3,
                })
        },function(){
            $(this).css({
                "color":"#fff",
                "opacity":1,
            })
        })
    }
}