<template>
    <div class="pageContainer">
        <div class="pageWrapper paddHori paddVert">
            
                <p>{{ blog.tags }}</p>
                <h1>{{ blog.title }}</h1>
                <p>{{ blog.description }}</p>
                
                <img
                :src="blog.image"
                :alt="blog.alt"/>
                <p>Article last updated: {{ formatDate(blog.updatedAt) }}</p>

                <nuxt-content :document="blog" />
           
        </div>
    </div>
</template>

<script>
export default {
    async asyncData({ $content, params }) {
        const blog = await $content('blog', params.slug).fetch()
        return { blog }
    },
    data() {
        return {

        }
    },
    methods: {
        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' }
            return new Date(date).toLocaleDateString('en', options)
        }
    }
}
</script>

<style scoped>

</style>