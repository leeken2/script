// ==UserScript==
// @name         刷课v终结.0
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       liken
// @require      http://code.jquery.com/jquery-latest.js
// @match        https://mooc1-1.chaoxing.com/mycourse/studentstudy?chapterId=*
// @match        http://www.php.cn/course/list/17.html
// @grant        none
// ==/UserScript==
// 使用教程
// chrome安装adblock插件，添加 *.chaoxing.com/richvideo/initdatawithviewer 进黑名单
// chrome安装油猴插件,然后添加脚本就可以用了
window.onload=function(){
    //信号，习题是否做完
    var compile=false;
    var noended=true;

    //确保视频正常播放
    setInterval((res)=>{
    if($('iframe').contents().find('iframe').contents().find('#video_html5_api')[0]&&$('iframe').contents().find('iframe').contents().find('#video_html5_api')[0].paused){
        $('iframe').contents().find('iframe').contents().find('.vjs-big-play-button')[0].click();
        $('iframe').contents().find('iframe').contents().find('#ext-gen1044')[0]&&$('iframe').contents().find('iframe').contents().find('#ext-gen1044')[0].click();
        $('iframe').contents().find('iframe').contents().find('.vjs-menu-item-text')[7]&&$('iframe').contents().find('iframe').contents().find('.vjs-menu-item-text')[7].click();
        console.log('视频开始播放，请稍等')
    }

    if($('.tabtags').find('span').length==3){
        if($('#dct2').length>0&&!$('#dct2').hasClass('currents')&&noended){
            $('#dct2').click();
            noended=false;
        }
    }
    if( $('iframe').contents().find('iframe').contents().find('.vjs-vol-3').length!=0){
        $('iframe').contents().find('iframe').contents().find('.vjs-vol-3').click()
    }
    },1000)

    //做习题
    setInterval((res)=>{
    //检测是否播放完毕
    if($('iframe').contents().find('.ans-job-finished').length==1){
       console.log('视频播放完毕，即将进入习题页面,10秒后将开始答题');
        if($('.tabtags').find('span').length==3){
            $('#dct3').click();
        }else{
            $('#dct2').click();
        }
        setTimeout((res)=>{
            if($('iframe').contents().find('iframe').contents().find('iframe').contents().find('label').length>0){
                $('iframe').contents().find('iframe').contents().find('iframe').contents().find('label').click();
                setTimeout((res)=>{
                    $('iframe').contents().find('iframe').contents().find('iframe').contents().find('.Btn_blue_1').click();
                    setTimeout((res)=>{
                        $('iframe').contents().find('iframe').contents().find('iframe').contents().find('.bluebtn').click();
                        compile=true;
                        console.log("compile:",compile);
                    },2000)
                },2000);
            }else{
                compile=true;
                console.log("compile:",compile);
            }
        },10000);
       }
    },20000)

    //下一课
    setInterval((res)=>{
        if(compile){
            compile=false;
            setTimeout((rs)=>{
                $('.orange01').click();
                noended=true;
                console.log('即将进入下一课');
            },5000);
        }
    },1000);
};


