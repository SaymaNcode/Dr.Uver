<?php
    $name = $_POST["meno"];
    $subject = $_POST["subject"];

    $mailheader = "From:".$name."<simonlauko02@gmail.com>\r\n";

    $recipient = "simonlauko02@gmail.com";

    $predmet = "Dr.Úver test";

    mail($recipient, $predmet, $subject, $mailheader)
    or die ("Error!");




?>