<template>
    <div class="blogListComp">
        <p>{{blogs}}</p>
        <button v-on:click="loadMore">Load More</button>
    </div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    props: {
        blogs: Array
    },
    methods: {
        loadMore() {
            this.$content('blog').where({ tags: { $contains: 'freelance' } }).fetch()
            .then((res) => {
                this.blogs = res
            })
           
        }
    }
}
</script>

<style scoped>
.blogListComp {
    width: 100%;
}
</style>