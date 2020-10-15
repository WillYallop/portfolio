<template>
    <div class="blogSidebarCon">
        <!-- Portfolio -->
        <div class="sectionCon">
            <div class="sectHeader">
                <h4>Portfolio</h4> 
            </div>
            <div class="sectBody">
                <!-- Exodia Preview -->
                <div class="portRow exodiaBg" v-on:click="$router.push('/')">
                    <div class="textarea">
                        <img src="../../../assets/images/blog/exodiaPreviewPort.png" alt="EXODIA Fitness Preview">
                        <p>EXODIA<br>Fitness</p>
                    </div>
                    <nuxt-link class="portBtn" to="/"><fa class="fas" :icon="['fas', 'th-large']" /></nuxt-link>
                </div>
                <!-- Anyrep Preview -->
                <div class="portRow anyrepBg" v-on:click="$router.push('/')">
                    <div class="textarea">
                        <img src="../../../assets/images/blog/anyrepPreviewPort.png" alt="Anyrep Preview">
                        <p>Anyrep<br>Repairs</p>
                    </div>
                    <nuxt-link class="portBtn" to="/"><fa class="fas" :icon="['fas', 'th-large']" /></nuxt-link>
                </div>
                <!-- Melody Preview -->
                <div class="portRow melodyBg" v-on:click="$router.push('/')">
                    <div class="textarea">
                        <img src="../../../assets/images/blog/melodyPreviewPort.png" alt="Melody Melon Preview">
                        <p>Melody<br>Melon</p>
                    </div>
                    <nuxt-link class="portBtn" to="/"><fa class="fas" :icon="['fas', 'th-large']" /></nuxt-link>
                </div>
            </div>
        </div>
        <!-- Contact Me -->
        <div class="sectionCon">
            <div class="sectHeader">
                <h4>Contact Me</h4>
            </div>
            <div class="sectBody">
                <p class="sectP">Need a website for your business or startup? Dont hesitate to get in contact!</p>
                <nuxt-link to="/contact" class="btnStyle1"><fa class="fas" :icon="['fas', 'envelope']" />Contact</nuxt-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
.blogSidebarCon {
    position: sticky;
    top: 20px;
}
.sectionCon {
    padding: 20px;
    margin-bottom: 10px;
    border: 1px solid #EAEAEA;
    border-radius: 10px;
    background-color: #FFF;
} 
.sectionCon:last-child {
    margin-bottom: 0;
}
.sectHeader {
    display: flex;
    justify-content: space-between;
} 
.sectHeader h4 {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 10px;
    color: var(--title-text);
}
.sectBody .btnStyle1 {
    width: 100%;
    display: block;
    text-align: center;
    text-decoration: none;
}
.sectP {
    margin-bottom: 10px;
    color: var(--body-text);
}

/* Filter */
.inputStyle {
    width: 100%;
    background-color: #F8F8F8;
    border: 1px solid #EBEBEB;
    padding: 0 10px;
    height: 40px;
    border-radius: 5px;
    margin-bottom: 10px;
    font-size: 16px;
}
.inputStyle::placeholder {
    color: #929292;
}

/* Portfolio Preview */
.portRow {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    border-radius: 10px;
    padding: 10px;
    cursor: pointer;
    text-decoration: none;
    max-height: 68px;
}
.portRow:last-child {
    margin-bottom: 0;
}
.exodiaBg {background-color: #1E63EB;}
.anyrepBg {background-color: #FA2C2C;}
.melodyBg {background-color: #EE7752;}

.textarea {
    display: flex;
    max-height: 48px;
    overflow: hidden;
}
.textarea img {
    width: 20px;
    max-width: 20px;
    max-height: 48px;
    margin-right: 10px;
    text-indent: 100%;
    white-space: nowrap;
    overflow: hidden;
}
.textarea p {
    color: #FFF;
    font-size: 18px;
    font-weight: bold;
}
.portBtn {
    height: 30px;
    width: 30px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.portBtn .fas {
    color: #FFF;
    font-size: 20px;
    transition: 0.3s;    
}
.portBtn:hover .fas {
    transform: scale(1.1);
}
</style>