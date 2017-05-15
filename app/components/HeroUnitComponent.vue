<template>
  <div id="hero-unit">
    <header :class="classObj">
      <div class="container">
        <slot v-if="hasHead" name="heroHead"></slot>
        <slot name="heroBody"></slot>
        <slot v-if="hasFoot"name="heroFoot"></slot>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'hero-unit',
  props: {
    style: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
    isBold: {
      type: Boolean,
      default: false
    },
    hasHead: {
      type: Boolean,
      default: false
    },
    hasFoot: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classObj() {
      const classes = ['hero']
      if(this.style) {
        classes.push(`is-${this.style}`)
      }
      if(this.size) {
        classes.push(`is-${this.size}`)
      }
      if(this.isBold) {
        classes.push(`is-bold`)
      }
      return classes
    }
  }
}
</script>

<style lang="sass">
  .hero
    &.is-dark .menu-label,
    &.is-black .menu-label,
    &.is-primary .menu-label,
    &.is-success .menu-label,
    &.is-info .menu-label,
    &.is-danger .menu-label
      color: white

    &.is-warning .menu-label,
    &.is-light .menu-label,
    &.is-white .menu-label
      color: black

    &.is-primary .menu-list a:hover
      background-color: #ffffff
      color: #00d1b2

    &.is-success .menu-list a:hover
      background-color: #ffffff
      color: #23d160

    &.is-info .menu-list a:hover
      background-color: #ffffff
      color: #3273dc

    &.is-warning .menu-list a:hover
      background-color: rgba(0, 0, 0, 0.7)
      color: #ffdd57

    &.is-danger .menu-list a:hover
      background-color: #ffffff
      color: #ff3860

    &.is-primary hr:not(.spacer),
    &.is-success hr:not(.spacer),
    &.is-info hr:not(.spacer),
    &.is-danger hr:not(.spacer)
      background-color: #ffffff

    &.is-warning hr:not(.spacer)
      background-color: rgba(0, 0, 0, 0.7)
</style>
