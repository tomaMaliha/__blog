<template>
    <div>
    <section class="content">
      <div class="container-fluid">
        <div class="row row justify-content-around">
         
          <div class="col-md-10">
          
            <div class="card card-success">
              <div class="card-header">
                <h3 class="card-title">Edit Post</h3>
              </div>
              
              <form role="form" enctype="multipart/form-data" @submit.prevent="change()">
                <div class="card-body">
                  <div class="form-group">
                    <label for="postId">Update Post</label>

                        <input type="text" class="form-control" id="postId"
                        placeholder="Add New Post" v-model="form.title" 
                        :class="{ 'is-invalid': form.errors.has('title') }">
                        <has-error :form="form" field="title"></has-error>

                  </div>

                  <div class="form-group">
                    <label for="postId">Add New Post</label>

                        
                        <markdown-editor v-model="form.description"></markdown-editor>
                        <has-error :form="form" field="description"></has-error>

                  </div>

                  <div class="form-group">
                    <label for="postId">Select Category</label>
                        <select class="form-control" :class="{ 'is-invalid': form.errors.has('cat_id') }"
                         v-model="form.cat_id">
                            <option disabled value="">Select One</option>
                            <option :value="category.id" v-for="(category,index) in getallCategory" 
                            :key="index">option {{category.name}}</option>
                            </select>
                        <has-error :form="form" field="cat_id"></has-error>

                  </div>

                  <div class="form-group">
                    <label for="postId">Image</label>
                        <input @change="changeimage($event)" type="file"
                         :class="{ 'is-invalid': form.errors.has('image') }">
                          <img :src="updateImage()" alt="" width="80" height="80">
                        <has-error :form="form" field="image"></has-error>

                  </div>
                </div>
                <div class="card-footer">
                  <button type="submit" class="btn btn-success">Update</button>
                </div>
              </form>
            </div>
          
        </div>

        </div>
      </div>
    </section>
    
    </div>
</template>

<script>
export default {
    name: "Edit",
    data()
    {
        return{
            form: new Form(
                {
                    title:'',
                    description:'',
                    cat_id:'',
                    image:'',
                }
            )
        }
    },
    mounted() {
         this.$store.dispatch("allCategory")
    },
    created()
    {
        axios.get(`post/${this.$route.params.postid}`)
        .then((response)=>
        {
            this.form.fill(response.data.post)
        })
    },
    computed: {
        getallCategory()
      {
        return this.$store.getters.getCategory
      }
    },
    methods:
    {
        changeimage(event)
        {
            let file = event.target.files[0];
            if(file.size>1048576)
            {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: '<a href>Why do I have this issue?</a>'
                    })
            }
            else{
                let reader = new FileReader();
            reader.onload = event => 
            {
                this.form.image = event.target.result
                
            };
             reader.readAsDataURL(file);
            }
            
        },

        change(){
            this.form.post(`/update/${this.$route.params.postid}`)
              .then(()=>{
              this.$router.push('/post_list')
              Toast.fire({
                type: 'success',
                title: 'Post Updated successfully'
              })
        })
        .catch(()=>{
        })
      },
        updateImage(){
            let img = this.form.image;
            if(img.length>100){
                return this.form.image
            }else{
                return `/uploadimage/${this.form.image}`
            }
        }
    }
}
</script>


<style lang="stylus" scoped>

</style>