
//load近來將取得的資料存進cookie
$(document).ready(function(){
	$.ajax({
		type : 'post',
		url : '/getPlayerData',
		data : {
			id : $.cookie('usrd')
		},
		success : function(data){
			$.cookie('storyStage', data.storyStage);
			$.cookie('gameStage', data.gameStage);
			$.cookie('hp', data.hp);
			$.cookie('story', '', {expires: -1});
			game();
		},
		error : function(err){
			console.log(err);
		}
	});
});



var id_game_interval;
function game(){
        if($.cookie('storyStage') == 2&& $.cookie('gameStage') == 0&& $.cookie('story') != 1){

            $.cookie('story',1);

            //給你傳單
            $('#giveLeaflet').slideDown(2000, function(){
                console.log('leaflet');
                $('#giveLeaflet').hide();
                $.cookie('gameStage', 1);
				saveData();

                id_game_interval = setInterval(game, 1000);
            });
        }
        if($.cookie('storyStage') == 2&& $.cookie('gameStage') == 1 &&((locationId==2 &&window.android)||!window.android)){

            clearInterval(id_game_interval);
            //拿出傳單看看
            $('#leaflet').show();
            $('#leaflet1').show();
			specialStage = true;
        }
        if($.cookie('storyStage') == 3&& $.cookie('gameStage') == 2&& $.cookie('story') != 1){
            $.cookie('story', 1);

            //出現時間倒數視窗
            $('#timeBack').show();

            //時間倒數
            timeBack();
        }
        if($.cookie('storyStage') == 4&& $.cookie('gameStage') == 3&& $.cookie('story') != 1){
            $.cookie('story', 1);

            //出現輸入年代的欄位
            $('#inputPwd').show();
        }
        if($.cookie('storyStage') == 6&& $.cookie('gameStage') == 4&& $.cookie('story') != 1){
            $.cookie('story', 1) ;

            //出現獎牌並且收到右下角動畫
            $('#madel1').fadeIn(800, function(){
                $('#madel1').animate({
                        bottom : '+='+screen.height+'px',
                        left : '+='+screen.width+'px',
                        opacity : '0'
                    }, 
                    500,
                    function(){
                        $('#madel1').hide();
                        $.cookie('story', '',{expires:-1}) ;
                        $.cookie('gameStage', 5);
						saveData();
                    }
                );
            });
			
			//更新獎牌收藏
			$('#Medal1P').attr("src","img/Medal1.png");
			$("#Medal1T1").html("江順成");
			$("#Medal1T2").html("已取得");
        }
        if($.cookie('storyStage') == 8&& $.cookie('gameStage') == 5&& $.cookie('story') != 1){
            //出現義隆瓷器遊戲
            $('#findObj').show();
            $.cookie('story', 1);
        }
//        if($.cookie('storyStage') == 9&& $.cookie('gameStage') == 6&& $.cookie('story') != 1){
//            $.cookie('story', 1);
//            //打卡 gameStage+1///////////
//            $.cookie('story', '',{expires:-1});
//            $.cookie('gameStage', 7);
//			saveData();
//        }
//        if($.cookie('storyStage') == 10&& $.cookie('gameStage') == 7&& $.cookie('story') != 1){
//            $.cookie('hp', 100);
//            $.cookie('gameStage', 8);
//			saveData();
//			
//            //回復血量///////////////
//            console.log('hp recover');
//        }
        if($.cookie('storyStage') == 9&& $.cookie('gameStage') == 6&& $.cookie('story') != 1){
           $.cookie('story', 1);
           //出現第二張獎牌
           $('#madel2').fadeIn(800, function(){
               $('#madel2').animate({
                       bottom : '+='+screen.height+'px',
                       left : '+='+screen.width+'px',
                       opacity : '0'
                   }, 
                   500,
                   function(){

                       $('#madel2').hide();
                       $.cookie('story', '',{expires:-1}) ;
                       $.cookie('gameStage', 7);
						saveData();
                   }
               );
           });
        }
        if($.cookie('storyStage') == 10&& $.cookie('gameStage') == 7&& $.cookie('story') != 1){
            //出現未完待續
            $('#black').show();
            $('#black').animate({
                opacity : '1'
            }, 1000, function(){console.log('black');});
            $('#black').animate({
                opacity : '1'
            }, 1000);
            $('#black').animate({
                opacity : '0'
            }, 1000, function(){
                $('#black').hide();
            });
            $.cookie('gameStage', 10);
			saveData();
        }

};

var time = 10;
function timeBack(){
	if(time > 0){
		time--;
		$('#time').html(time);
		setTimeout(timeBack, 1000);
	}
	else{
		if (navigator.vibrate) {
			navigator.vibrate(300);
		}
		$('#timeBack').hide();
		$.cookie('story', '', {expires: -1});
		$.cookie('gameStage', 3);	
	}
};
function saveData(){
	$.ajax({
		type : 'post',
		url : 'savePlayerData',
		data : {
			id : $.cookie('usrd'),
			hp : $.cookie('hp'),
			gameStage : $.cookie('gameStage')
		},
		success : function(data){
			console.log(data);
		},
		error : function(err){
			console.log(err);
		}
	});
}
    

