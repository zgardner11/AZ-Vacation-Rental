<?php 

    $message_sent = false;                                           // Assume message sent condition is false unless the if statement runs
    if(isset($_POST['email']) && $_POST['email'] != ''){             // first step: check to see if the form was actually filled out
                                                                    
        if(filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)){      // check to see if the information was correct

            echo 'Thank you for your submission! I will respond to your inquiry within 24 hours.';

            //user input variables contained in form

            $userName = $_POST['name'];
            $userEmail = $_POST['email'];
            $subject = $_POST['subject'];
            $message = $_POST['message'];

            //actions to send their message to email

            $to = 'cottonwoodvacationrental@gmail.com'; 
            $body = "";

            $body .= "From: " .$userName. ".\r\n";
            $body .= "Email: " .$userEmail. ".\r\n";
            $body .= "Message: " .$message. ".\r\n";

            //add error handling here

            //call mail function with user input as parameters

            mail($to, $subject, $body);

            // header("Location:contact.php?mailsend");
        }
    }
?>