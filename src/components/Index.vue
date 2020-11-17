<template>
  <div class="index container">
    <div class="card" v-for="smoothie in smoothies" :key="smoothie.id">
      <div class="card-content">
        <i class="material-icons delete"
          @click="deleteSmoothie(smoothie.id)"
        >delete</i>
        <h4 class="indigo-text">{{ smoothie.title }}</h4>
        <ul class="ingredients">
          <li v-for="(ing, index) in smoothie.ingredients" :key="index">
            <span class="chip">{{ ing }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import db from '@/firebase/init';
  export default {
    name: 'Index',
    data () {
      return {
        smoothies: []
      }
    },
    methods: {
      deleteSmoothie(id) {
        // delete doc from firestore
        db.collection('smoothies').doc(id).delete()
        .then(() => {
          this.smoothies = this.smoothies.filter(smoothie => {
            return smoothie.id != id
          })
        })
        // console.log('id', id)
      }
    },
    created() {
      // fetch data from firestore
      db.collection('smoothies').get()
      .then(snapshot => {
        snapshot.forEach(doc =>{
          //console.log(doc.data(), doc.id)
          let smoothie = doc.data()
          smoothie.id = doc.id
          this.smoothies.push(smoothie)
        })
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .index {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-gap: 1.5rem;
  }

  .index .card {
    margin: initial;
  }
  .index h4 {
    font-size: 1.5rem;
    text-align: center;
    margin-top: 0;
  }

  .index .ingredients {
    margin: 2rem auto;
  }

  .index .ingredients li {
    display: inline-block;
  }

  .index .delete {
    position: absolute;
    top: 1rem;
    right: 1rem;
    cursor: pointer;
    color: var(--gray300);
  }

  .index .delete:hover {
    color: var(--gray600);
  }

</style>
