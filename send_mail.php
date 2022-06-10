<?php
if(isset($_POST['message'])){
    $to      = 'feelofraj@gmail.com';
    $subject = $_POST['subject']; 
    $message = $_POST['message']; 
    $headers = "From: ".$_POST['name']." <".$_POST['phone'].">\r\n"; $headers = "Reply-To: ".$_POST['phone']."\r\n"; 
    $headers = "Content-type: text/html; charset=iso-8859-1\r\n";
    'X-Mailer: PHP/' . phpversion();
    if(mail($to, $subject, $message, $headers)) echo json_encode(['success'=>true]); 
    else echo json_encode(['success'=>false]);
    exit;
 }
?>


