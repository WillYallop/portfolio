<template>
    <div class="portCon">

        <div class="col1">
            <div class="webCon" :key="websites.id" v-for="websites in websiteJson.col1" :class="{ 'longCon' : websites.displayType == 'long', 'squareCon' : websites.displayType == 'square' }">
                <div class="webConInner" :class="{ 'fadeUpAni' : animateCols, 'above' : zIndexArray[websites.id - 1] }" v-on:click="moreInfoNavigate(websites)"
                @mouseover="showOverlay = true; updateIndex(true, websites.id - 1);" 
                @mouseleave="showOverlay = false; updateIndex(false, websites.id - 1); showNavigateButton = false"
                :style="{ 'background-color' : websites.accent}">
                    <!-- If its long con -->
                    <div class="longConInner" v-if="websites.displayType == 'long'"> 
                        <div class="innerTextarea">
                            <p class="nameP" :style="{ 'color' : websites.textColor }">{{websites.topText}}</p>
                            <p class="nameP" :style="{ 'color' : websites.textColor }">{{websites.botText}}</p>
                            <button @click.stop="navigateToWebsite(websites.websiteUrl)" class="visitSiteBtn" :style="{ 'background-color' : websites.btnBackColor, 'color' : websites.btnColor }"><span class="desktopContent">visit<fa class="fas desktopFas" :style="{ 'color' : websites.btnColor }" :icon="['fas', 'chevron-right']" /></span><fa class="fas mobileFas" :style="{ 'color' : websites.btnColor }" :icon="['fas', 'desktop']" /></button>
                        </div>
                        <div class="imageContainer">
                            <img :src="getImageUrl(websites.mainImage)" :alt="websites.name + ' preview'" class="longConImage">
                            <img :src="getImageUrl(websites.longImage)" :alt="websites.name + ' preview'" class="longConImageTall">
                            <img :src="getImageUrl(websites.desktopImage)" :alt="websites.name + ' preview'" class="longConImageDesktop">
                        </div>
                        <div class="navigateToPageBtnCon" v-if="showNavigateButton && zIndexArray[websites.id - 1]">
                            <button v-on:click="openModal(websites)" class="moreInfBtn" :style="{ 'background-color' : websites.btnBackColor, 'color' : websites.btnColor }">More Info</button>
                        </div>
                    </div>
                    <!-- If its square con -->
                    <div class="squareConInner" v-if="websites.displayType == 'square'">
                        <div class="innerTextarea">
                            <p class="nameP" :style="{ 'color' : websites.textColor }">{{websites.topText}}</p>
                            <p class="nameP" :style="{ 'color' : websites.textColor }">{{websites.botText}}</p>
                            <button @click.stop="navigateToWebsite(websites.websiteUrl)" class="visitSiteBtn" :style="{ 'background-color' : websites.btnBackColor, 'color' : websites.btnColor }"><span class="desktopContent">visit<fa class="fas desktopFas" :style="{ 'color' : websites.btnColor }" :icon="['fas', 'chevron-right']" /></span><fa class="fas mobileFas" :style="{ 'color' : websites.btnColor }" :icon="['fas', 'desktop']" /></button>
                        </div>
                        <div class="imageContainer">
                            <img :src="getImageUrl(websites.mainImage)" :alt="websites.name + ' preview'" class="squareConImage">
                            <img :src="getImageUrl(websites.desktopImage)" :alt="websites.name + ' preview'" class="squareConImageDesktop">
                        </div>
                        <div class="navigateToPageBtnCon" v-if="showNavigateButton && zIndexArray[websites.id - 1]">
                            <button v-on:click="openModal(websites)" class="moreInfBtn" :style="{ 'background-color' : websites.btnBackColor, 'color' : websites.btnColor }">More Info</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col2">
            <div class="webCon col2WebCon" :key="websites.id" v-for="websites in websiteJson.col2" >
                <div class="webConInner" :class="{ 'fadeUpAni' : animateCols, 'above' : zIndexArray[websites.id - 1] }" v-on:click="moreInfoNavigate(websites)"
                @mouseover="showOverlay = true; updateIndex(true, websites.id - 1);" 
                @mouseleave="showOverlay = false; updateIndex(false, websites.id - 1); showNavigateButton = false"
                :style="{ 'background-color' : websites.accent}">
                    <div class="squareConInner">
                        <div class="innerTextarea">
                            <p class="nameP" :style="{ 'color' : websites.textColor }">{{websites.topText}}</p>
                            <p class="nameP" :style="{ 'color' : websites.textColor }">{{websites.botText}}</p>
                            <button @click.stop="navigateToWebsite(websites.websiteUrl)" class="visitSiteBtn" :style="{ 'background-color' : websites.btnBackColor, 'color' : websites.btnColor }"><span class="desktopContent">visit<fa class="fas desktopFas" :style="{ 'color' : websites.btnColor }" :icon="['fas', 'chevron-right']" /></span><fa class="fas mobileFas" :style="{ 'color' : websites.btnColor }" :icon="['fas', 'desktop']" /></button>
                        </div>
                        <div class="imageContainer">
                            <img :src="getImageUrl(websites.mainImage)" :alt="websites.name + ' preview'" class="squareConImage" :class="{ 'darkBorder' : websites.id == 6 }">
                            <img :src="getImageUrl(websites.desktopImage)" :alt="websites.name + ' preview'" class="squareConImageDesktop">
                        </div>
                        <div class="navigateToPageBtnCon" v-if="showNavigateButton && zIndexArray[websites.id - 1]">
                            <button v-on:click="openModal(websites)" class="moreInfBtn" :style="{ 'background-color' : websites.btnBackColor, 'color' : websites.btnColor }">More Info</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="pageOver" :class="{ 'active' : showOverlay }"></div>

    </div>
