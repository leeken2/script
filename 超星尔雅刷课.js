// ==UserScript==
// @name         ˢ��v�ս�.0
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       liken
// @require      http://code.jquery.com/jquery-latest.js
// @match        https://mooc1-1.chaoxing.com/mycourse/studentstudy?chapterId=*
// @match        http://www.php.cn/course/list/17.html
// @grant        none
// ==/UserScript==
// ʹ�ý̳�
// chrome��װadblock�������� *.chaoxing.com/richvideo/initdatawithviewer ��������
// chrome��װ�ͺ���,Ȼ����ӽű��Ϳ�������
window.onload=function(){
    //�źţ�ϰ���Ƿ�����
    var compile=false;
    var noended=true;

    //ȷ����Ƶ��������
    setInterval((res)=>{
    if($('iframe').contents().find('iframe').contents().find('#video_html5_api')[0]&&$('iframe').contents().find('iframe').contents().find('#video_html5_api')[0].paused){
        $('iframe').contents().find('iframe').contents().find('.vjs-big-play-button')[0].click();
        $('iframe').contents().find('iframe').contents().find('#ext-gen1044')[0]&&$('iframe').contents().find('iframe').contents().find('#ext-gen1044')[0].click();
        $('iframe').contents().find('iframe').contents().find('.vjs-menu-item-text')[7]&&$('iframe').contents().find('iframe').contents().find('.vjs-menu-item-text')[7].click();
        console.log('��Ƶ��ʼ���ţ����Ե�')
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

    //��ϰ��
    setInterval((res)=>{
    //����Ƿ񲥷����
    if($('iframe').contents().find('.ans-job-finished').length==1){
       console.log('��Ƶ������ϣ���������ϰ��ҳ��,10��󽫿�ʼ����');
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

    //��һ��
    setInterval((res)=>{
        if(compile){
            compile=false;
            setTimeout((rs)=>{
                $('.orange01').click();
                noended=true;
                console.log('����������һ��');
            },5000);
        }
    },1000);
};


