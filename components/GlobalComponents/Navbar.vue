<template>
    <div class="navContainer" :class="{ 'navSlide' : navOpen }">
        <simplebar class="navWrapper" data-simplebar-auto-hide="true">
            <div class="navTopH">
                <div class="navSect">
                    <img class="ppImage" src="../../assets/images/profilePic.jpg" alt="">
                    <h4>William Yallop</h4>
                    <p class="p14 emailP">hello@williamyallop.com</p>
                </div>
                <nav class="navSect">
                    <ul class="navUl">
                        <li><nuxt-link @click.native="closeNav" to="/">Portfolio</nuxt-link></li>
                        <li><nuxt-link @click.native="closeNav" to="/about">About</nuxt-link></li>
                        <li><nuxt-link @click.native="closeNav" to="/contact">Contact</nuxt-link></li>
                    </ul>
                </nav>
            </div>
            <div class="navLinksCon">
                <button class="navBtn" v-on:click="navigateTo('https://github.com/WillYallop')"><fa class="fas" :icon="['fab', 'github']" /></button>
                <button class="navBtn" v-on:click="navigateTo('https://www.linkedin.com/in/william-yallop-633429184/')"><fa class="fas" :icon="['fab', 'linkedin']" /></button>
            </div>
        </simplebar>
    </div>
</template>

<script>
import simplebar from 'simplebar-vue';

export default {
    data() {
        return {
            
        }
    },
    components: {
        simplebar
    },
    props: {
        navOpen: { type: Boolean }
    },
    methods: {
        closeNav() {
            this.$emit('close-nav')
        },
        navigateTo(url) {
            var win = window.open(url, '_blank');
            win.focus();
        }
    }
}
</script>

<style scoped>
.navContainer {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 350px;
    background-color: #1B1B1B;
}
.navWrapper {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
}
.navTopH {
    width: 100%;
}
.navSect {
    padding: 50px;
}
.navSect:last-child {
    padding-top: 0;
}
.ppImage {
    height: 70px;
    width: 70px;
    border-radius: 10px;
    margin-bottom: 20px;
}
.emailP {
    margin-top: 5px;
}
.navUl {
    padding: 0;
    list-style-type: none;
    width: 100%;
}
.navUl li {
    width: 100%;
}
.navUl li a {
    display: block;
    width: 100%;
    color: #909090;
    text-decoration: none;
    font-size: 20px;
    padding: 5px 0;
    margin: 5px 0;
    transition: color 0.3s;
}
.navUl li a:hover {
    color: #FFF;
}
.nuxt-link-exact-active {
    color: #FFF !important;
}

.navLinksCon {
    align-self: flex-end;
    width: 100%;
    display: flex;
    padding: 50px;
}
.navBtn {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: #000000;
    border: none;
    cursor: pointer;
    margin-right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
    text-decoration: none;
}
.navBtn .fas {
    color: #FFF;
    font-size: 16px;
}
.navBtn:last-child {
    margin-right: 0;
}   

@media only screen and (max-width: 1024px) {
    .navContainer {left: 100%; width: 100%;  transition:  0.3s; transition-timing-function: ease-in-out; top: 60px;}
    .navSlide {left: 0;}
    .navSect {padding: 100px 40px 50px; display: flex;flex-direction: column;align-items: flex-end;}
    .navUl li a {text-align: right;}
    .navLinksCon {justify-content: flex-end;}
    .navBtn:first-child {margin-left: 0;}
    .navBtn {margin-left: 10px; margin-right: 0;}
}
</style>

<style>
.navWrapper .simplebar-content {
    height: 100%;
    display: flex;
    flex-wrap: wrap;
}
.simplebar-scrollbar:before {
    background: #FFF;
}
</style>