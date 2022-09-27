<?php 

// first step: check to see if the form was actually filled out correctly and fully

if (isset($_POST['submit'])) {

    echo "Thank you for your inquiry. I will get in touch with you as soon as I can. Have a beautiful day!";

    //user input variables contained in form
    
    $userName = $_POST['name'];
    $userEmail = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    //actions to send their message to my email

    $mailTo = 'zg@movingeyemedia.com'; 
    $headers = 'From: '.$userEmail;
    $txt = "You have received an e-mail from ".$name.".\n\n".$message;

    //add error handling here

    //call mail function with user input as parameters

    mail($mailTo, $subject, $txt, $headers);
    header("Location: contact.php?mailsend");

    mail($userEmail,$subject,$message);
}

?>