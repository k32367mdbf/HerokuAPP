jQuery(document).ready(function()
{

//LOGO淡出
$("#logo").delay(3000).fadeOut(2000);


//開啟視訊串流------------------------------------------

//看瀏覽器支不支援
navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia|| navigator.msGetUserMedia;

var video = document.querySelector('#camera');


//若成功則執行
function successCallback(stream)
{
    window.stream = stream; // stream available to console

    //Chrome，Opera用
    if (window.URL)
        video.src = window.URL.createObjectURL(stream);
    //Firefox用
    else
        video.src = stream;
}


//若失敗則執行
function errorCallback(error)
{
    console.log("無法取得視訊串流 : ", error);
}


var exArray = []; //用來存裝置串流來源
//取得裝置串流來源
MediaStreamTrack.getSources(
    function (sourceInfos)
    {
        for(var i = 0; i != sourceInfos.length; ++i)
        {
            var sourceInfo = sourceInfos[i];
            if (sourceInfo.kind === 'video') //會遍歷audio,video，所以要判斷
                exArray.push(sourceInfo.id);
        }
        //取得視訊串流
        navigator.getUserMedia(
            {
             'video':
             {
                //0為前置，1為後置
                'optional': [ {'sourceId': exArray[1]} ]
             }
            },
            successCallback, errorCallback);
    });



//陀螺儀----------------------------------------

if(window.DeviceOrientationEvent)
{
    //監聽裝置方向
    window.addEventListener('deviceorientation', function(event)
    {
        beta = event.beta;
        gamma = event.gamma;

        //iOS用
        if(event.webkitCompassHeading)
        {
            alpha = event.webkitCompassHeading;
        }
        //其他
        else
        {
            alpha = event.alpha;

            //非Chrome
            if(!window.chrome)
            {
                alpha = alpha-270;
            }
        }


		//觸發NPC==============================
		if(alpha>90 && alpha<180)
		{
			$("#ghost").show();
		}
		else
		{
			$("#ghost").hide();
		}

    },false);
}
else
{
    console.log('不支援陀螺儀喔～～');
}



//點圖
$("#ghost").click(function()
{
	$('#overlay').show();    //顯示overlay
	$('.frame').show();	     //顯示對話框

	//打字
	$('#typed').typed({
		strings : ["嗚嗚嗚嗚嗚嗚～～～～"],
		typeSpeed : 30,
		loop : false
	});
});



//點overlay
$('#overlay').click(function()
{
	$('#overlay').hide();       //隱藏overlay
	$('.frame').hide();  		//隱藏對話框
	$('#typed').typed('reset');
});





//測試區==============================================

$("#settingBtn").click(function()
{
    $('.testClass').toggle();

});


//測試陀螺儀
$("<p>",
{
	"class": "testClass",
	"id": "alpha",
	"style":"position:absolute; left:0;top:60vh; z-index:3; display:none",
}).appendTo("body");
$("<p>",
{
	"class": "testClass",
	"id": "beta",
	"style":"position:absolute; left:0;top:70vh; z-index:3; display:none",
}).appendTo("body");
$("<p>",
{
	"class": "testClass",
	"id": "gamma",
	"style":"position:absolute; left:0;top:80vh; z-index:3; display:none",
}).appendTo("body");

window.addEventListener('deviceorientation', function(event)
{
	document.getElementById('alpha').innerHTML = Math.round(alpha);
	document.getElementById('beta').innerHTML = Math.round(beta);
	document.getElementById('gamma').innerHTML = Math.round(gamma);
},false);




}); //end of jQuery





