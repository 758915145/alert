/**
 * 漂亮的alert
 * @param  {Object} option 用来设置对话框的标题和内容
 * @example
 * alert({title:"温馨提示",content:'您正在使用alert插件'});
 */
window.alert = function(option){

    //添加样式
    var style = document.createElement('style');
    style.innerHTML = '\
    #xiaoyi-close-a{\
        position:absolute;\
        top:10px;\
        right:10px;\
        display:block;\
        font-weight:700;\
        color:#DDD;\
        text-decoration:none;\
    }\
    #xiaoyi-close-a:hover{\
        color:#CC7070\
    }\
    .xiaoyi-dialog a{\
        text-decoration:none;\
        color:#FFF;\
        padding:10px 20px;\
        border-radius:4px;\
        text-shadow:1px 1px 2px #333;\
        box-shadow:2px 2px 5px #111\
    }\
    .xiaoyi-dialog-a-1{\
        background-color:#74B0D2;\
        background:linear-gradient(#74B0D2,#8CBEDA 45%,#76ADCA 55%,#70ADCC 100%);\
    }\
    .xiaoyi-dialog a:hover{\
        background-color:#D27474;\
        background:linear-gradient(#D27474,#DA8C8C 45%,#CA7676 55%,#CC7070 100%);\
    }';
    document.head.appendChild(style);

    //添加alert的html
    var div = document.createElement('div');
    div.style.cssText = 'padding-bottom:30px;transition:opacity 0.3s;opacity:0;font-family:\'微软雅黑\';width:300px;position:fixed;top:38.2%;left:50%;background-color:#333;border-radius:5px;box-shadow:5px 5px 10px #666;margin-left:-150px;margin-top:-56px;'
	div.innerHTML = '<a href="javascript:;" id="xiaoyi-close-a" title="关闭对话框">×</a>\
	   <div style="padding:20px;color:#FFF;text-align: center;">\
       <div style="font-size:16px;font-weight:700;margin-top:10px;" id="xiaoyi-title">'+(option.title?option.title:"温馨提示")+'</div>\
       <p style="font-size:12px" id="xiaoyi-content">'+(option.content?option.content:'来自'+location.hostname+'的提醒')+'</p>\
       <div style="text-align:center;font-size:12px;margin-top:30px;" class="xiaoyi-dialog" id="xiaoyi-yes"><a href="javascript:;" class="xiaoyi-dialog-a-1">确定</a></div>\
    </div>';
    document.body.appendChild(div);
    document.getElementById('xiaoyi-yes').onclick = document.getElementById('xiaoyi-close-a').onclick = hide;
    var title = document.getElementById('xiaoyi-title');
    var content = document.getElementById('xiaoyi-content');

    function hide(){
        div.style.opacity = 0;
        setTimeout(function(){
            div.style.display = 'none';
        },300);
    }

    function show(){
        div.style.display = 'block';
        setTimeout(function(){
    		div.style.opacity = 1;
    	});
    }show();

    //第一次执行alert()之后，重新赋值给alert
    window.alert =  function(option){
        option = option || {};
        title.innerHTML = option.title||'温馨提示';
        content.innerHTML = option.content||'来自'+location.hostname+'的提醒';
        show();
    };
};
