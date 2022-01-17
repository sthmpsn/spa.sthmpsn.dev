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
            <div id="skill-legend" class="row">
                <div class="col advance text-center">
                    <div class="title">Advance</div>
                    <span class="icon">A</span>
                </div>
                <div class="col intermediate text-center">
                    <div class="title">Intermediate</div>
                    <span class="icon">I</span>
                </div>
                <div class="col proficient text-center">
                    <div class="title">Proficient</div>
                    <span class="icon">P</span>
                </div>
            </div>

            <!-- LEFT OFF HERE -->
            <!-- <div id="skill-list" class="row row-cols-4 g-3">
                <div class="col" v-for="skill in skills" :key="skill.name">
                    <div class="row text-center">
                        <div class="col-8 title px-3">{{ skill.name}}</div>
                        <div
                            class="col-4 icon px-3"
                            :class="skill.level == 'A' ? 'advance'
                                                        : skill.level == 'I' ? 'intermediate' : 'proficient'"
                        >
                            <span class="icon">{{ skill.level}}</span>
                        </div>
                    </div>
                </div>
            </div> -->
            <!-- <div class="container"> -->
            <div id="skill-list" class="row my-4">
                <div
                    class="col"
                    :class="
                        skill.level == 'A'
                            ? 'advance'
                            : skill.level == 'I'
                            ? 'intermediate'
                            : 'proficient'
                    "
                    v-for="skill in skills"
                    :key="skill.name"
                >
                    <div class="card mb-3 p-4 mx-auto" style="width: 300px">
                        <div class="row g-0">
                            <div class="col-md-8 title text-center">
                                {{ skill.name }}
                            </div>
                            <div class="col-md-4 text-center my-auto">
                                <div class="card-body icon p-0">
                                    {{ skill.level }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- </div> -->
        </div>

        <!-- Turn into component -->
        <div id="education" class="row my-4 p-4">
            <h3>Certs and Degrees</h3>
            <div class="row justify-content-around">
                <div
                    class="
                        certs
                        d-flex
                        align-items-center
                        justify-content-center
                    "
                    data-bs-toggle="tooltip"
                    title="Master of Business Administration"
                >
                    <div class="mba-wrapper position-relative">
                        <i class="mba-icon bi bi-mortarboard-fill"></i>
                        <abbr class="mba-text">MBA</abbr>
                        <span class="mba-sub-text d-block small"
                            >Info Technology</span
                        >
                    </div>
                </div>
                <div
                    class="certs"
                    data-bs-toggle="tooltip"
                    title="University of Minnesota Full Stack Bootcamp"
                >
                    <img
                        :src="
                            require(`../../assets/images/certs/uOfM-Fullstack.png`)
                        "
                        alt="University of Minnesota Full Stack Bootcamp certificate"
                    />
                </div>
                <div
                    class="certs d-flex align-items-center"
                    data-bs-toggle="tooltip"
                    title="Comptia Security +"
                >
                    <img
                        :src="
                            require(`../../assets/images/certs/Security+_CE.jpg`)
                        "
                        alt="Security Plus Cert"
                    />
                </div>
                <div
                    class="certs d-flex align-items-center"
                    data-bs-toggle="tooltip"
                    title="Comptia Network +"
                >
                    <img
                        :src="
                            require(`../../assets/images/certs/Network+_CE.jpg`)
                        "
                        alt="Network Plus Cert"
                    />
                </div>
                <div
                    class="certs d-flex align-items-center"
                    data-bs-toggle="tooltip"
                    title="Information Technology Infrastructure Library - Foundations version 3"
                >
                    <img
                        :src="require(`../../assets/images/certs/ITIL-v3.jpg`)"
                        alt="ITIL Cert"
                    />
                </div>
            </div>
        </div>
    </section>
    <!-- END of SKILLS Section -->
</template>

<script>
import skills from "@/assets/data/skills.json";
import { Tooltip } from "bootstrap"; //Bootstrap Tooltips

export default {
    name: "skills",
    data() {
        return {
            skills,
        };
    },
    mounted() {
        // Enable for all tooltips in this component
        [...document.querySelectorAll('[data-bs-toggle="tooltip"]')]
            .forEach(el => new Tooltip(el))


    },
};
</script>

<style lang="scss" scoped>
    @import "../../sass/pages/skills";
</style>