//	Animating the FAQ View
	$(document).ready(function(){
		  $("#answer1").hide();
		  $("#question1").click(function(){
			$("#answer1").toggle();
		});
		  $("#answer2").hide();
		  $("#question2").click(function(){
			$("#answer2").toggle();
		});
		  $("#answer3").hide();
		  $("#question3").click(function(){
			$("#answer3").toggle();
		});
	});
	
//Animating the Presentation View.
$(document).ready(function(){
	$(".cameroondescription").show(3000);
});
$(document).ready(function(){
	$("#historydetails").hide();
	$("#history").click(function(){
			$("#historydetails").toggle();
	});
	$("#geographydetails").hide();
	$("#geography").click(function(){
			$("#geographydetails").toggle();
	});
	$("#languagesdetails").hide();
	$("#languages").click(function(){
			$("#languagesdetails").toggle();
	});
	$("#religiondetails").hide();
	$("#religion").click(function(){
			$("#religiondetails").toggle();
	});			
	$("#demographicsdetails").hide();		
	$("#demographics").click(function(){
			$("#demographicsdetails").toggle();
	});
	$("#culturedetails").hide();
	$("#culture").click(function(){
			$("#culturedetails").toggle();
	});
	$("#craftdetails").hide();
	$("#craft").click(function(){
			$("#craftdetails").toggle();
	});
});	

//Designing the navigation bar
/*
$(document).ready(function)(){
	var str = location.href.toLowerCase();
	$(".nav navbar-nav li a").each(function(){
		if(str.indexOf(this.href.toLowerCase()) > -1){
			$("li.active").removeClass("active");
			$(this).addClass("active");
		}
	});
});
*/
//Zooming and dezooming images.
/*
 $(document).ready(function(){
	 $('#imagenochange1').width(375);
	 $('#imagenochange1').height(250);
	 $('#imagenochange1').mouseover(function(){
		 $(this).css("cursor","pointer");
	 });
	 $('#imagenochange1').toggle(function(){
		 $(this).animate({width: "550px"},'slow');
	 }, 
	 function(){
		 $(this).animate({width: "375px"}, 'slow');
	 });
 });
*/
