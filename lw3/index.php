<?php
	$_GET;
	function getGETParametr(string $text):?string
	{
		return isset($_GET[$text]) ? (string)$_GET[$text] : null;
	}

	header("Content-Type: text/plain");
	$text = getGETParametr('text'); 
    echo preg_replace('/^([ ]+)|([ ]){2,}/m', '$2', $text);
    //echo $text = preg_replace('/\s\s+/', ' ', $text);