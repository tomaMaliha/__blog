<template>
    <span id="sideBar">
        <div class="span4">
            <aside class="right-sidebar">
              <div class="widget">
                <form class="form-search">
                  <input @keyup="RealSearch" placeholder="Type something" type="text" v-model="keyword"
                  class="input-medium search-query">
                  <button type="submit" @clickprevent="RealSearch" class="btn btn-square btn-theme">Search</button>
                </form>
              </div>
              <div class="widget">
                <h5 class="widgetheading">Categories</h5>
                <ul class="cat">
                  <li v-for="(category,index) in allCategories" :key="index">
                    <i class="icon-angle-right"></i><router-link :to="`/categories/${category.id}`">
                     {{category.name}}</router-link><span> (20)</span></li>
                  </ul>
              </div>
              <div class="widget">
                <h5 class="widgetheading">Latest posts</h5>
                <ul class="recent">
                  <li v-for="(post,index) in blogpost" :key="index" >
                    <img :src="`uploadimage/${post.image}`" 
                    class="pull-left" alt="" width="100" height="100"/>
                    <h6><router-link :to="`/blog/${post.id}`">{{post.title}}</router-link></h6>
                    <p>
                      {{post.description | sortlength(100,"....")}}
                    </p>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
    </span>
</template>

<script>
import _ from 'lodash'
export default {
    name: "sideBar",
    data()
    {
      return{
        keyword: ''
      }
    },
    computed:
    {
      allCategories()
      {
        return this.$store.getters.allCategories
      },
      blogpost(){
            return this.$store.getters.getBlogPost
        }
    },
    mounted()
    {
      this.$store.dispatch('getBlogPost');
      this.$store.dispatch('allCategories');
    },
    methods:
    {
       RealSearch:_.debounce(function () {
         this.$store.dispatch('searchPost', this.keyword);
       }, 1000)
    }
}
</script>

<style scoped>

</style>