$(function(){
	//alert("hello");
	$("#submit").click(function(){
		$("#output").html("Hello " + $("#input").val())
	})

	$("#test1").click(function(){
		$("#output1").text($("#paragraph2").text())
	})

	$("#test2").click(function(){
		$("#output2").text($("#paragraph2").html())
	})

	$("#part3 > p").addClass("green")
	$("div ~ p").addClass("yellow")
	$("#part3 > ul > li:first-child").addClass("red")

	
	$.getJSON("https://mysterious-beach-83937.herokuapp.com/coaches",
	function(data, status){
		//var coachData = JSON.stringify(data)
		console.log(data);
		//alert("Data: " + data[0]["name"] + "\nStatus: " + status);
		//$("#coach-json").text(JSON.stringify(data))
		

		$.each(data,function(index,value) {
			$("#coach-table").append("<tr><td>"
				+value.name
				+"</td><td>"
				+"<img src='"+value.picURL+"'>"+"</img>"
				+"</td><td>"
				+value.description
				+"</td></tr>")
			});
		});
	

	$("#newCoach").click(function(){
		$.ajax ({
			url: "https://mysterious-beach-83937.herokuapp.com/coaches",
			type: "POST",
			data: JSON.stringify({
				name:$("#coachName").val(),
				picURL:$("#coachPic").val(),
				description:$("#coachDesc").val(),
			}),
			dataType: "json",
			contentType: "application/json; charset=utf-8",
			success: function(data){
			console.log(data);
			alert('success');
			}
			})
		$("#coach-table").append("<tr><td>"
				+$("#coachName").val()
				+"</td><td>"
				+"<img src='"+$("#coachPic").val()+"'>"+"</img>"
				+"</td><td>"
				+$("#coachDesc").val()
				+"</td></tr>")
	})

});







