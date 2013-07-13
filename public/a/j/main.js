$(document).ready(function() {
	$('#map-frame').attr('width', $(window).width());
	$('#map-frame').attr('height', $('#map-frame').width()/3);

	$('#sm_e_s').attr('width', $('.container').width());
});

$(window).resize(function(){
	$('#map-frame').attr('width', $(window).width());
	$('#map-frame').attr('height', $('#map-frame').width()/3);	
	$('#sm_e_s').attr('width', $('.container').width());

});