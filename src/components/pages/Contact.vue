<template>
    <!-- START Heading -->
    <div class="row my-4">
        <div class="col text-center">
            <h1 class="heading shadow">Contact Me</h1>
        </div>
    </div>
    <!-- END Heading -->
    <!-- START Contact Me Form -->
    <div class="row">
        <form
            id="frm-contact"
            class="col-lg-8 col-xl-6 mx-auto p-4 border rounded text-white"
            action="https://formspree.io/xdozgnnw"
            method="POST"
        >
            <div class="mb-3">
                <label for="frmInputName" class="form-label">Name</label>
                <input
                    type="text"
                    class="form-control"
                    id="frmInputName"
                    required
                />
                <div id="frmInputNameError"></div>
            </div>
            <div class="mb-3">
                <label for="frmInputEmail" class="form-label"
                    >Email address</label
                >
                <input
                    type="email"
                    class="form-control"
                    id="frmInputEmail"
                    name="frmInputEmail"
                    required
                />
                <div id="frmInputEmailError"></div>
            </div>
            <div class="mb-3">
                <label for="frmTxtAreaMsg" class="form-label"
                    >Your Message</label
                >
                <textarea
                    type="email"
                    class="form-control"
                    id="frmTxtAreaMsg"
                    name="frmTxtAreaMsg"
                    required
                ></textarea>
                <div id="frmTxtAreaMsgError"></div>
            </div>
            <div class="text-center">
                <button id="btn-reset-form" type="button" class="btn btn-outline-warning px-4 mx-2" data-bs-toggle="tooltip" title="Reset Form">
                    Reset
                </button>
                <button type="submit" class="btn btn-outline-warning px-4 mx-2">
                    Send
                </button>
            </div>
        </form>
    </div>
    <!-- END Contact Me Form -->
    
    <!-- START Social Media -->
    <div class="row my-4">
        <div class="col-md-8 col-lg-6 mx-auto p-4 d-flex align-items-center justify-content-around">
            <a href="https://github.com/sthmpsn" target="_blank">
                <div class="github-container">
                    <i class="social-icon github bi bi-github"></i>
                </div>
            </a>
            <a href="https://www.linkedin.com/in/steven-thompson-10a5071b" target="_blank">
                <div class="linkedin-container">
                    <i class="social-icon linkedin bi bi-linkedin"></i>
                </div>
            </a>
            <a href="https://twitter.com/StevenT35878867" target="_blank">
                <div class="twitter-container">
                    <i class="social-icon twitter bi bi-twitter"></i>
                    <!-- <i class="social-icon twitter twitter-icon-fly-in bi bi-twitter"></i> -->
                </div>
            </a>
            <a href="https://www.facebook.com/steve.thompson.5055" target="_blank">
                <div class="facebook-container">
                    <i class="social-icon facebook bi bi-facebook"></i>
                    <!-- <i class="social-icon facebook bi bi-hand-thumbs-up-fill"></i> -->
                </div>
            </a>
            
        </div>
    </div>
    <!-- END Social Media -->
</template>

<script>
import "@/js/pages/contact.js"
import { Tooltip } from "bootstrap"; //Bootstrap Tooltips


export default {
    name: "contact",

    mounted() {
        // Enable for all tooltips in this component
        [...document.querySelectorAll('[data-bs-toggle="tooltip"]')]
            .forEach(el => new Tooltip(el))

    },
};
</script>

<style lang="scss" scoped>
    @import "../../sass/pages/contact";
</style>