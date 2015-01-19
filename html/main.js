
$(document).ready(function(){ 
	console.log("hej");
	
	/**
	var errorMessages = [{
		"required":"This field is required"},
		{"required":"This field is required",
	}];
	
	errorMessages["required"]
	
	var json =$.parseJSON(errorMessages);


	$("#userName").blur(function(){
		
		
	});
	**/
	
	
	$.validator.addMethod("regexp", function(value, element, regx){
		return regx.test(value);
	}, "Invalid input");
	
	// eller skapa en för varje, med enga rules och messages. t ex
	// $("#fullName").validate({
	// rules:
	// message:
	//});
	$(".jsvalidationengine").validate({
		
		rules: {
			"fullName": {
				required: true,
				minlength: 2,
				maxlength: 30,
				regexp: /^[a-zA-Z Á-ÿ\'\- ]+$/
			},
			"password": {
				required: true
			},
			"email": {
				required: true,
				email: true,
				regexp: /[^@]+@[^@]+\.[a-zA-Z]{2,6}/
			},
			"age": {
				required: true,
				min: 15,
				max: 99
			},
			"date" : {
				required: true,
				date: true,
				min: 1950-01-01,
				max: 2020-31-12	
			},
			"week": {
				required: true
			},
			"time": {
				required: true
			},
			"dateAndTime": {
				required: true
			},
			"userName": {
				required: true,
				minlength: 2,
				maxlength: 10,
				regexp: /[a-zA-Z0-9]{1,10}/
			}
		},
		
		messages: {
			"fullName": {
				required: "You must enter your full name",
				minlength: "Must be at least 2 characters long",
				maxlength: "Can't be longer than 30 characters"
			},
			"password": {
				required: "You must enter a password"
			},
			"email": {
				required: "You must enter a email",
				email: "You must enter a valid email"
			},
			"age": {
				required: "You must choose your age",
				min: "Must be over 15 years old",
				max: "Must be under 99 years old"
					
			},
			"date": {
				required: "You must set a date",
				min: "Must be over 1950-01-01",
				max: "Must be under 2020-31-12"
			},
			"week": {
				required: "You must set a week",
				
			},
			"time": {
				required: "You must set a time",
				
			},
			"dateAndTime": {
				required: "You must set a date and time",
				
			},
			"userName": {
					required: "You must enter a user name",
					minlength: "Must be at least 1 characters long",
					maxlength: "Can't be longer than 10 characters"
			}
		},
		
		success: "Valid!",
		submitHandler: function(){alert("Submitted!")}
	});	
});
