<template>
    <section id="sec-skills" class="row">
        <!-- START Heading -->
        <div class="row my-4">
            <div class="col text-center">
                <h1 class="heading shadow">Skills</h1>
            </div>
        </div>
        <!-- END Heading -->
        <!-- START Skills Showcase -->
        <!-- <div id="skills-showcase">
            <div class="skills-orbit-path skills-orbit-path--rotate">
                <div
                    class="
                        skills-orbit-path__sql skills-orbit-path--rotate-skills
                    "
                ></div>
                <div
                    class="
                        skills-orbit-path__bootstrap
                        skills-orbit-path--rotate-skills
                    "
                ></div>
                <div
                    class="
                        skills-orbit-path__javascript
                        skills-orbit-path--rotate-skills
                    "
                ></div>
                <div
                    class="
                        skills-orbit-path__jquery
                        skills-orbit-path--rotate-skills
                    "
                ></div>
                <div
                    class="
                        skills-orbit-path__reactjs
                        skills-orbit-path--rotate-skills
                    "
                ></div>
                <div
                    class="
                        skills-orbit-path__atlassian
                        skills-orbit-path--rotate-skills
                    "
                ></div>
                <div
                    class="
                        skills-orbit-path__sass skills-orbit-path--rotate-skills
                    "
                ></div>
                <div
                    class="
                        skills-orbit-path__mongodb
                        skills-orbit-path--rotate-skills
                    "
                ></div>
                <div
                    class="
                        skills-orbit-path__git skills-orbit-path--rotate-skills
                    "
                ></div>
                <div
                    class="
                        skills-orbit-path__css3 skills-orbit-path--rotate-skills
                    "
                ></div>
                <div
                    class="
                        skills-orbit-path__nodejs
                        skills-orbit-path--rotate-skills
                    "
                ></div>
                <div
                    class="
                        skills-orbit-path__php skills-orbit-path--rotate-skills
                    "
                ></div>
            </div>
            <div class="skills-showcase__html5"></div>
            <div class="skills-showcase__skill-names">
                <span class="skills-showcase__skill-names--scroll"></span>
            </div>
        </div> -->
        <!-- END Skills Showcase -->
        
        <!-- START Skills Chart-->
        <div id="skills-chart" class="row my-4">
            <div class="row">
                <div class="col skill-legend">
                    <div class="row">
                        <div class="col legend-advance text-center">
                            <div class="legend-title">Advance</div>
                            <span class="legend-icon">A</span>
                        </div>
                        <div class="col legend-intermediate text-center">
                            <div class="legend-title">Intermediate</div>
                            <span class="legend-icon">I</span>
                        </div>
                        <div class="col legend-proficient text-center">
                            <div class="legend-title">Proficient</div>
                            <span class="legend-icon">P</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- LEFT OFF HERE -->
            <div class="row">
                <div class="col">
                    <!-- Place skill in json file - make component after styling looks correct -->
                </div>
            </div>
        </div>

        





        <!-- Turn into component -->
        <div id="education" class="row my-4 p-4">
            <h3>Certs and Degrees</h3>
            <div class="row justify-content-around">
                <div class="certs">
                    <img
                        :src="require(`../../assets/images/certs/Security+_CE.jpg`)"
                        alt="Security Plus Cert"
                    />
                </div>
                <div class="certs">
                    <img
                        :src="require(`../../assets/images/certs/Network+_CE.jpg`)"
                        alt="Network Plus Cert"
                    />
                </div>
                <div class="certs">
                    <img
                        :src="require(`../../assets/images/certs/ITIL-v3.jpg`)"
                        alt="ITIL Cert"
                        title="Information Technology Infrastructure Library - Foundations version 3"
                    />
                </div>
                <div class="certs d-flex align-items-center justify-content-center">
                    <div class="mba-wrapper position-relative">
                        <i class="mba-icon bi bi-mortarboard-fill"></i>
                        <abbr
                            class="mba-text"
                            title="Master of Business Administration"
                            >MBA</abbr
                        >
                        <span class="mba-sub-text d-block small">Info Technology</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- END of SKILLS Section -->
</template>

<script>
export default {
    name: "skills",
};
</script>

<style lang="scss" scoped>
    @import '../../sass/pages/skills';
</style>