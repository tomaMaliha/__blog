<template>
    <div>
    <section class="content">
      <div class="container-fluid">
        <div class="row row justify-content-around">
         
          <div class="col-md-6">
          
            <div class="card card-success">
              <div class="card-header">
                <h3 class="card-title">Add New Category</h3>
              </div>
              
              <form role="form" @click.prevent="addCategory()">
                <div class="card-body">
                  <div class="form-group">
                    <label for="categoryId">Add New Category</label>
                    <input type="text" class="form-control" id="exampleInputEmail1"
                     placeholder="Add New Category" v-model="form.name" 
                     :class="{ 'is-invalid': form.errors.has('name') }">
                     <has-error :form="form" field="name"></has-error>
                  </div>
                </div>
                <div class="card-footer">
                  <button type="submit" class="btn btn-success">Submit</button>
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
    name: "New",
    data()
    {
      return{
        form : new Form(
        {
          name: '',
        })
      }
    },
    methods: {
          addCategory(){
            this.form.post('/add_category')
            .then((response)=>
            {
              this.$router.push('/category_list')

              Toast.fire({
                icon: 'success',
                title: 'Category Added successfully'
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