$(document).ready(function() {
    $("#signInBtn").click(function() {
        $("#signUpBox").slideUp("fast");
        $("#signInBox").slideDown("slow");
    });
    $("#signUpBtn").click(function() {
        $("#signInBox").slideUp("fast");
        $("#signUpBox").slideDown("slow");
    });
});