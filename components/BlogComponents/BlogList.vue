<template>
    <div class="blogListComp">

        <!-- Pinned Blog -->
        <div class="pinCon" :key="pinned.slug + ' 1'" v-for="pinned in pinned">
            <nuxt-link :to="'/blog/' + pinned.slug" v-if="pinned.pinned" class="pinnedBlog" :style="{ backgroundImage: `url(${getImageUrl(pinned.image)})`, 'background-color' : pinned.accentColor}">
                <div class="pinContent" >
                    <div class="topRow">
                        <div class="tagCon" :key="tag" v-for="tag in pinned.tags">
                            <p>{{tag}}</p>
                        </div>
                        <p class="createdDate">{{formatDate(pinned.createdAt)}}</p>
                    </div>
                    <p class="pinTitleP">{{pinned.title}}</p>
                    <p class="pinDescP">{{pinned.description}}</p>
                </div>
            </nuxt-link>
        </div>

        <!-- Blog Row -->
        <div class="blogRow" :key="blog.slug" v-for="blog in blogs" v-on:click="$router.push('/blog/' + blog.slug)">
            <div class="rowImgCon" :style="{ backgroundImage: `url(${getImageUrl(blog.image)})`, 'background-color' : blog.accentColor }"></div>
            <div class="rowContent">
                <div class="topRow">
                    <div class="tagCon" :key="tag" v-for="tag in blog.tags">
                        <p>{{tag}}</p>
                    </div>
                    <p class="createdDate">{{formatDate(blog.createdAt)}}</p>
                </div>
                <p class="rowTitleP">{{blog.title}}</p>
                <p class="rowDescP">{{blog.description}}</p>
                <nuxt-link :to="'/blog/' + blog.slug" class="btnStyle1">Read more..</nuxt-link>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    data() {
        return {
            pinnedBlog: []
        }
    },
    mounted() {
        //this.findPinnedBlog()
    },
    props: {
        blogs: Array,
        pinned: Array,
        categoryQuery: String
    },
    methods: {
        findPinnedBlog() {
            for(var x = 0; x < this.blogs.length; x++) {
                if(this.blogs[x].pinned) {
                    this.pinnedBlog.push(this.pinnedBlog[x])
                }
            }
        },
        /* Format Methods */
        getImageUrl(name) {
            var images = require.context('../../assets/images/blog/', false)
            return images('./' + name)
        },
        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' }
            return new Date(date).toLocaleDateString('en', options)
        },
        /* Search Blogs */
        searchBlogs() {
            if(this.categoryQuery != 'all') {
                this.$content('blog').where({ tags: { $contains: this.categoryQuery } }).sortBy('createdAt', 'desc').fetch()
                .then((res) => {
                    this.blogs = res
                })
            }    
        }
    },
    watch: {
        categoryQuery() {
            this.searchBlogs()
        }
    }
}
</script>

<style scoped>
.blogListComp {
    width: 100%;
}
/* Blog Container */
.blogCon {
    width: 100%;
}

/* Pinned Blog */
.pinCon {
    margin-bottom: 10px;
}
.pinnedBlog {
    background-position: center;
    background-size: cover;
    background-repeat: none;
    width: 100%;
    height: 350px;
    border-radius: 10px;
    overflow: hidden;
    position: relative;
    display: flex;
    align-items: flex-end;
    transition: 0.3s;
    cursor: pointer;
    text-decoration: none;
} 
.pinnedBlog:hover {
    box-shadow: 0px 0px 28px rgba(0, 0, 0, 0.1);
}
.pinContent {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 20px;
} 
.pinContent .createdDate {
    color: #FFF;
}
.pinTitleP {
    font-size: 20px;
    font-weight: bold;
    color: #FFF;
} 
.pinDescP {
    color: #FFF;
    font-size: 16px;
    line-height: 18px;
    height: 36px;
    overflow: hidden;
    max-width: 700px;
} 
.rowCreatedDate {
    font-size: 14px;
    color: #FFF;
    margin-left: 10px;
}
.tagRowCon {
    padding: 5px 10px;
    background-color: #FFF;
    border-radius: 5px;
}
.tagRowCon p {
    font-size: 14px;
    color: #000;
}

/* Blog Row */
.blogRow {
    display: flex;
    padding: 10px;
    border: 1px solid #EAEAEA;
    border-radius: 10px;
    margin-bottom: 10px;
    text-decoration: none;
    transition: 0.3s;
    cursor: default;
} 
.blogRow:hover {
    box-shadow: 0px 0px 28px rgba(0, 0, 0, 0.1);
}
.blogRow:last-child {
    margin-bottom: 0;
}
.rowImgCon {
    width: 200px;
    min-width: 200px;
    background-size: cover;
    background-repeat: none;
    background-position: center;
    border-radius: 10px;
}
.rowContent {
    padding: 10px 10px 10px 20px;
} 
.rowContent .btnStyle1 {
    display: block;
    margin-top: 10px;
    width: 160px;
    text-align: center;
    text-decoration: none;
}
.topRow {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}
.tagCon {
    padding: 5px 10px;
    background-color: #1E63EB;
    border-radius: 5px;
    text-align: center;
}
.tagCon p {
    font-size: 14px;
    color: #FFF;
}
.createdDate {
    font-size: 14px;
    color: #939393;
    margin-left: 10px;
}
.rowTitleP {
    font-size: 16px;
    line-height: 18px;
    max-height: 36px;
    overflow: hidden;
    font-weight: bold;
    margin-bottom: 5px;
} 
.rowDescP {
    font-size: 16px;
    line-height: 18px;
    height: 36px;
    overflow: hidden;
} 

/* Media Queries */
@media only screen and (max-width: 700px) {
    .rowImgCon {width: 100px; min-width: 100px;}
    .rowContent .btnStyle1 {display: none;}
    .pinnedBlog {height: 250px;}
}
@media only screen and (max-width: 500px) {
    .rowContent {flex-wrap: wrap-reverse; padding: 0 0 0 10px;}
    .rowContent .topRow {flex-direction: column; align-items: flex-start;}
    .rowContent .createdDate {display: none;}
    .rowTitleP {height: 36px; max-height: 36px;}
    
}
</style>