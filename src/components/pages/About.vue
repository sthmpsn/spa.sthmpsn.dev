<template>
    <div class="row my-4">
        <div class="col text-center">
            <h1 class="heading">About Me</h1>
        </div>
    </div>
    <div class="row mt-5">
        <div class="col text-center">
            <h2 class="fw-bold mb-5">
                <span class="">Web Developer</span>
                <div>&amp;</div>
                <span class="">Experienced IT Professional</span>
            </h2>
            <div class="row my-5">
                <p class="col-lg-7 mx-auto fs-5 text-justify">
                    I'm a Full Stack Web Developer who enjoys taking ideas and
                    turning them into reality. My curiosity for how things work
                    combined with my experience as an IT Professional that 
                    specialized in rapidly deploying and integration SDLC applications
                    has allowed me to rapidly understand new concepts and apply them.
                </p>
            </div>
            <aside>
                <h2 class="sr-only">View Steve's Resume</h2>
                <a
                    class="btn btn-lg btn-outline-primary shadow"
                    href="./assets/static/docs/SteveThompson-resume.pdf"
                    target="_blank"
                    >View Resume</a
                >
            </aside>
        </div>
    </div>
</template>

<script>
export default {
    name: "about",
};
</script>