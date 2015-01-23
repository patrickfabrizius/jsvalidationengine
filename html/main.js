
$(document).ready(function(){ 
	console.log("hej");
	
	/**
	 * var errorMessages = [{ "required":"This field is required"},
	 * {"required":"This field is required", }];
	 * 
	 * errorMessages["required"]
	 * 
	 * var json =$.parseJSON(errorMessages);
	 * 
	 * 
	 * $("#userName").blur(function(){
	 * 
	 * 
	 * });
	 */
	
	// en metod som testar regexp värdet
	$.validator.addMethod("regexp", function(value, element, regx){
		return regx.test(value);
	}, "Invalid input");
	
	$.validator.addMethod("minMaxDate", function(value, element){
	var minDate = new Date("1950/01/01");
	var maxDate = new Date("2020/12/31");
	var inputDate = new Date(value);
	if(inputDate < maxDate && inputDate > minDate)
		return true;
	return false;
	});

	$.validator.addMethod("passwordMatch", function(value, element){
	var password = $("#password").val();
	var repassword = $("#repassword").val();
	
	if(password != repassword){
	return false;	
	}else{
	return true;	
	}
	});	
	
		$.validator.addMethod("passwordLength", function(value, element){
		var minLength = 6;
		var maxLength = 40;
		var password = $("#password").val();
		if(password.length >= minLength && password.length <= maxLength){
			return true;
		}else{
		return false;	
		}
		
		});
		
	
	/**
	 * $.webshims.setOptions('forms', { overrideMessages: true,
	 * replaceValidationUI: true }); $.webshims.setOptions({ waitReady: false
	 * });
	 * 
	 * 
	 * $.webshims.validityMessages = { "messages":{ "defaultMessage": "Please
	 * enter a valid value", "email":"Please enter an emal address",
	 * "fullName":"Please enter your name", "password":"please enter a
	 * password", "age":"Please enter your age", "date":"please enter a date",
	 * "week":"Please enter current week", "dateAndTime":"Please enter date and
	 * time", "userName":"Please enter a username" }, };
	 * 
	 * eller skapa en för varje, med enga rules och messages. t ex
	 * $("#fullName").validate({ rules: message: });
	 */
	
	 // jQuerry validator plugin
	$("#jsvalidationengine").validate({
		
		// regler som sätts för varje input
		rules: {
			"fullName": {
				required: true,
				minlength: 2,
				maxlength: 30,
				regexp: /^[a-zA-Z Á-ÿ\'\- ]+$/
			},
			"password": {
				required: true,
				passwordLength: true
			},
			"repassword": {
				required: true,
				passwordMatch: true
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
				minMaxDate: true,
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
				minlength: 4,
				maxlength: 10,
				regexp: /[a-zA-Z0-9]{1,10}/
			}
		},
		
		highlight: function(element){
			$(element).closest('.form-group').addClass('has-error');
		},
		unhighlight: function(element){
			$(element).closest('.form-group').removeClass('has-error');
		},
		errorClass: 'help-block',
		errorPlacement: function(error, element){
			if(element.parent('.input-group').length){
			error.insertAfter(element.parent());	
			}else{
			error.insertAfter(element);	
			}

		},
		
//		errorPlacement: function(error, element){
//			if($(element).attr("name")=="gender"){
//				$($(element).parent)
//			}
//			
//		}

	
		// meddelanden för varje input regel
		messages: {
			"fullName": {
				required: "You must enter your full name",
				minlength: "Must be at least 2 characters long",
				maxlength: "Can't be longer than 30 characters"
			},
			"password": {
				required: "You must enter a password",
				passwordLength: "Your password can't be shorter than 6 or longer than 40"
			},
			
			"repassword": {
				required: "You must re-enter your password",
				passwordMatch: "Your Passwords Must Match"
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
				minMaxDate: "Date must be between 01-01-1950 and 31-12-2020"
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
					minlength: "Must be at least 4 characters long",
					maxlength: "Can't be longer than 10 characters"
			}
			
		},
		
		// ska testas senare, för submitknapp
		success: "Valid!",
		submitHandler: function(){alert("Submitted!")}
	});	
	
	$.webshims.polyfill('forms');
});


