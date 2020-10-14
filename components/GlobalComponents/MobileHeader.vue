<template>
    <div class="mobileHeader" :class="{ 'hideHeader' : hideHeader }">
        <div v-on:click="$router.push('/')" class="logoCon">
            <img  class="ppImage" src="../../assets/images/profilePic.jpg" alt=""> 
            <div class="textarea">
                <p class="headerTitleP">William Yallop</p>
                <p class="headerSubP">web developer</p>
            </div>
        </div>

        <div class="btnCon">
            <button class="btnHeaderStyle" v-on:click="$router.push('/contact')"><fa class="fas" :icon="['fas', 'envelope']" /></button>
            <button v-on:click="navToggle" class="btnHeaderStyle hamburger hamburger--spin" type="button" aria-label="Open navigation" :class="{ 'is-active' : navOpen }">
                <span class="hamburger-box">
                    <span class="hamburger-inner"></span>
                </span>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            lastScrolPos: 0,
            hideHeader: false
        }
    },
    props: {
        navOpen: { type: Boolean }
    },
    methods: {
        navToggle() {
            this.$emit('nav-toggle')
        },
        handleScroll() {
            if (process.client) {
                var scrollTopPos = window.pageYOffset || document.documentElement.scrollTop
                if(scrollTopPos > this.lastScrolPos) {
                    if (window.scrollY > 60) {
                        this.hideHeader = true
                    } else {
                        this.hideHeader = false
                    }
                } else {
                    this.hideHeader = false
                }
                this.lastScrolPos = scrollTopPos
            }
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
.hamburger {
  padding: 15px 15px;
  display: inline-block;
  cursor: pointer;
  transition-property: opacity, filter;
  transition-duration: 0.15s;
  transition-timing-function: linear;
  font: inherit;
  color: inherit;
  text-transform: none;
  background-color: transparent;
  border: 0;
  margin: 0;
  overflow: visible; 
}
.hamburger:hover {
  opacity: 0.7; 
}
.hamburger.is-active:hover {
  opacity: 0.7; 
}
.hamburger.is-active .hamburger-inner,
.hamburger.is-active .hamburger-inner::before,
.hamburger.is-active .hamburger-inner::after {
  background-color: #000; 
}

.hamburger-box {
  width: 40px;
  height: 24px;
  display: inline-block;
  position: relative; 
}

.hamburger-inner {
  display: block;
  top: 50%;
  margin-top: -2px; 
}
.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
  width: 40px;
  height: 4px;
  background-color: #000;
  border-radius: 4px;
  position: absolute;
  transition-property: transform;
  transition-duration: 0.15s;
  transition-timing-function: ease; 
}
.hamburger-inner::before, .hamburger-inner::after {
  content: "";
  display: block; 
}
.hamburger-inner::before {
  top: -10px; 
}
.hamburger-inner::after {
  bottom: -10px; 
}

.hamburger--spin .hamburger-inner {
  transition-duration: 0.22s;
  transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); 
}
.hamburger--spin .hamburger-inner::before {
  transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in; 
}
.hamburger--spin .hamburger-inner::after {
  transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19); 
}

.hamburger--spin.is-active .hamburger-inner {
  transform: rotate(225deg);
  transition-delay: 0.12s;
  transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); 
}
.hamburger--spin.is-active .hamburger-inner::before {
  top: 0;
  opacity: 0;
  transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out; 
}
.hamburger--spin.is-active .hamburger-inner::after {
  bottom: 0;
  transform: rotate(-90deg);
  transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1); 
}
.mobileHeader {
    width: 100%;
    padding: 0 20px;
    height: 60px;
    background-color: #0C0C0C;
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: 1500;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transition: 0.3s;
}
.hideHeader {
    top: -60px;
}

.logoCon {
    display: flex;
    align-items: center;
} 
.ppImage {
    height: 40px;
    width: 40px;
    min-width: 40px;
    border-radius: 50% 5px 5px 50%;
    object-fit: cover;
} 
.textarea {
    margin-left: 5px;
    margin-top: 4px;
}  
.headerTitleP {
    font-size: 18px;
    line-height: 18px;
    font-weight: bold;
    color: #FFF;
} 
.headerSubP {
    font-size: 16px;
    color: #BDBDBD;
} 


.btnCon {
    display: flex;
}
.btnHeaderStyle {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background-color: #FFF;
    color: #FFF;
    border: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}
.btnHeaderStyle:first-child {
    margin-right: 10px;
}
.btnHeaderStyle .fas {
    font-size: 16px;
    color: #000000;
}

/*Hamburger*/
.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
  background-color: #000000;
}
.hamburger.is-active .hamburger-inner, .hamburger.is-active .hamburger-inner::before, .hamburger.is-active .hamburger-inner::after {
  background-color: #000000;
}
.hamburger {
  padding: 0;
}
.dm .hamburger {background-color: #101114;}
.hamburger-inner, .hamburger-inner::before, .hamburger-inner::after {
  width: 22px;
  height: 3px;
}
.hamburger-box {
  width: 22px;
}
.hamburger-inner::before {
  top: -6px;
}
.hamburger-inner::after {
  bottom: -6px;
}

@media only screen and (min-width: 1024.1px) {
    .mobileHeader {display: none;}
}
</style>