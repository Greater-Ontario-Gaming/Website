<?php

    $whmcsurl = "http://50.38.35.36:8880/billingapi.aspx";

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $whmcsurl);
    curl_setopt($ch, CURLOPT_TIMEOUT, 30);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    $data = curl_exec($ch);

	if (curl_error($ch)) {
		echo "Curl Error: ".curl_error($ch)."<br /><br />";
	} elseif (!$data) {
        echo "Empty Data Response - Please check CURL Installation<br /><br />";
    }

	curl_close($ch);
	
	echo "Connection Response (this should be a response from $whmcsurl when working correctly):<br /><br /><textarea rows=\"20\" cols=\"120\">$data</textarea>";

?>