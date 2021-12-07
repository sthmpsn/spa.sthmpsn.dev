<template>
    <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col" v-for="project in projects" :key="project.name">
            <div class="card h-100 shadow">
                <div class="card-body">
                    <div class="card-title">{{ project.title }}</div>
                    <div class="card-subtitle mb-2 text-muted small">{{ project.subtitle }}</div>
                    <img :src="project.img_url" :alt="project.title + image" class="img-fluid portfolio-project-images rounded">
                    <div class="card-text">{{ project.desc }}</div>
                    <div class="mt-3 ">
                        <div>Tech Used:</div>
                        <span class="d-inline-block mx-1 badge rounded-pill bg-secondary fw-light" v-for="skill in project.skills" :key="project.name + '-' + skill"> {{ skill }}</span>
                    </div>
                    <div class="my-4 text-center">
                        <a :href="project.repo_url" class="card-link btn btn-outline-primary" target="_blank">Github Repo</a>
                        <a :href="project.app_url" class="card-link btn btn-outline-primary" target="_blank">Go to App</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import projects from '../../assets/data/portfolio.json';

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