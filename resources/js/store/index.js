import Axios from "axios"

export default {
    state: 
    {
        category: [],
        post: [],
        blogpost: [],
        singlePost: [],
        allCategories: [],
    },
    getters: {
        getCategory(state){
            return state.category
        },
        getAllPost(state){
            return state.post
        },
        getBlogPost(state){
            return state.blogpost
        },
        singlePost(state){
            return state.singlePost
        },
        allCategories(state)
        {
            return state.allCategories
        }
    },
    actions:
    {
        allCategory(context)
        {
            axios.get('/category')
            .then((response)=>{
                context.commit('categories',response.data.categories)
            })
        },
        getAllPost(context)
        {
            axios.get('/post')
            .then((response)=>
            {
                context.commit('allpost' , response.data.posts)
            })
        },
        getBlogPost(context)
        {
            axios.get('/blogpost')
            .then((response)=>
            {
                context.commit('getBlogPost' , response.data.posts)
            })
        },
        getPostById(context,payload)
        {
            axios.get('/singlePost/'+payload)
            .then((response)=>
            {
                context.commit('singlePost' , response.data.post)
            })
        },
        allCategories(context)
        {
            axios.get('/categories')
            .then((response)=>
            {
                context.commit('allCategories' , response.data.categories)
            })
        },
        getPostById(context,payload)
        {
            axios.get('/categorypost/'+payload)
            .then((response)=>
            {
                context.commit('getPostById' , response.data.posts)
            })
        },
        searchPost(context,payload)
        {
            axios.get('/search?s='+payload)
            .then((response)=>
            {
                context.commit('getSearchPost' , response.data.posts)
            })
        }
    },

    mutations:
    {
        categories(state,data){
            return state.category = data
        },
        allpost(state,payload){
            return state.post = payload
        },
        getBlogPost(state,payload){
            return state.blogpost = payload
        },
        singlePost(state,payload){
            return state.singlePost = payload
        },
        allCategories(state,payload){
            return state.allCategories = payload
        },
        getPostById(state,payload)
        {
            return state.blogpost = payload
        },
        getSearchPost(state,payload)
        {
            return state.blogpost = payload
        }
    }
}