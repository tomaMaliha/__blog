<template>
    <div>
    <section class="content">
      <div class="container-fluid">
        <div class="row row justify-content-around">
         
          <div class="col-md-6">
          
            <div class="card card-success">
              <div class="card-header">
                <h3 class="card-title">Edit Category</h3>
              </div>
              
              <form role="form" @submit.prevent="updateCategory()">
                <div class="card-body">
                  <div class="form-group">
                    <label for="categoryId">Edit Category</label>
                    <input type="text" class="form-control" id="exampleInputEmail1"
                     placeholder="Edit Category" v-model="form.name" 
                     :class="{ 'is-invalid': form.errors.has('name') }">
                     <has-error :form="form" field="name"></has-error>
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
    mounted(){
        axios.get(`/editcategory/${this.$route.params.categoryid}`)
            .then((response)=>{
                this.form.fill(response.data.category)
            })
        },
    data(){
      return {
        form : new Form(
        {
          name: ''
        })
      }
    },
    methods: {
          updateCategory(){
            this.form.post(`/updatecategory/${this.$route.params.categoryid}`)
            .then((response)=>
            {
              this.$router.push('/category_list') 

              Toast.fire({
                icon: 'success',
                title: 'Category Updated successfully'
              })
            })
            .catch(()=>{

            })
          }
    }
}
</script>

<style scoped>
   
</style>