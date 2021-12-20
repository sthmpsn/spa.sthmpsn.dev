<template>
    <div class="row my-4">
        <div class="col text-center">
            <h1 class="heading">Portfolio</h1>
        </div>
    </div>
    <div class="row row-cols-1 row-cols-xxl-2 g-4">
        <div class="col" v-for="project in projects" :key="project.name">
            <div class="card mx-auto shadow mb-3">
                <div class="row g-0 h-100">
                    <div class="col-sm-5">
                        <img :src="require(`../../assets/images/projects/${project.img_url}`)" class="img-fluid rounded-start h-100" :alt="project.title + ' image'">
                    </div>
                    <div class="d-none d-sm-block col-sm-7">
                        <div class="card-body h-100 d-flex flex-column justify-content-between">
                            <div class="row">
                                <div class="col">
                                    <h5 class="card-title">{{ project.title }}</h5>
                                    <div class="card-subtitle mb-2 text-muted small">{{ project.subtitle }}</div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col card-text">
                                    {{ project.desc }}
                                </div>
                            </div>
                            <div class="row">
                                <div class="col card-text small d-flex flex-wrap align-items-center">
                                    <span class="small fw-bold">Tags</span><span class="d-inline-block m-1 badge rounded-pill bg-secondary fw-light" v-for="skill in project.skills" :key="project.name + '-' + skill">
                                        {{ skill }}
                                    </span>
                                </div>
                            </div>
                            <!-- TODO: Create animation that flips the card and makes these buttons accessible on the other side -->
                            <div class="row">
                                <div class="col d-flex justify-content-center">
                                    <a :href="project.repo_url" class="card-link btn btn-outline-primary" target="_blank">Github Repo</a>
                                    <a :href="project.app_url" class="card-link btn btn-outline-primary" target="_blank">Go to App</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import projects from '@/assets/data/portfolio.json';



export default {
    name: "portfolio",
    data() {
        return {
            projects
        };
    },
};
</script>

<style lang="scss" scoped>
    @import '../../sass/pages/portfolio';

</style>