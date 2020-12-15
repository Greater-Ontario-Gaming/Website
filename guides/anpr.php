<?php
$title = "ANPR";
include '../Includes/header_sub.php';
?>

<div class="subsplash subsplash-guides">
    <div class="header">
        <div class="container-lg">
            <div class="row">
                <div class="col">
                    <h1>Guide: ANPR</h1>
                    <p>This guide will help you use the ANPR</p>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="row subpage bg-white">
    <div class="col">
        <div class="container-lg">
            <div class="row">
                <div class="col">
                    <p>
                    Welcome to the simple guide of ANPR. The province has installed cams all over the city to help deter the levels of crime in the city! 
<br>
<br>
All police cars are equipped with this tech!  Cams have a 10-30% of not reading your plate as some cams may have failed or a car is blocking the view of your plate!   Below is a list of commands 
<br>
<br>
<h3>Police Commands</h3>
<br>
 <b>/anpr</b> - Toggles the ANPR interface if you are in a specified vehicle with equipped ANPR
 <br>
 <br>
 <b>/fixedanpr</b> - Toggles ANPR alerts from fixed ANPR cameras on the map. (Allows your cars system to access the cams to track plates) 
<br>
<br>
<b>/readplate </b>- Reads the plate of the vehicle in front of you and puts it in chat.
<br>
<br>
<b>/checkplate PLATE</b> - Returns the ANPR markers currently active for the specified plate.
<br>
<br>
<b>/focusanpr PLATE </b>- Only displays fixed ANPR alerts for the specified PLATE and automatically draws a route if any hit comes in. Leave PLATE blank to unfocus.
 <br>
 <br>
 <b>/setplateinfo PLATE;INFO </b>- Adds ANPR markers (INFO) for the specified plate. Leave INFO blank to remove markers. Example: /setplateinfo AB12CDE;STOLEN
<br>
<br>
<b>/anprinterface</b> - Toggles the ANPR interface.
<br>
<br>
<h3>CIV Commands</h3>
<br>

<b>/setvehinfo INFO</b> - Adds ANPR markers (INFO) for the plate of the vehicle you're currently in. Leave INFO blank to remove markers. Example: /setvehinfo STOLEN

 
                    </ol>
                   
                </div>
            </div>
        </div>
    </div>
</div>

<?php include '../Includes/footer.php'; ?>