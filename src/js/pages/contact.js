console.log("Contact.js has loaded");

// Start - On Document Load
document.addEventListener("DOMContentLoaded", function(event) { 

    // VARIABLES

    // Reset Form Button Element
    const btnResetFrm = document.getElementById("btn-reset-form");


    // BEHAVIORS

    // Reset Form Button - Clear Form
    btnResetFrm.addEventListener("click",() => {
        document.getElementById("frm-contact").reset();
    });






});
// End - On Document Loaded


