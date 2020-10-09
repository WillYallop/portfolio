<template>
    <div class="modalContainer">
        <simplebar class="modalWrapper" >

            <div class="contentContainer">
                <div class="contentWrapper">
                    <div class="modalContent" :style="{ 'background-color' : modalData.accent, 'color' : modalData.textColor }" :class="{ 'animateModal' : animate }">
                        <div class="modalHeader">
                            <h4 class="modalTitle">{{modalData.title}}</h4>
                            <div v-on:click="closeModal" class="closeModalBtn" :style="{ 'background-color' : modalData.btnBackColor }"><fa class="fas" :style="{ 'color' : modalData.btnColor }" :icon="['fas', 'times']" /></div>
                        </div>
                        <div class="contentSection" :style="{ 'background-color' : modalData.modalBackground }"> 
                            <!-- description -->
                            <div class="sectionRow">
                                <h4 class="sectionTitle" :style="{ 'color' : modalData.textColor }">Description:</h4>
                                <p :style="{ 'color' : modalData.textColor }">{{modalData.description}}</p>
                            </div>
                            <!-- Languages -->
                            <div class="sectionRow" v-if="modalData.languages.length > 0">
                                <h4 class="sectionTitle" :style="{ 'color' : modalData.textColor }">Languages:</h4>
                                <div class="iconContainer">
                                    <div class="sectionIcon" :key="language[0]" v-for="language in modalData.languages">
                                        <fa class="fas" :style="{ 'color' : language[1] }" :icon="['fab', language[0]]" />
                                    </div>
                                </div>
                            </div>
                            <!-- Framworks -->
                            <div class="sectionRow" v-if="modalData.frameworks.length > 0">
                                <h4 class="sectionTitle" :style="{ 'color' : modalData.textColor }">Frameworks:</h4>
                                <div class="iconContainer">
                                    <p :style="{ 'color' : modalData.textColor }" :key="framework" v-for="framework in modalData.frameworks">{{framework}}</p>
                                </div>
                            </div>
                            <!-- Links -->
                            <div class="sectionRow" v-if="modalData.links.length > 0">
                                <h4 class="sectionTitle" :style="{ 'color' : modalData.textColor }">Links:</h4>
                                <div class="iconContainer">
                                    <div class="sectionIcon linkIcon" :key="link[0]" v-for="link in modalData.links" v-on:click="navigateToWebsite(link[2])">
                                        <fa class="fas" :style="{ 'color' : link[1] }" :icon="['fab', link[0]]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button v-on:click="navigateToWebsite(modalData.websiteUrl)" class="visitSiteBtn" :style="{ 'background-color' : modalData.btnBackColor, 'color' : modalData.btnColor }">website<fa class="fas" :style="{ 'color' : modalData.btnColor }" :icon="['fas', 'chevron-right']" /></button>
                    </div>
                </div>
            </div>

            <div class="modalBackOverlay" v-on:click="closeModal" :class="{ 'animateBg' : animate }"></div>

        </simplebar>
    </div>
</template>

<script>
import simplebar from 'simplebar-vue';

export default {
    data() {
        return {
            animate: true
        }
    },
    mounted() {
        setTimeout(() => {
            this.animate = false
        }, 300)
    },
    components: {
        simplebar
    },
    computed: {
        modalData() {
            return this.$store.state.modal.modalData
        }
    },
    methods: {
        closeModal() {
            this.animate = true
            setTimeout(() => {
                this.$store.commit('toggleModlal')
            }, 300)   
        },
        navigateToWebsite(url) {
            var win = window.open(url, '_blank');
            win.focus();
        }
    }
}
</script>

<style scoped>
.modalContainer {
    position: fixed;
    left: 350px;
    top: 0;
    right: 0;
    bottom: -56px;
    padding-bottom: 56px;
    z-index: 600;
}
.modalWrapper {
    height: 100%;    
}

/* content */
.contentContainer { 
    height: 100%;
    width: 100%;
    z-index: 20;
    position: relative;
    pointer-events: none;
    display: flex;
    padding: 50px;
}
.contentWrapper  {
    margin: auto;
    align-self: center;
    width: 100%;
    max-width: 600px;
    padding-bottom: 50px;
}
.modalContent {
    width: 100%;
    border-radius: 20px;
    pointer-events: all;
    padding: 30px;
    transition: 0.3s;
}
.animateModal {
    transform: translate(0,50px);
    opacity: 0;
}
.modalHeader {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
} 
.modalTitle {
    font-size: 30px;
    line-height: 35px; 
    max-width: 150px;
}
.closeModalBtn {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: 0.3s;
}
.closeModalBtn:hover {
    transform: scale(1.1);
}
.closeModalBtn .fas {
    font-size: 14px;
}
.contentSection {
    padding: 20px;
    border-radius: 20px;
} 
.sectionRow {
    margin-bottom: 20px;
}
.sectionRow:last-child {
    margin-bottom: 0;
}
.sectionTitle {
    margin-bottom: 5px;
    font-size: 18px;
}
.iconContainer {
    display: flex;
    flex-wrap: wrap;
}
.iconContainer p {
    margin-right: 5px;
}
.sectionIcon {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
    margin-top: 5px;
    background-color: #FFF;
    filter: drop-shadow(0px 0px 6px rgba(0, 0, 0, 0.10));
}
.linkIcon {
    cursor: pointer;
}
.sectionIcon .fas {
    font-size: 16px;
    color: #FFF;
}

.visitSiteBtn {
    width: 100%;
    height: 40px;
    border-radius: 20px;
    margin-top: 30px;
    border: none;
    cursor: pointer;
    transition: 0.3s;
}
.visitSiteBtn:hover {
    transform: scale(1.05);
}
.visitSiteBtn .fas {
    margin-left: 10px;
    font-size: 10px;
}

/* overlay */
.modalBackOverlay {
    position: fixed;
    left: 350px;
    top: 0;
    right: 0;
    bottom: -56px;
    padding-bottom: 56px;
    background-color: rgba(0, 0, 0, 0.9);
    z-index: 10;
    opacity: 1;
    transition: 0.3s;
    cursor: pointer;
}
.animateBg {
    opacity: 0;
}

@media only screen and (max-width: 1024px) {
    .modalBackOverlay {left: 0;}
    .modalContainer {left: 0; top: 0;}
    .contentContainer {padding: 30px; padding-top: 80px;} 
    .contentWrapper {padding-bottom: 30px;} 
    .modalContent {padding: 20px;}
}
</style>

<style>
.modalContainer .simplebar-content {
    height: 100%;
}
</style>