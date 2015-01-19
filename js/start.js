jQuery(document).ready(function($) {
	$('.bootstrap-timepicker input').timepicker({
		minuteStep: 15,
		showSeconds: false,
		showMeridian: false
	});

	$('.bootstrap-datepicker input').datepicker();
}); 
