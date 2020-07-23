<template>
    <span id="singleBlog">

    <section id="content">
      <div class="container">
        <div class="row">
          <div class="span8">
            <article>
              <div class="row">
                <div class="span8">
                  <div class="post-image">
                    <div class="post-heading">
                      <h3><a href="#">{{singlePost.title}} </a></h3>
                      {{singlePost.title}}
                    </div>
                  
                    <img :src="`uploadimage/${singlePost.image}`" alt="" />
                  </div>
                  <p>
                    
                    </p>
                  {{singlePost.description}}
                  <div class="bottom-article">
                    <ul class="meta-post">
                      <li v-if="singlePost.user"><i class="icon-user"></i>
                      {{singlePost.user.name}}<a href="#"> </a></li>
                      <li v-if="singlePost.category"><i class="icon-user"></i>
                      {{singlePost.category.name}}<a href="#"> </a></li>
                    </ul>
                  </div>
                </div>
                
              </div>
             
            </article>
            
          </div>
           <BlogSideBar></BlogSideBar>
        </div>
      </div>
    </section>


    </span>
</template>

<script>
import BlogSideBar from "./sideBar.vue"
export default {
    name: "blogPost",
    components:
    {
        BlogSideBar
    },
    mounted()
    {
        this.$store.dispatch('getPostById',this.$route.params.id);
    },
    computed:
    {
        singlePost()
        {
            return this.$store.getters.singlePost
        }
    },
    methods:
    {

    }
}
</script>

<style scoped>

</style>