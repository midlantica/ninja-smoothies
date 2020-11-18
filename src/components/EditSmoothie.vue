<template>
  <div v-if="smoothie" class="container edit-smoothie">
    <h4>Edit Smoothie: {{ smoothie.title }}</h4>

    <form @submit.prevent="editSmoothie">

      <div class="field title">
        <label for="title">Smoothie Title</label>
        <input type="text"
          name="title"
          placeholder="Title"
          v-model="smoothie.title"
        >
      </div>

      <div class="field" v-for="(ing, index) in smoothie.ingredients" :key="index">
        <label for="ingredient">Ingredient:</label>
        <input type="text"
          name="ingredient"
          placeholder="Ingredient"
          v-model="smoothie.ingredients[index]"
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
        <button class="btn pink marT1">Update Smoothie</button>
      </div>

    </form>

  </div>
</template>

<script>
  import db from '@/firebase/init'
  import slugify from 'slugify'

  export default {
    name: 'EditSmoothie',
    data() {
      return {
        smoothie: null,
        another: null,
        feedback: null,
      }
    },
    methods: {
      editSmoothie() {
        //console.log(this.smoothie.title, this.smoothie.ingredients);
        if(this.smoothie.title){
          this.feedback = null
          // create slug from Title
          this.smoothie.slug = slugify(this.smoothie.title, {
            replacement: '-',
            remove: /[$*_+~.()'"!\-:@]/g,
            lower: true
          })
          //console.log(this.slug);
          db.collection('smoothies').doc(this.smoothie.id).update({
            title: this.smoothie.title,
            ingredients: this.smoothie.ingredients,
            slug: this.smoothie.slug,
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
          this.smoothie.ingredients.push(this.another)
          console.log(this.title, this.ingredients)
          this.another = null
          this.feedback = null
        } else {
          this.feedback = "Enter a value :) !"
        }
      },
      deleteIng(ing) {
        this.smoothie.ingredients = this.smoothie.ingredients.filter(ingredient => {
          return ingredient !== ing
        })
      }
    },
    created() {
      let ref = db.collection('smoothies').where('slug', '==', this.$route.params.smoothie_slug)
      ref.get().then(snapshot => {
        snapshot.forEach(doc => {
          //console.log(doc.data());
          this.smoothie = doc.data()
          this.smoothie.id = doc.id

        })
      })
    }
  }
</script>

<style scoped>
  .edit-smoothie {
    margin-top: 3rem;
    max-width: 30rem;
  }

  .edit-smoothie label {
    font-size: 1rem;
    color: var(--gray500);
    font-weight: 300;
    letter-spacing: 0.025rem;
  }

  .edit-smoothie .field {
    position: relative;
  }

  .edit-smoothie .delete {
    position: absolute;
    right: 0;
    bottom: 1.3rem;
    color: var(--gray700);
    font-size: 1.5rem;
    cursor: pointer;
  }

</style>