</template>

<script>
//json
import website from '@/components/GlobalComponents/websites.json'

export default {
    data() {
        return {
            animateCols: true,
            websiteJson: website,
            showOverlay: false,
            portfolioTotal: null,
            zIndexArray: [],
            lastestHovered: null,
            showNavigateButton: false,
        }
    },
    mounted() {
        this.portfolioTotal = this.websiteJson.col1.length + this.websiteJson.col2.length
        for (var i = 0; i < this.portfolioTotal; i++) {
            this.zIndexArray.push(false)
        }

        setTimeout(() => {
            this.animateCols = false
        }, 300)
    },
    methods: {
        updateIndex(bool, index) {
            if(bool) {
                this.zIndexArray[this.lastestHovered] = false // fixes issues when hovering over multiple cards quickly
                this.zIndexArray[index] = bool // sets new value
                this.lastestHovered = index // sets last hovered index for next hover event ^^
            } else {
                setTimeout(() => {
                    this.zIndexArray[index] = bool
                }, 300) // has 0.3s cooldown to stop z index from being removed before the overlay transition finishes
            }
        },
        getImageUrl(name) {
            var images = require.context('../../assets/images/', false)
            return images('./' + name)
        },
        handleScroll() {
            if (process.client) {
                let width = window.innerWidth
                if(width <= 530) {
                    this.showOverlay = false
                    this.showNavigateButton = false
                }
            }
        },
        moreInfoNavigate(data) {
            if (process.client) {
                let width = window.innerWidth
                if(width <= 530) {
                    this.showOverlay = true
                    this.showNavigateButton = true
                } else {
                    this.openModal(data)
                }
            } 
        },
        openModal(data) {
            this.$store.commit('passData', data)
            this.$store.commit('toggleModlal')
            this.showOverlay = false
        },
        navigateToWebsite(url) {
            var win = window.open(url, '_blank');
            win.focus();
        }
    },
    beforeMount() {
        window.addEventListener('scroll', this.handleScroll);
    },
    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    }
}
</script>

<style scoped>
.portCon {
    display: flex;
    flex-wrap: wrap;
    margin-top: -10px;
    padding: 0 40px 40px;
}
.col1 {
    width: 66.66%;
    display: flex;
    flex-wrap: wrap;
    align-self: flex-start; 
    transition: 0.3s;
}
.col2 {
    width: 33.33%;
    display: flex;
    flex-direction: column;
    transition: 0.3s;
}
.fadeUpAni {
    transform: translate(0,50px);
    opacity: 0;
}
.webCon {
    padding: 10px;
}
.longCon {width: 100%; } 
.squareCon {width: 50%;} 
.col2WebCon {width: 100%;}

.webConInner {
    background-color: #FFF;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    cursor: pointer;
    position: relative;
}
.webConInner.above {
    z-index: 300;
}
.longCon .webConInner {height: 320px;} 
.squareCon .webConInner {height: 320px;} 
.col2WebCon .webConInner {height: 320px;} 

