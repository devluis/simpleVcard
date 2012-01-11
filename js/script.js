var required_message = '<div class="error">All fields are required.</div>';
var error_message = '<div class="error">An error has occured. Please try again later.</div>';
var invalid_message = '<div class="error">Invalid email address.</div>';
var success_message = '<div class="success">Message Sent Successfully</div>';

$(document).ready(function() {
	$("#showtweets").getTwitter({
		userName: "mlabsinfo",
		numTweets: 1,
		loaderText: "<img src='images/loader.gif' class='left'> Loading tweets...",
		slideIn: true,
		slideDuration: 750,
		showHeading: true,
		headingText: "Latest Tweets",
		showProfileLink: true,
		showTimestamp: true
	});
});
function sendMessage(){
	doShow('contact');
	$('#response').html("<div><img src='images/loader.gif' class='left'> Loading...<div class='cb'></div></div>");
				
	var name = $('#contact_name').val();
	var email = $('#contact_email').val();
	var message = $('#contact_message').val();
	if(name == '' || email == '' || message == ''){
		$('#response').html(required_message);
	}else{
		$.post('contact.php', {name:name, email:email, message:message}, function(data) {
			if(data == 1){
				$('#response').html(success_message);
				$('#contact_name').val('');
				$('#contact_email').val('');
				$('#contact_message').val('');
			}else if(data == '0'){
				$('#response').html(error_message);
			}else if(data == 'invalid'){
				$('#response').html(invalid_message);
			}
		});
	}
}
function doShow(id){
	$('.page').addClass('hidden');
	$('#tab_'+id).removeClass('hidden');
	
	$('#menu li').removeClass('active');
	$('#link_'+id).addClass('active');
}