console.log("contact.js has loaded");


function init(){
    // Reset Form Button Element
    const btnResetFrm = document.getElementById("btn-reset-form");


    // BEHAVIORS

    // Reset Form Button - Clear Form
    btnResetFrm.addEventListener("click",() => {
        document.getElementById("frm-contact").reset();
    });

}


export {init};