// JavaScript Document

$(document).ready(function(){
	
	//Detect if iOS WebApp Engaged and permit navigation without deploying Safari
	(function(a,b,c){if(c in b&&b[c]){var d,e=a.location,f=/^(a|html)$/i;a.addEventListener("click",function(a){d=a.target;while(!f.test(d.nodeName))d=d.parentNode;"href"in d&&(d.href.indexOf("http")||~d.href.indexOf(e.host))&&(a.preventDefault(),e.href=d.href)},!1)}})(document,window.navigator,"standalone")
	
	var owl = $(".slider-controls");
	owl.owlCarousel({
		//Basic Stuff
		singleItem:true,
		slideSpeed : 250,
		paginationSpeed : 250,
		rewindSpeed : 250,
		pagination:false,
		
		autoPlay : true,
	});
	
	// Custom Navigation Events
	$(".next-slider").click(function(){
	  owl.trigger('owl.next');
	  return false;
	});
	$(".prev-slider").click(function(){
	  owl.trigger('owl.prev');
	  return false;
	});

});
