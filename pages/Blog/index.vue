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
            <div class="blogContainer" :class="{ 'fadeUpAni' : animateComp }">
                <div class="blogListCol">
                    <BlogList
                    :blogs="blogs"
                    :pinned="pinned"
                    :categoryQuery="categoryQuery"/>
                </div>
                <div class="blogSidebarCol">
                    <BlogSidebar
                    @query-search-blog="updateSearchQuery"/>
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
        const blogs = await $content('blog').sortBy('createdAt', 'desc').limit(10).fetch()
        const pinned = await $content('blog').where({ pinned: true }).limit(1).fetch()
        return { blogs, pinned }
    },
    head: {
        title: 'William Yallop | Blog',
        meta: [
            {
                name: 'description',
                content: 'Welcome to my website! View my a brief protfolio of my work and find out more about me.'
            },
            {
                property: 'og:url',
                content: 'https://williamyallop.com/blog'
            },
            {
                property: 'og:type',
                content: 'website'
            },
            {
                property: 'og:title',
                content: 'William Yallop | Blog'
            },
            {
                property: 'og:description',
                content: 'Welcome to my website! View my a brief protfolio of my work and find out more about me.'
            }
        ],
    },
    data() {
        return {
            animateComp: true,
            blogs: [],
            categoryQuery: 'all'
            
        }
    },
    mounted() {
        setTimeout(() => {
            this.animateComp = false
        }, 300)
    },
    components: {
        BlogList,
        BlogSidebar

    },
    methods: {
        updateSearchQuery(categoryQuery) {
            this.categoryQuery = categoryQuery
        }
    }
}
</script>

<style scoped>
.blogContainer {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    transition: 0.3s;
}
.fadeUpAni {
  transform: translate(0,50px);
  opacity: 0;
}
.blogListCol {
    width: calc(100% - 370px);
}
.blogSidebarCol {
    width: 350px;
    min-width: 350px;
}

/* Media Queries */
@media only screen and (max-width: 1350px) {
    .blogListCol {width: 100%;}
    .blogSidebarCol {display: none;}
}
@media only screen and (max-width: 1024px) {
    .paddVert {padding-top: 20px; padding-bottom: 20px;}
}
@media only screen and (max-width: 700px) {

}
</style>