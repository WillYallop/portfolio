<template>
    <div class="pageContainer">
        <div class="pageWrapper paddHori paddVert">
            
            <!-- Header -->
            <div class="pageHeader">
                <div class="pHTextarea">
                <h1 class="pHH1">Blog</h1>
                <p class="pHP">Keep up to date with me and my work!</p>
                </div>
                <div class="pHBtnCon">
                    <nuxt-link class="pHBtn" to="/contact"><fa class="fas" :icon="['fas', 'envelope']" /></nuxt-link>
                </div>
            </div>

            <!-- Blog Page Content -->
            <div class="blogContainer">
                <div class="blogListCol">
                    <BlogList
                    :blogs="blogs"/>
                </div>
                <div class="blogSidebarCol">
                    <BlogSidebar/>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
// Components
import BlogList from '@/components/BlogComponents/BlogList'
import BlogSidebar from '@/components/BlogComponents/BlogSidebar'

export default {
    async asyncData({ $content }) {
        const blogs = await $content('blog').limit(10).fetch()
        return { blogs }
    },
    data() {
        return {
            blogs: []
        }
    },
    components: {
        BlogList,
        BlogSidebar
    },
    methods: {

    }
}
</script>

<style scoped>
.blogContainer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
}
.blogListCol {
    width: calc(100% - 420px);
}
.blogSidebarCol {
    width: 400px;
    min-width: 400px;
}
</style>