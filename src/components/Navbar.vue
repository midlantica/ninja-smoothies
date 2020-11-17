<template>
  <div class="nav marB3">
    <nav class="nav-extended indigo">
      <div class="nav-content">
        <router-link :to="{ name: 'Index' }">
          <span class="nav-title">Ninja Smoothies</span>
        </router-link>
        <a href="#" class="btn-floating btn-large halfway-fab pink lighten-1">
          <router-link :to="{ name: 'AddSmoothie' }">
            <i class="material-icons add">add</i>
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

  .nav .add:hover {
    background: var(--gray800);
  }

</style>
