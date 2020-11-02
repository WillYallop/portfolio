<template>
    <div class="portCon">
        <div class="portCardCon long" :key="website.id" v-for="website in websiteJson" :class="website.displayType">
            <div class="portCardInner" :class="{ 'fadeUpAni' : animateCols, 'above' : zIndexArray[website.id - 1] }" :style="{ 'background-color' : website.accent}" v-on:click="moreInfoNavigate(website)"
                @mouseover="showOverlay = true; updateIndex(true, website.id - 1);" 
                @mouseleave="showOverlay = false; updateIndex(false, website.id - 1); showNavigateButton = false">

                <div class="titleArea">
                    <h4 class="cardTitle" :style="{ 'color' : website.textColor }">{{website.title}}</h4>
                    <a :href="website.websiteUrl" class="visitSiteBtn" :style="{ 'background-color' : website.btnBackColor, 'color' : website.btnColor }">website<fa class="fas" :style="{ 'color' : website.btnColor }" :icon="['fas', 'chevron-right']" /></a>
                    <a :href="website.websiteUrl" class="mobileSiteBtn" :style="{ 'background-color' : website.btnBackColor, 'color' : website.btnColor }"><fa class="fas" :style="{ 'color' : website.btnColor }" :icon="['fas', 'desktop']" /></a>
                </div>
                
                <img class="cardMainImg" :src="getImageUrl(website.mainImage)" :alt="website.title">
                <img v-if="website.mobileImage" class="cardMobileImg" :src="getImageUrl(website.mobileImage)" :alt="website.title">
                <img v-else class="cardMobileImg" :src="getImageUrl(website.mainImage)" :alt="website.title">

                <div class="navigateToPageBtnCon" v-if="showNavigateButton && zIndexArray[website.id - 1]">
                    <button v-on:click="openModal(website)" class="moreInfBtn" :style="{ 'background-color' : website.btnBackColor, 'color' : website.btnColor }">More Info</button>
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
        this.portfolioTotal = this.websiteJson.length
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
    margin-left: -10px;
    margin-top: -10px;
    width: calc(100% + 20px);
    display: flex;
    flex-wrap: wrap;
}
.portCardCon {
    padding: 10px;
    height: 300px;
}
.portCardCon.long {
    width: 66.66%;
}
.portCardCon.short {
    width: 33.33%;
}
.portCardInner {
    width: 100%;
    height: 100%;
    transition: 0.3s;
    cursor: pointer;
    border-radius: 20px;
    position: relative;

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    overflow: hidden;
}
.portCardInner.above {
    z-index: 300;
}
/* Card Inner Style */
.titleArea { 
    padding-right: 20px;
}
.portCardCon.long .titleArea { 
    padding-right: 40px;
}
.cardTitle {
    font-size: 38px;
    line-height: 38px;
    max-width: 150px;
    font-weight: 800;
}
/* Desktop Btn */
.visitSiteBtn {
    display: block;
    padding: 10px 20px;
    text-align: center;
    border-radius: 20px;
    border: none;
    margin-top: 20px;
    text-decoration: none;
    font-weight: bold;
    transition: 0.3s;
}
.visitSiteBtn:hover {
    transform: scale(1.1);
}
.visitSiteBtn .fas {
    margin-left: 10px;
    font-size: 14px;
}
/* Mobile Btn */
.mobileSiteBtn {
    position: absolute;
    top: 40px;
    right: 20px;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    display: none;
}

/* card image */
.cardMainImg {
    height: 100%;
}
.portCardCon.short .cardMainImg {
    margin-top: 170px;
    width: 200px;
    height: auto !important;
}
.portCardCon.long .cardMainImg {
    height: 100%;
}
/* Mobile Card Image */
.cardMobileImg {
    width: 100%;
    margin-top: 40px;
    display: none;
}

/* Card z-index related */
.fadeUpAni {
    transform: translate(0,50px);
    opacity: 0;
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
    background-color: rgba(0, 0, 0, 0.4);
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
@media only screen and (max-width: 1450px) {
    /* Universal */
    .portCardCon {height: 400px;}
    /* Short Cards */
    .portCardCon.short .portCardInner { flex-wrap: wrap; }
    .portCardCon.short .portCardInner .titleArea { width: 100%; }
    .portCardCon.short .cardMainImg { margin-top: 20px; width: 100%;}
    .portCardCon.short .titleArea { padding-right: 0;}
    /* Long Cards */
    .portCardCon.long .cardMainImg { height: 80%;}
}
@media only screen and (max-width: 1024px) {
    /* Universal */
    /* page adjust */
    .pageOver {left: 0;}
}
@media only screen and (max-width: 700px) {
    /* Universal */
    .portCardCon.long {width: 100%;}
    .portCardCon.short {width: 100%;}
    .portCardCon {height: 300px;}
    .portCardInner {padding: 0 40px}
    /* Short Cards */
    .portCardCon.short .portCardInner { flex-wrap: nowrap; }
    .portCardCon.short .portCardInner .titleArea { width: auto; }
    .portCardCon.short .cardMainImg { margin-top: 170px; width: 200px;}
    .portCardCon.short .titleArea { padding-right: 40px;}
}
@media only screen and (max-width: 500px) {
    /* Universal */
    .visitSiteBtn {display: none;}
    .portCardInner {padding: 40px 20px}
    .portCardCon {height: auto;}
    .cardMainImg {display: none;}
    .cardMobileImg {display: flex;}
    .mobileSiteBtn {display: flex;}
    /* Short Cards */
    .portCardCon.short .portCardInner { flex-wrap: wrap; }
    .portCardCon.short .portCardInner .titleArea { width: 100%; }
    .portCardCon.short .titleArea { padding-right: 0;}
    /* Long Cards */
    .portCardCon.long .portCardInner { flex-wrap: wrap; }
    .portCardCon.long .portCardInner .titleArea { width: 100%; }
    .portCardCon.long .titleArea { padding-right: 0;}
}
</style>