/* Long con */
.longConInner {
    height: 100%;
    width: 100%;
}
.longConInner:hover .longConImage {
    transform: scale(1.05);
}
.longConImage {
    position: absolute;
    top: 20px;
    right: 40px;
    width: 350px;
    transform: rotate(5deg);
    transition: 0.3s;
} 
.longConInner:hover .longConImageTall {
    transform: scale(1.05);
}
.longConInner:hover .longConImageDesktop {
    transform: scale(1.05);
}
.longConImageTall {
    display: none;
    position: absolute;
    top: 20px;
    right: 20px;
    width: 250px;
    border-radius: 10px;
    border: 2px solid #FFF;
    transition: 0.3s;
}
.longConImageDesktop {
    width: 100%;
    display: none;
    transition: 0.3s;
}
/* square con */
.squareConInner {
    height: 100%;
    width: 100%;
    position: relative;
} 
.squareConInner:hover .squareConImage {
    transform: scale(1.05);
}
.squareConInner:hover .squareConImageDesktop {
    transform: scale(1.05);
}
.squareConImage {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 180px;
    border-radius: 10px;
    border: 2px solid #FFF;
    transition: 0.3s;
}
.squareConImageDesktop {
    width: 100%;
    display: none;
    transition: 0.3s;
    border-radius: 10px;
}
.darkBorder {
    border: 2px solid #2B2B2B;
}
/* both con inner */
.imageContainer { 
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: flex-end;
}
.innerTextarea {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    z-index: 200;
    position: relative;
} 
.longConInner .innerTextarea {
    width: calc(100% - 390px);
    text-align: center;
    align-items: center;
    padding: 0 20px;
    transition: width 0.3s;
}
.squareConInner .innerTextarea {
    padding: 0 20px;
    transition: width 0.3s;
}
.nameP {
    font-size: 40px;
    font-weight: bold;
    color: #FFF;
    line-height: 45px;
} 
.visitSiteBtn {
    margin-top: 30px;
    padding: 10px 40px;
    width: 160px;
    border-radius: 20px;
    background-color: #FFF;
    border: none;
    cursor: pointer;
    transition: 0.3s;
}
.visitSiteBtn:hover {
    transform: scale(1.1);
}
.visitSiteBtn .desktopFas {
    margin-left: 10px;
}
.mobileFas { 
    display: none;
}
.visitSiteBtn .fas {
    font-size: 10px;
    color: #424242;
}

/* page overlay */
.pageOver {
    position: fixed;
    top: 0;
    left: 350px;
    right: 0;
    bottom: -56px;
    background-color: rgba(0, 0, 0, 0);
    z-index: 200;
    pointer-events: none;
    transition: 0.2s;
}
.pageOver.active {
    background-color: rgba(0, 0, 0, 0.8);
}

/* mobile navigate btn */
.navigateToPageBtnCon {
    position: absolute;
    bottom: 20px;
    left: 20px;
    right: 20px;
    display: flex;
    justify-content: center;
}
.moreInfBtn {
    width: 100%;
    height: 40px;
    background-color: #FFF;
    border-radius: 20px;
    border: none;
    transition: 0.3s;
    animation-name: fade-into-view;
    animation-duration: 0.3s;
}
@keyframes fade-into-view {
  from {transform: translate(0,50px); opacity: 0;}
  to {transform: translate(0,0); opacity: 1;}
}

/* Media Queries */
@media only screen and (max-width: 1700px) {
    .squareConImage {width: 150px;}
}
@media only screen and (max-width: 1600px) {
    .col1 .squareConInner .innerTextarea {height: 200px;}
    .col2 .squareConInner .innerTextarea {height: 200px;}
    .squareConInner .imageContainer {left: 0; right: 0;}
    /* images */
    .squareConImage {display: flex; left: 20px; right: 20px; width: calc(100% - 40px); top: 200px;}
    /* Manage size of cards */
    .squareCon .webConInner {height: 500px;} 
    .col2WebCon .webConInner {height: 380px;} 
}

@media only screen and (max-width: 1380px) {
    /* long con */
    .longConImage {width: 300px;}
    .longConInner .innerTextarea {width: calc(100% - 340px);}
}
@media only screen and (max-width: 1300px) {
    /* long con */
    .longConImage {width: 250px; }
    .longConInner .innerTextarea {width: calc(100% - 290px);}
}

