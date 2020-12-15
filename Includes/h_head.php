<?php
    include "vars.php";
?>

<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="subject" content="Greater Toronto Roleplay" />
    <meta name="description" content="Greater Toronto Roleplay is a GTA V/FiveM roleplay community for the Toronto Police Service, the Ontario Provincial Police, and other GTA emergency services providers." />
    <title><?php
                if(isset($title)) {
                    echo $title . " - ";
                }
           ?>Greater Toronto Roleplay</title>

    <!-- OpenGraph -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="Greater Toronto Roleplay">
    <meta property="og:site_name" content="Greater Toronto Roleplay">
    <meta property="og:url" content="<?php echo $website_url; ?>">
    <meta property="og:description" content="Greater Toronto Roleplay is a GTA V/FiveM roleplay community for the Toronto Police Service, the Ontario Provincial Police, and other GTA emergency services providers.">
    <meta property="og:image" content="<?php echo $website_url; ?>Images/og-image.jpg">
    <meta property="og:image:width" content="1900">
    <meta property="og:image:height" content="1000">
    <meta property="og:image:type" content="image/jpeg" />
    <meta property="og:locale" content="en_US">

    <!-- Twitter -->
    <meta name="twitter:title" content="Greater Toronto Roleplay">
    <meta name="twitter:site" content="@GTRPOperations">
    <meta name="twitter:url" content="<?php echo $website_url; ?>">
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:description" content="Greater Toronto Roleplay is a GTA V/FiveM roleplay community for the Toronto Police Service, the Ontario Provincial Police, and other GTA emergency services providers.">
    <meta name="twitter:image" content="<?php echo $website_url; ?>/Images/og-image.jpg">

    <link href="https://use.fontawesome.com/releases/v5.11.0/css/all.css" rel="stylesheet" type="text/css">
    <link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet">
    <link href="/Styles/jquery.fancybox.min.css" rel="stylesheet" type="text/css" />
    <link href="/Styles/gtrp.min.css" rel="stylesheet" type="text/css">
</head>