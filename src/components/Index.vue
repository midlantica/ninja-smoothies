<template>
  <div class="index container">
    <div class="card" v-for="smoothie in smoothies" :key="smoothie.id">
      <div class="card-content">
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
export default {
  name: 'Index',
  data () {
    return {
      smoothies: [
        { id: 1, title: 'Ninja Brew', slug: 'ninja-brew', ingredients: ['bananas', 'coffee', 'milk'] },
        { id: 2, title: 'Tropical Punch', slug: 'ninja-brew', ingredients: ['mangos', 'melon', 'juice'] },
        { id: 3, title: 'Morning Mood', slug: 'ninja-brew', ingredients: ['strawberries', 'cream', 'rasberries'] }
      ]
    }
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

</style>
