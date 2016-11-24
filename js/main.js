jQuery(document).ready(function()
{
	
	//=-=-=-=-= 常用JQuery =-=-=-=-=-=
	
	//排除
	$("selector").not("要排除的");
	
	//取得子元素
	$("selector").children("");
	
	
	
	
    //簡易jQuery動畫
    $('#jqAnimaDemo').click(function(){
        $("#jqAnimaDemo")
		.animate({
            left:'+=100px',
        },
			300,
			"swing",
			function() //callback
			{

			})
		.animate(
		{
            left:'-=30px',
        },
			300,
			"swing",
			function() //callback
			{

			});
    });
	
	
	//動態修改內容
	$("#editContent").click(function(){
		
		//改or取得HTML內容
		$("#editContent").html("改好了");

		//改or取得CSS
		$("#editContent").css("color","rgba(103, 178, 0, 0.92)");
		
		//增加Class
//		$("#editContent").addClass("");
		
		//移除Class
//		$("#editContent").removeClass("");
		
		//增加or改or取得HTML屬性
//		$("#editContent").attr("style","");
		
		//移除HTML屬性
//		$("#editContent").removeAttr("class");
		
		//增加內部內容(加在後面)
//		$("#editContent").append("<div>text</div>");
		
		//增加內部內容(加在前面)
//		$("#editContent").prepend("<div>text</div>");
		
		//增加同層內容(加在後面)
//		$("#editContent").after("<div>text</div>");
		
		//增加同層內容(加在前面)
//		$("#editContent").before("<div>text</div>");
		
		//刪除元素
//		$("#editContent").remove("可有選擇器");
		
		//刪除元素，但保留資料，方便之後復原
//		$("#editContent").detach("可有選擇器");
		
		//刪除子元素
//		$("#editContent").empty("可有選擇器");
		
		//刪除外層元素
//		$("#editContent").unwrap("可有選擇器");
	});
});