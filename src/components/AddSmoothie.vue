<template>
  <div class="container add-smoothie">
    <h4 class="center-align indigo-text">Add New Smoothie Recipe</h4>
    <form @submit.prevent="AddSmoothie">
      <div class="field title">
        <label for="title">Smoothie Title</label>
        <input type="text" name="title" placeholder="Title" v-model="title">
      </div>

      <div class="field add-ingredient">
        <label for="add-ingredient">Add an Ingredient</label>
        <input type="text" name="add-ingredient" placeholder="Ingredient">
      </div>

      <div class="field center-align marT2">
        <button class="btn pink">Add Smoothie</button>
      </div>
    </form>
  </div>

</template>

<script>
export default {
  name: 'AddSmoothie',
  data(){
    return {
      title: null
    }
  },
  methods: {
    AddSmoothie(){
      console.log(this.title)
    }
  }
}
</script>

<style>
  .add-smoothie {
    margin-top: 3rem;
    max-width: 30rem;
  }

  .add-smoothie label {
    font-size: 1rem;
    color: var(--gray500);
    font-weight: 300;
    letter-spacing: 0.025rem;
  }


</style>
