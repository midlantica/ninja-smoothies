<template>
  <div class="index container">
    <div class="card" v-for="smoothie in smoothies" :key="smoothie.id">
      <div class="card-content">
        <h2 class="indigo-text">{{ smoothie.title }}</h2>
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
<style scoped>

</style>
