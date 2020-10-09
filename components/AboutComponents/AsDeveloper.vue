<template>
    <div class="asContainer" :class="{ 'fadeUpAni' : animateComp }">
        <div class="asHeader">
            <h1 class="asH1">As a<br>Developer</h1>
            <button class="changeCompBtn" v-on:click="changeComponent"><span>as a person<fa class="fas" :icon="['fas', 'chevron-right']" /></span><fa class="fas mobileFas" :icon="['fas', 'user']" /></button>
        </div>
        <!-- Description -->
        <descriptionRow :description="description"/>
        <!-- skills -->
        <developerSkillsRow/>
        <!-- Accordion -->
        <accordionRow :accordion="accordion"/>

    </div>
</template>

<script>
//Components
import descriptionRow from '@/components/AboutComponents/DescriptionRow'
import developerSkillsRow from '@/components/AboutComponents/DeveloperSkillsRow.vue'
import accordionRow from '@/components/AboutComponents/AccodionRow'

export default {
    data() {
        return {
            animateComp: true,
            description: "The best part about being a web developer is the process of seeing an idea come to life. This is the driving force behind my motivation on all projects I work on. It is the reason I love to create the best user experience possible and it is the reason I strive to learn new languages and technologies.",
            accordion: [
                { id: 1, title: "Learn React", body: "After choosing to learn VueJs over React at the beginning of 2020 and now having a very good grasp on VueJs. I feel like its time to expand my knowledge and start learning React as soon as my existing projects are complete."},
                { id: 2, title: "To keep improving my portfolio", body: "Developing this portfolio has been a really nice change in pace from working on my new fitness app and I have several features I’m excited to add to it. Such as a reaction feature so I can gauge feedback to the websites on my portfolio and potentially a blog so I can go into more depth about the development of each of my projects."}
            ]
        }
    },
    mounted() {
        setTimeout(() => {
        this.animateComp = false
        }, 300)
    },
    components: {
        descriptionRow,
        developerSkillsRow,
        accordionRow

    },
    methods: {
        changeComponent() {
            this.$emit('change-component')
        }
    }
}
</script>

<style scoped>
.asContainer {
    background-color: #FF2C4E;
    border-radius: 20px;
    width: 100%;
    padding: 30px;
    transition: 0.3s;
}
.fadeUpAni {
  transform: translate(0,50px);
  opacity: 0;
}
.asHeader {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
} 
.asH1 {
    font-size: 30px;
    line-height: 35px;
}
.changeCompBtn {
    padding: 10px 40px;
    border-radius: 20px;
    background-color: #FFF;
    border: none;
    cursor: pointer;
}
.changeCompBtn .fas {
    margin-left: 10px;
    font-size: 10px;
}
.mobileFas {
    display: none;
    font-size: 14px !important;
    margin-left: 0 !important;
}
@media only screen and (max-width: 1024px) {
    .changeCompBtn span {display: none}
    .changeCompBtn {height: 40px; width: 40px; padding: 0; border-radius: 50%; display: flex; justify-content: center; align-items: center;}
    .mobileFas {display: flex;}
}
@media only screen and (max-width: 600px) {
  .asContainer {padding: 20px}
}
</style>