<?php

include('../config.php');
    
if (filter_input(INPUT_SERVER, 'REQUEST_METHOD') === 'POST') {

        // Validate reCAPTCHA box 
        if(isset($_POST['g-recaptcha-response']) && !empty($_POST['g-recaptcha-response'])){ 
                         
            // Verify the reCAPTCHA response 
            $verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secretKey.'&response='.$_POST['g-recaptcha-response']); 
             
            // Decode json data 
            $responseData = json_decode($verifyResponse); 
             
            // If reCAPTCHA response is valid 
            if($responseData->success){ 
                // Posted form data 
                $sendTo = 'Manjaro Support <support@manjaro.org>';
            $subject = '[Manjaro] Support Request';
            $fields = array('name' => 'Name', 'subject' => 'Subject', 'email' => 'Email', 'message' => 'Message'); 
            $success_message = 'Message successfully submitted. Thank you, we will get back to you soon!';

            function test_input($key, $data) {
                if(empty($data)):
                    throw new Exception($key + ' is empty');
                endif;
                $data = trim($data);
                $data = stripslashes($data);
                $data = htmlspecialchars($data);
                return $data;
            }

            // if you are not debugging and don't need error reporting, turn this off by error_reporting(0);
            error_reporting(E_ALL & ~E_NOTICE);

            try {

                if(count($_POST) == 0) throw new \Exception('Form is empty');
                        
                $emailText = "From: manjaro.org\n=============================================\n";

                foreach ($_POST as $key => $value) {
                    try {
                       $value = test_input($key, $value);
                    } catch  (Exception $err) {
                       $error_message = $err->getMessage();
                    }
                    // If the field exists in the $fields array, include it in the email 
                    if (isset($fields[$key])) {
                        $emailText .= "$fields[$key]: $value\n";
                        if ( $fields[$key] == "Email" ) {
                            $fromEmail = $value;
                            if (!filter_var($fromEmail, FILTER_VALIDATE_EMAIL)) {
                                $error_message = "Invalid email format"; 
                                $responseArray = array('type' => 'error', 'message' => $error_message);
                            }
                        }
                        if ( $fields[$key] == "Name" ) {
                            $fromName = $value;
                            if (!preg_match("/^[a-zA-Z ]*$/",$fromName)) {
                                $error_message = "Only letters and white space allowed in name field"; 
                                $responseArray = array('type' => 'error', 'message' => $error_message);
                            }
                        }
                    }

                    // an email address that will be in the From field of the email.
                    $from = "$fromName <$fromEmail>";
                }

                // All the neccessary headers for the email.
                $headers = array('Content-Type: text/plain; charset="UTF-8";',
                    'From: ' . $from,
                    'Reply-To: ' . $from,
                    'Return-Path: ' . $from,
                );
                
                if(empty($error_message)){
                    mail($sendTo, $subject, $emailText, implode("\n", $headers));
                    $responseArray = array('type' => 'success', 'message' => $success_message);

                } else {
                    $responseArray = array('type' => 'error', 'message' => $error_message);
                }

            } catch (\Exception $e) {
                $responseArray = array('type' => 'error', 'message' => "Something went wrong. Please try again later");
            }
            }else{ 
                $responseArray = array('type' => 'error', 'message' => "Robot verification failed, please try again.");
            } 
        }else{ 
            $responseArray = array('type' => 'error', 'message' => "Please check on the reCAPTCHA box.");
        } 
        $encoded = json_encode($responseArray);
        header('Content-Type: application/json');
        echo $encoded;

} else {
    header("HTTP/1.0 404 Not Found");
}
die();


