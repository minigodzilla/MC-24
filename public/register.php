<?php

header('Access-Control-Allow-Origin: *');

$data = $_POST;
$data["IPAddress"] = $_SERVER["REMOTE_ADDR"];
$data["SourceIP"] = $_SERVER['SERVER_ADDR'] ? $_SERVER['SERVER_ADDR'] : $_SERVER['LOCAL_ADDR'];
$serialize = array();
foreach ($data as $key=>$val) {
                if ($key == "o" || $key == "n") continue;
                if (!is_array($val)) $serialize[] = $key . "=". urlencode($val);
                else {
                                foreach ($val as $key2=>$val2) {
                                                $serialize[] = $key . "[]=". urlencode($val2);
                                }
                }
}

$url = "http://wms.tbf.email/registration.php";
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_POST      ,1);
curl_setopt($ch, CURLOPT_POSTFIELDS, implode("&", $serialize));
curl_setopt($ch, CURLOPT_FOLLOWLOCATION  ,1);
curl_setopt($ch, CURLOPT_HEADER      ,0);  // DO NOT RETURN HTTP HEADERS
curl_setopt($ch, CURLOPT_RETURNTRANSFER  ,1);  // RETURN THE CONTENTS OF THE CALL
 
$ret = json_decode(curl_exec($ch));



		$jsonLasso = array();
		$jsonLasso["clientId"] = '1454';
		$jsonLasso["project"] = array("projectId" => "14391", "name" =>"East Hills Crossing");
		$jsonLasso["person"] = array("firstName" => $_POST["FirstName"], "lastName" =>$_POST["LastName"]);
		$jsonLasso["emails"] = array(array("email"=>$_POST["Email"], "type"=>"Primary", "primary" => true));
		$jsonLasso["phones"] = array(array("phone"=>$_POST["Phone"], "type"=>"Primary", "primary" => true));
//			$jsonLasso["addresses"] = array(array("city"=>$_POST["City"], "state" => $_POST["Province"], "zipCode" => $_POST["PostalCode"], "type"=>"Work", "primary" => true));
//
//			$jsonLasso["questions"][] = array("questionId"=>241258, "type" => "text", "name" => "Secondary Source", "path"=>"Source", "answers" => array(array("answer" => "East Hills Crossing 2")));
//
		try {

			$location = 'https://api.lassocrm.com/v1/registrants';
			$apiKey = 'eyJhbGciOiJSUzI1NiJ9.eyJleHAiOjcyMjY1ODI0MDAsInRva2VuRGF0YSI6IntcbiAgXCJwcm9qZWN0SWRcIiA6IDE0MzkxLFxuICBcImNsaWVudElkXCIgOiAxNDU0LFxuICBcIm5hbWVcIiA6IFwibGFzc29SZWdpc3RyYXRpb25cIlxufSIsImlzcyI6Ikxhc3NvVG9rZW4iLCJhdWQiOiJMYXNzbyIsInRva2VuSWQiOjIyNDY4fQ.ItvfTbcmBzaBVTYZZAJ5Ge0W7dxs36949rk2KqvqRcap-ZJmtWsUPLg5OMUuep71TbnVEEtJFVwEWXakoKu1ZaS1efrfgh2GhgsU5pQ4O9oWO3BPxbJXtw_naA861bAxHa52OKL5uFXSabkw3-gEk5i0Rf7eCqckF64Mb6EtceBGpo-Q39q4lUjeE26A6f5hpxpZF1KVrO9CLsoYRMOXlqcoI9CqeXDjm5iwATEO9NIvb3TGHYQPT_2UcjrxoU7Hwcn4asQPI-RtS2pqBGIT_QACVhkGl0lOHeWDZLHWvxgElh7XzXlFPQTTpy3VKWffPOM6ZzPguK3kBQMj6P-Oig';
			$curl = curl_init();

			curl_setopt($curl, CURLOPT_POST, true);
			curl_setopt($curl, CURLOPT_HEADER, true);
			curl_setopt($curl, CURLOPT_URL, $location);
			curl_setopt($curl,CURLOPT_SSL_VERIFYPEER, false);
			curl_setopt($curl,CURLOPT_SSL_VERIFYHOST, false);
			curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($jsonLasso));
			curl_setopt($curl, CURLOPT_RETURNTRANSFER, 1);
			curl_setopt($curl, CURLOPT_HTTPHEADER, array(
			  'Content-Type: application/json',
			  'Authorization: Bearer '. $apiKey ,
			));
			$ret = curl_exec($curl);
		} catch(Exception $ex) {
			;
		}
/*



?>

<?php print_r($data) ?>