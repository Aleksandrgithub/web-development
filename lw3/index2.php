<?php	
	$_GET;
	function getGETParametr(string $text):?string
	{
		return isset($_GET[$text]) ? (string)$_GET[$text] : null;
	}

	header("Content-Type: text/plain");
	$text = getGETParametr('text');
	if (($text == null) || ($text[0] === '1') || ($text[0] === '2') || ($text[0] === '3') || ($text[0] === '4') || ($text[0] == '5') || ($text[0] === '6') || ($text[0] === '7') || ($text[0] === '8') || ($text[0] === '9')) 
	{
		echo 'false';
	}
	else
    {
    	echo 'true';
    }
    //echo $text;
    //echo $text = preg_replace('/\s\s+/', ' ', $text);