//傳單區
$('#leaflet1').click(function(){
	$('#leaflet1').fadeOut(500, function(){
		$('#leaflet2').fadeIn(500);
	});
});
$('#leaflet2').click(function(){
	$('#leaflet2').fadeOut(500, function(){
		$('#leaflet3').fadeIn(500);
	});
});
$('#leaflet3').click(function(){
	$('#leaflet3').hide();
	$.cookie('story', {expire : -1});
	$.cookie('gameStage', 2);
	saveData();
});

//輸入年代
$('#checkPwd').click(function(){
	if($('#Pwd').val() == '1995'){
		$('#inputPwd').fadeOut(500, function(){
			$.cookie('story', '', {expires: -1});
			$.cookie('gameStage', 4);
			saveData();
		});
	}
	else{
		if (navigator.vibrate) {
			navigator.vibrate(300);
		}
		$('#Pwd').val('');
	}
});

//義隆瓷器遊戲
var selectObj = [];
var ansObj = ['3select','5select'];
$('.obj').click(function(){
    var ob = $(this).attr('id');
	var id = $(this).attr('id') + 'select';
	
	var a = selectObj.indexOf(id);

	if(a == -1){
		selectObj.push(id);
        $('#'+ob).hide();
		$('#'+id).show();
	}
	else{
		selectObj.splice(a, 1);
		$('#'+id).hide();
        $('#'+ob).show();
	}
});
$('#checkSelect').click(function(){
	
	var ans = true;
	
	if(selectObj.length != ansObj.length){	
		ans = false;
	}
	else{
		for(i=0;i<selectObj.length;i++){
			var a = ansObj.indexOf(selectObj[i]);
			if(a == -1){
				ans = false;
			}
		}
	}
	
	if(!ans){
		selectObj = [];
		$('.select').hide();
        $('.obj').show();
		
		//震動
		if (navigator.vibrate) {
			navigator.vibrate(300);
		}
	}
	else{
		$('.select').hide();
		$('#findObj').hide();
		$('#objData').show();
	}
});

//義隆瓷器遊戲成功後的物品資訊
$('#objDataBtn').click(function(){
	$('#objData').animate({
		bottom : '+='+screen.height+'px',
		left : '+='+screen.width+'px',
		opacity : '0'
	}, 
	500,
	function(){
 		$('#objData').hide();
		$.cookie('gameStage', 6);
		$.cookie('story', '',{expires:-1});
		
		saveData();
		//血條出問題
	});
});