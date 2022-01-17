<template>
    <div class="row my-4">
        <div class="col text-center">
            <h1 class="heading">Portfolio</h1>
        </div>
    </div>
    <div class="row row-cols-1 row-cols-xxl-2 g-4">
        <div class="col" v-for="project in projects" :key="project.name">
            <div class="project-wrapper mx-auto rounded">
                <img :src="require(`../../assets/images/projects/${project.img_url}`)" class="h-100" :alt="project.title + ' image'">
                <div class="caption">
                    <h2 class="card-title">{{ project.title }}</h2>
                    <div class="project-subtitle mb-2 text-muted h4">{{ project.subtitle }}</div>
                    <div class="project-desc mb-2 text-muted small text-center">{{ project.desc }}</div>
                    <div class="my-3 small d-flex flex-wrap align-items-center">
                        <span class="small fw-bold">Tags</span><span class="d-inline-block m-1 badge rounded-pill bg-secondary fw-light" v-for="skill in project.skills" :key="project.name + '-' + skill">
                            {{ skill }}
                        </span>
                    </div>
                    <div class="my-3 d-flex justify-content-center">
                        <a :href="project.repo_url" class="card-link btn btn-outline-light" target="_blank">Github Repo</a>
                        <a :href="project.app_url" class="card-link btn btn-outline-light" target="_blank">Go to App</a>
                    </div>
                </div>
                <h2 class="project-title bg-white w-100 m-0 text-center">{{ project.title }}</h2>
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