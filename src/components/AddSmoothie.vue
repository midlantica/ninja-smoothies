<template>
  <div class="container add-smoothie">
    <h4 class="center-align indigo-text">Add New Smoothie Recipe</h4>
    <form @submit.prevent="AddSmoothie">

      <div class="field title">
        <label for="title">Smoothie Title</label>
        <input type="text"
          name="title"
          placeholder="Title"
          v-model="title"
        >
      </div>

      <div class="field" v-for="(ing, index) in ingredients" :key="index">
        <label for="ingredient">Ingredient:</label>
        <input type="text"
          name="ingredient"
          placeholder="Ingredient"
          v-model="ingredients[index]"
        >
        <i class="material-icons delete" @click="deleteIng(ing)">clear</i>
      </div>

      <div class="field add-ingredient">
        <label for="add-ingredient">Add an Ingredient</label>
        <input type="text"
          name="add-ingredient"
          placeholder="Ingredient"
          @keydown.prevent.tab="addIng"
          v-model="another"
        >
      </div>

      <div class="field center-align marT1">
        <p v-if="feedback" class="red-text">{{feedback}}</p>
        <button class="btn pink marT1">Add Smoothie</button>
      </div>
    </form>
  </div>

</template>

<script>
  import db from '@/firebase/init';
  import slugify from 'slugify'

  export default {
    name: 'AddSmoothie',
    data(){
      return {
        title: null,
        another: null,
        ingredients: [],
        feedback: null,
        slug: null
      }
    },
    methods: {
      AddSmoothie(){
        //console.log(this.title, this.ingredients)
        if(this.title){
          this.feedback = null
          // create slug from Title
          this.slug = slugify(this.title, {
            replacement: '-',
            remove: /[$*_+~.()'"!\-:@]/g,
            lower: true
          })
          console.log(this.slug);
          db.collection('smoothies').add({
            title: this.title,
            ingredients: this.ingredients,
            slug: this.slug,
          }).then(() => {
            this.$router.push({ name: 'Index' })
          }).catch(err=> {
            console.log(err);
          })
        } else {
          this.feedback = "You must enter a Smoothie title"
        }
      },
      addIng() {
        if(this.another){
          this.ingredients.push(this.another)
          console.log(this.title, this.ingredients)
          this.another = null
          this.feedback = null
        } else {
          this.feedback = "Enter a value :) !"
        }
      },
      deleteIng(ing) {
        this.ingredients = this.ingredients.filter(ingredient => {
          return ingredient !== ing
        })
      }
    }
  }
</script>

<style scoped>
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

  .add-smoothie .field {
    position: relative;
  }

  .add-smoothie .delete {
    position: absolute;
    right: 0;
    bottom: 1.3rem;
    color: var(--gray700);
    font-size: 1.5rem;
    cursor: pointer;
  }

</style>
