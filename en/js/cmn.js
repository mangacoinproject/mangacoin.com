var ctxpc = document.getElementById("myChartpc").getContext('2d');
ctxpc.canvas.height = 120;
var myChartpc = new Chart(ctxpc, {
  type: 'pie',
  data: {
    labels: ["20% First trade",
			 "20% Marketing",
			 "20% Development",
			 "10% Operating",
			 "30% Mining"],
    datasets: [{
      backgroundColor: [
        "#e54a51",
        "#44b46e",
        "#ecbf22",
        "#4462b4",
		"#a560d5"
      ],
      data: [20, 20, 20, 10, 30]
    }]
  },
	options: {
         legend: {position: 'right' },
		 responsive: true,
		 maintainAspectRatio: false,
  }
});

var ctxsp = document.getElementById("myChartsp").getContext('2d');	
var myChartsp = new Chart(ctxsp, {
  type: 'pie',
  data: {
    labels: ["20% First trade",
			 "20% Marketing",
			 "20% Development",
			 "10% Operating",
			 "30% Mining"],
    datasets: [{
      backgroundColor: [
        "#e54a51",
        "#44b46e",
        "#ecbf22",
        "#4462b4",
		"#a560d5"
      ],
      data: [20, 20, 20, 10, 30]
    }]
  },
	options: {
		 responsive: true,
		 maintainAspectRatio: false,
  }
});				












$(function(){
	$('a[href^="#"]').click(function(){
		var speed = 500;
		var href= $(this).attr("href");
		var target = $(href == "#" || href == "" ? 'html' : href);
		var position = target.offset().top-70;
		$("html, body").animate({scrollTop:position}, speed, "swing");
		return false;
	});
	
	$("header div.menubtn").click(function(){
		$(this).children("i").toggleClass("fa-times");
		$("header nav.gnav").toggleClass("btnview");
	});
	
	$("header nav.gnav ul li a").click(function(){
		$("header div.menubtn").children("i").toggleClass("fa-times");
		$("header nav.gnav").toggleClass("btnview");
	});
	
//var lightbox = lity('#popup');
//$(document).ready('[data-lightbox]', lity);
	
	$("nav.language").click(function(){
	$("nav.language ul").toggleClass("btnview");
});
	
});