/* make cards all rows */
@media only screen and (max-width: 1200px) {

    .col1 .squareConInner .innerTextarea {height: 320px;}
    .col2 .squareConInner .innerTextarea {height: 320px;}
    .squareConInner .imageContainer {left: 20px; right: 20px;}
    /* images */
    .squareConImage {display: flex; left: auto; right: 20px; width: 250px; top: 20px;}
    .squareConImageDesktop {display: none;}
    /* long con */
    .longConImage {width: 350px; top: 20px;}
    .longConInner .innerTextarea {width: calc(100% - 390px);}

    /* Manage size of cards */
    .squareCon .webConInner {height: 320px;} 
    .col2WebCon .webConInner {height: 320px;} 
    .squareCon {width: 100%;} 
    .col1 {width: 100%;}
    .col2 {width: 100%;}

    .squareConInner .innerTextarea {width: calc(100% - 290px);text-align: center;align-items: center;} 
}
@media only screen and (max-width: 1050px) {
    /* long con */
    .longConImage {width: 320px; top: 20px;}
    .longConInner .innerTextarea {width: calc(100% - 360px);}
}


/* make cards standard grid */
@media only screen and (max-width: 1024px) {
    .col1 .squareConInner .innerTextarea {height: 200px;}
    .col2 .squareConInner .innerTextarea {height: 200px;}
    .squareConInner .imageContainer {left: 0; right: 0;}
    /* images */
    .squareConImage {display: flex; left: 20px; right: 20px; width: calc(100% - 40px); top: 200px;}
    .squareConImageDesktop {display: none;}


    /* page adjust */
    .pageOver {left: 0;}
    .portCon { padding: 0 10px 10px;}

    /* Manage size of cards */
    .squareCon {width: 50%;} 
    .col1 {width: 65%;}
    .col2 {width: 35%;}
    /* Manage size of cards */
    .squareCon .webConInner {height: 500px;} 
    .col2WebCon .webConInner {height: 380px;} 

    .squareConInner .innerTextarea {width: auto;text-align: left;align-items: flex-start;padding: 0 20px;transition: width 0.3s;}
}

@media only screen and (max-width: 920px) {

    .col1 .squareConInner .innerTextarea {height: 400px;}
    .col2 .squareConInner .innerTextarea {height: 400px;}
    .squareConInner .imageContainer {left: 0; right: 0;}
    /* images */
    .squareConImage {display: flex; left: auto; right: 20px; width: 250px; top: 20px;}
    .squareConImageDesktop {display: none;}
    /* long con */
    .longConImage {width: 350px;}
    .longConInner .innerTextarea {width: calc(100% - 390px);}

    /* Manage size of cards */
    .squareCon .webConInner {height: 400px;} 
    .col2WebCon .webConInner {height: 400px;} 
    .squareCon {width: 100%;} 
    .col1 {width: 100%;}
    .col2 {width: 100%;}

    .squareConInner .innerTextarea {width: calc(100% - 270px);text-align: center;align-items: center;} 
}

@media only screen and (max-width: 650px) {
    /* long con */
    .longConImage {width: 300px;}
    .longConInner .innerTextarea {width: calc(100% - 340px);}
}

@media only screen and (max-width: 600px) {
    /* images */
    .longConImage {display: none;}
    .longConImageTall {display: flex;}
    .longConInner .innerTextarea {width: calc(100% - 270px);}
    /* Manage size of cards */
    .longCon .webConInner {height: 400px;} 
}
@media only screen and (min-width: 530.1px) {
    .navigateToPageBtnCon {display: none;}
}
@media only screen and (max-width: 530px) {
    /* textarea height */
    .innerTextarea {height: auto !important; padding: 40px 20px !important; text-align: left !important; width: 100% !important; align-items: flex-start !important;}
    /* images */
    .longConImageTall {display: none;}
    .squareConImage {display: none;}
    .squareConImageDesktop {display: flex; top: 220px; bottom: auto;}
    .longConImageDesktop {display: flex;}
    
    .imageContainer {position: relative; left: auto !important; right: auto !important;; top: auto; bottom: auto; width: 100%; padding: 0 20px 20px; overflow: visible;}
    /* Manage size of cards */
    .longCon .webConInner {height: auto;} 
    .squareCon .webConInner {height: auto;} 
    .col2WebCon .webConInner {height: auto;} 
    /* button */
    .visitSiteBtn {position: absolute;top: 40px;right: 20px;margin: 0;padding: 0;height: 40px;width: 40px;border-radius: 50%; display: flex;justify-content: center; align-items: center;}
    .visitSiteBtn .desktopContent {display: none;}
    .visitSiteBtn .mobileFas {font-size: 14px; display: inherit;}  

}

</style>