<template>
  <nav-bar :hasShadow="true">
    <nav-list :left="true">
      <router-link class="nav-item" to="/" exact>
        <img src="http://bulma.io/images/bulma-logo.png" alt="Vue Bulma Site" />
      </router-link>
    </nav-list>

    <nav-toggle></nav-toggle>

    <nav-list :right="true" :menu="true">
      <router-link class="nav-item" to="/" exact>Home</router-link>
      <router-link class="nav-item" to="/docs" exact>Docs</router-link>
      <router-link class="nav-item" to="/blog" exact>Home</router-link>
    </nav-list>
  </nav-bar>
  <router-view></router-view>
  <hero-unit id="partner-unit" style="info" size="medium"></hero-unit>
  <hero-unit id="newsletter-unit" style="primary" size="medium"></hero-unit>
  <footer class="footer"></footer>
</template>

<script>
import NavbarComponent from './components/NavbarComponent.vue'
import NavToggleComponent from './components/NavToggleComponent.vue'
import NavListComponent from './components/NavListComponent.vue'
import HeroUnitComponent from './components/HeroUnitComponent.vue'

export default {
  components: {
    'nav-bar': NavbarComponent,
    'nav-toggle': NavToggleComponent,
    'nav-list': NavListComponent,
    'hero-unit': HeroUnitComponent
  }
}
</script>

<style lang="sass">
</style>
