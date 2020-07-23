import adminHome from "./components/admin/adminHome.vue"
import CategoryList from "./components/admin/category/listCat.vue"
import addCategory from "./components/admin/category/newCat.vue"
import editCategory from "./components/admin/category/editCat.vue"

//post
import PostList from "./components/admin/post/listPost.vue"
import addPost from "./components/admin/post/newPost.vue"
import editPost from "./components/admin/post/editPost.vue"

//frontend component
import publicHome from "./components/public/publicHome.vue"
import blogPost from "./components/public/blog/blogPost.vue"
import singleBlog from "./components/public/blog/singleBlog.vue"

export const routes = [
    { 
        path: '/home', 
        component: adminHome
    },
    { 
        path: '/category_list', 
        component: CategoryList
    },
    { 
        path: '/add_category', 
        component: addCategory
    },
    { 
        path: '/edit_category/:categoryid', 
        component: editCategory
    },

    //post
    { 
        path: '/post_list', 
        component: PostList
    },
    { 
        path: '/add_post', 
        component: addPost
    },
    {
        path:'/edit_post/:postid',
        component:editPost
    },

    //frontend
    { 
        path: '/', 
        component: publicHome
    },
    { 
        path: '/blog', 
        component: blogPost
    },
    { 
        path: '/blog/:id', 
        component: singleBlog
    },
    { 
        path: '/categories/:id', 
        component: blogPost
    },


  ]