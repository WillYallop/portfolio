<template>
    <div class="rowComp">
        <h4>Technologies & Languages:</h4>
        <div class="rowContainer"> 
            <div class="col1">
                <div class="iconContainer">
                    <div class="iconSelector" :key="tech.id" v-for="tech in arrayData" v-on:click="setCol2Data(tech)" :class="{ 'active' :  col2Data.name == tech.name}">
                        <fa class="fas" :icon="[tech.iconType, tech.icon]" />
                    </div>
                </div>
            </div>
            <div class="col2">
                <p class="techTitleP">{{col2Data.name}}</p>
                <p class="techBodyP">{{col2Data.description}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            arrayData: [
                { name: "Javascript", iconType: "fab", icon: "js-square", description: "When I first started web development the only language I touched was PHP, HTML and CSS, but ever since moving to VueJs: JavaScript has become my favourite language and is the one I rely on the most to create amazing user experiences." },
                { name: "CSS", iconType: "fab", icon: "css3-alt", description: "The freedom CSS gives you to recreate any design in a pixel perfect recreation is the reason I love it so much. Its simple, yet powerful and does its job amazingly." },
                { name: "HTML", iconType: "fab", icon: "html5", description: "The first language I learnt. Need I say more about it."},
                { name: "NodeJs", iconType: "fab", icon: "node-js", description: "There is still a lot to learn when It comes to NodeJS, however its impact on the quality on my web apps is insurmountable and is the backbone to my most recent project which uses it for both the frontend and backend for its REST API." },
                { name: "VueJs", iconType: "fab", icon: "vuejs", description: "This is perhaps the single biggest contributor to the quality and ease of development when it comes to website and web applications that I work on. Its easy to learn, extremely powerful and has made many projects a joy to work on." },
                { name: "PHP", iconType: "fab", icon: "php", description: "This is perhaps the single biggest contributor to the quality and ease of development when it comes to website and web applications that I work on. Its easy to learn, extremely powerful and has made many projects a joy to work on." },
                { name: "NuxtJs", iconType: "fas", icon: "caret-up", description: "The problems I had with VueJs were fixed with Nuxt: its easier to setup a project, the sites performance is through the roof with its SSR and static generation and it makes SEO a breeze. All of this comes together to not only make development a joy, but it also has a meaningful impact for the user." },
            ],
            col2Data: {}
        }
    },
    mounted() {
        this.col2Data = this.arrayData[0]
    },
    methods: {
        setCol2Data(data) {
            this.col2Data = data
        }
    }
}
</script> 

<style scoped>
.rowComp {
    width: 100%;
    margin-top: 30px;
}
.rowComp h4 {
    padding: 0 5px 10px;
    color: #FFF;
}
.rowContainer {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.15);
    border-radius: 20px;
    display: flex;
    overflow: hidden;
}

.col1 {
    padding: 17.5px;
    width: 180px;
    height: auto;

}
.iconContainer {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
}
.iconSelector {
    width: calc(33.33% - 5px);
    background-color: #FFF;
    border-radius: 50%;
    display: block;
    margin: 2.5px;
    cursor: pointer;
    opacity: 0.5;
    transition: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
} 
.iconSelector:hover {
    opacity: 0.8;
}
.iconSelector.active {
    opacity: 1;
}
.iconSelector::after {
  content: "";
  display: block;
  padding-bottom: 100%;
}
.iconSelector .fas {
    color: black;
    font-size: 20px;
}
.col2 {
    width: calc(100% - 180px);
    background-color: rgba(255, 255, 255, 0.1);
    padding: 20px;
} 
.techTitleP {
    font-size: 16px;
    font-weight: bold;
    color: #FFF;
    margin-bottom: 5px;
}   
.techBodyP {
    color: #FFF;
}

@media only screen and (max-width: 600px) {
    .rowContainer {flex-wrap: wrap;}
    .col1 {width: 100%;}
    .col2 {width: 100%;}
    .iconSelector {width: calc(20% - 5px);}
}
@media only screen and (max-width: 500px) {
    .iconSelector {width: calc(20% - 5px);}
}
@media only screen and (max-width: 400px) {
    .iconSelector {width: calc(25% - 5px);}
}
</style>