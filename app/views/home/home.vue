<template>
  <div id="home">
    <hero-unit size="fullheight">
    </hero-unit>
  </div>
</template>

<script>
import HeroUnitComponent from '../../components/HeroUnitComponent.vue'

export default {
  name: 'home',
  components: {
    'hero-unit': HeroUnitComponent
  }
}
</script>

<style lang="sass">
</style>
