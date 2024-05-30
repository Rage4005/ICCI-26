<?php
    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Get form data
        $name = $_POST['name'];
        $email = $_POST['email'];
        $phone = $_POST['phone'];
        $message = $_POST['message'];
        
        // Compose email message
        $to = '22bcaf29@kristujayanti.com';
        $subject = 'New Form Submission - From: ' . $email;
        $message_body = "\nMessage:\n$message \n\nName: $name\nEmail: $email\nPhone: $phone";
        $headers = 'From: ' . $email;

        // Send email
        if (mail($to, $subject, $message_body, $headers)) {
            // Email sent successfully
            echo "<script>alert('Thank you, your form has been submitted.'); window.location = 'index.html';</script>";
        } else {
            // Error sending email
            echo "<script>alert('Sorry, there was an error submitting your form. Please try again later.'); window.location = 'index.html';</script>";
        }
    }
?>
