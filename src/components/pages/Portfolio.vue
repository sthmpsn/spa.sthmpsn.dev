<template>
    <div class="row my-4">
        <div class="col text-center">
            <h1 class="heading">Portfolio</h1>
        </div>
    </div>
    <div class="row my-4">
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
    </div>
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
                            <span class="project-skill clickable" :data-skill="skill.toLowerCase()">{{ skill }}</span>
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
            let searchTermLC = state.filterValue.toLowerCase();

            // If filterValue is FALSY just list all the projects
            if(!searchTermLC){
                console.log("Default Projects: ", state.projects);
                return state.projects;
            }
            
            // console.log("[ ", searchTermLC, " ] :");
            
            return state.projects.filter((project) => {
                let skillStr = project.skills.join(" ").toLowerCase();
                
                if(skillStr.includes(searchTermLC)){
                    // console.log(project.name);
                    return true;
                }else{
                    return false;
                }

            });
            
        }

        return {...toRefs(state)}

    },
    mounted() {
        // Get Clickable Skills Tags and Search input
        const btnSkillTag = document.querySelectorAll('span.project-skill.clickable');
        let inputSearch = document.getElementById('project-tag-search');

        // BEHAVIORS


        // On Click of Project Skill Tag Add skill text to skill search input
        btnSkillTag.forEach(skillTag => {
            skillTag.addEventListener("click",(e) => {
                inputSearch.value = e.currentTarget.getAttribute("data-skill");
            });
        });
            
    },
};
</script>

<style lang="scss" scoped>
    @import '../../sass/pages/portfolio';

</style>