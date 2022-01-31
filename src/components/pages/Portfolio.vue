<template>
    <div class="row my-4">
        <div class="col text-center">
            <h1 class="heading">Portfolio</h1>
        </div>
    </div>
    <!-- TODO: Future Enhancement to allow searching of tags/skills-->
    <!-- <div class="row my-4">
        <div class="col-6 mx-auto">
            <label for="project-tag-search" class="form-label fw-bold">Project Tag/Skill Filter</label>
            <input 
                id="project-tag-search" 
                class="form-control rounded-pill" 
                type="text" 
                placeholder="Enter Tag/Skill to Search"
                v-model="filterValue"
            />
        </div>
    </div> -->
    <div class="row row-cols-1 row-cols-xxl-2 g-4">
        <div class="col" v-for="project in filteredProjects" :key="project.name">
            <div class="project-wrapper mx-auto rounded">
                <img :src="require(`../../assets/images/projects/${project.img_url}`)" class="h-100" :alt="project.title + ' image'">
                <div class="caption">
                    <h2 class="card-title">{{ project.title }}</h2>
                    <div class="project-subtitle mb-2 text-muted h4">{{ project.subtitle }}</div>
                    <div class="project-desc mb-2 text-muted small text-center">{{ project.desc }}</div>
                    <div class="m-3 small d-flex flex-wrap align-items-center">
                        <span class="small fw-bold">Tags</span><span class="d-inline-block m-1 badge rounded-pill bg-secondary fw-light" v-for="skill in project.skills" :key="project.name + '-' + skill">
                            {{ skill }}
                        </span>
                    </div>
                    <div class="my-3 d-flex justify-content-center">
                        <a :href="project.repo_url" class="card-link btn btn-outline-light" target="_blank">Github Repo</a>
                        <a :href="project.app_url" class="card-link btn btn-outline-light" target="_blank">Go to App</a>
                    </div>
                </div>
                <h2 class="h4 project-title bg-white w-100 m-0 text-center upp">{{ project.title }}</h2>
            </div>
        </div>
    </div>
</template>

<script>
import projects from '@/assets/data/portfolio.json';
import { computed, reactive, toRefs } from '@vue/reactivity';



export default {
    name: "portfolio",
    setup(){
        const state = reactive({
            projects: projects,
            filterValue: "",
            filteredProjects: computed(()=> updateProjects())
        })

        function updateProjects(){
            // If filterValue is FALSY just list all the projects
            if(!state.filterValue){
                console.log("Default Projects: ", state.projects);
                return state.projects;
            }

            // TODO: If filterValue has a value then match if the project tags match and list that project
            //          Need to investigate how to handle this since the skills property is an array 
            // ...in the mean time currently allow filtering for project name.
            
            return state.projects.filter((project) => project.name.toLowerCase().includes(state.filterValue.toLowerCase()));

        }

        return {...toRefs(state)}

    }
};
</script>

<style lang="scss" scoped>
    @import '../../sass/pages/portfolio';

</style>