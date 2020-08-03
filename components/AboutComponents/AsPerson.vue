<template>
    <div class="asContainer" :class="{ 'fadeUpAni' : animateComp }">
        <div class="asHeader">
            <h1 class="asH1">As a<br>Person</h1>
            <button class="changeCompBtn" v-on:click="changeComponent"><span>as a person<fa class="fas" :icon="['fas', 'chevron-right']" /></span><fa class="fas mobileFas" :icon="['fas', 'code']" /></button>
        </div>
        <!-- Description -->
        <descriptionRow :description="description"/>

        <!-- Accordion -->
        <accordionRow :accordion="accordion"/>

    </div>
</template>

<script>
//Components
import descriptionRow from '@/components/AboutComponents/DescriptionRow'
import accordionRow from '@/components/AboutComponents/AccodionRow'

export default {
    data() {
        return {
            animateComp: true,
            description: "As you might already know my main passion lies with web development, however that isn’t the whole of it. I’m an avid weightlifter and always strive to beat personal records, and I’m also starting to learn all the ins and outs of running a business so soon I can take some of my web apps to the next level.",
            accordion: [
                { id: 1, title: "Travel", body: "For as long as I can remember I’ve wanted to road trip across Europe to go sightseeing and maybe hike up a few mountains.  Id love to spend a whole month or two doing this so I could get the most out of it and not feel rushed."},
                { id: 2, title: "To start a business", body: "At sixth form I studies business and currently never really found a use for it. I would like that to change and for me to be able to turn one of my web apps into something I can be even more proud of and for them to start turning a profit."}
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
    background-color: #1359FB;
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