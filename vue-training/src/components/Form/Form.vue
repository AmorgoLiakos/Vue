<script>
 export default {
  data() {
   return {
    form: {
      name: '',
      lastname: '',
      email: '',
      terms: false
    }
   }
  },
  methods: {
    submitForm(){
      console.log(this.form)
    }
  }
 }

</script>

<template>
  <section>
    <form @submit.prevent="submitForm">
      <input type="text" v-model="form.name" placeholder="Name...">
      <input type="text" v-model="form.lastname" placeholder="Lastname...">
      <input type="email" v-model="form.email" placeholder="Email...">
      <input type="checkbox" v-model="form.terms">
      <button :disabled="!form.terms">Submit</button>
    </form>
  </section>

</template>

<style scoped>

input {
  display: block;
  width: 50%;
  margin: 0 auto 30px;
  padding: 10px 20px;
  border-radius: 10px;
}
button {
  background-color: brown;
  color: #fff;
  padding: 10px 20px;
  border-radius: 10px;
  display: block;
  margin: 0 auto;
}

button:hover {
  background-color: #fff;
  color: brown;
  cursor: pointer;
}

button:disabled{
  background-color: grey;
  color: #000;
}

button:disabled:hover{
 cursor: default;
}
</style>