<?php

	/*
	*
	* Script included in Simple VCard Template by Maribol Labs - www.mlabs.info
	*
	*/

	$sendTo = 'email@example.com';
	
	function email($email){
		if(preg_match("/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/",$email)){
			return true;
		}else{
			return false;
		}
	}
	
	if(email($_POST['email'])){
		$message = nl2br($_POST['message']).'<br /><small>Message sent from '.$_SERVER['HTTP_REFERER'].' on '.date('d-m-Y H:i:s').'</small>';
		
		$headers  = "MIME-Version: 1.0\r\n";
		$headers .= "Content-type: text/html; charset=iso-8859-1\r\n";
		$headers .= "From: ".$_POST['name']." <".$_POST['email'].">\r\n";
		
		$mail = @mail($sendTo, 'New message', $message, $headers);
		if($mail){
			echo 1;
		}else{
			echo 0;
		}
	}else{
		echo 'invalid';
	}

?>