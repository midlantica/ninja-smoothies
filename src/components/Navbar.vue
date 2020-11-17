<template>
  <div class="nav">
    <nav class="nav-extended indigo darken-2">
      <div class="nav-content">
        <router-link to="#">
          <span class="nav-title">Ninja Smoothies</span>
        </router-link>
        <a href="#" class="btn-floating btn-large halfway-fab pink">
          <router-link to="#">
            <i class="material-icons">add</i>
          </router-link>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
export default {

}
</script>

<style>
  .nav-content {
    padding: 0 2rem;
  }

</style>
