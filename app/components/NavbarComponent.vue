<template>
  <nav :class='classObj'>
    <slot></slot>
  </nav>
</template>

<script>
export default {
  name: 'navbar',
  props: {
    shadow: {
      type: Boolean,
      default: false
    },
    style: {
      type: String,
      default: ''
    }
  }
  computed: {
    classObj() {
      const classes = ['nav']
      if(this.shadow) {
        classes.push('has-shadow')
      },
      if(this.style) {
        classes.push(`is-${this.style}`)
      }
    }
  }
}
</script>

<style scoped="scoped" lang="sass">

.nav
  &.is-primary
    background-color: #00d1b2
    & a.nav-item,
    & .nav-item a
      color: rgba(255,255,255,0.7)

  &.is-success
    background-color: #23d160
    & a.nav-item,
    & .nav-item a
      color: rgba(255,255,255,0.7)

  &.is-info
    background-color: #3273dc
    & a.nav-item,
    & .nav-item a
      color: rgba(255,255,255,0.7)

  &.is-warning
    background-color: #ffdd57
    & a.nav-item,
    & .nav-item a
      color: rgba(0,0,0,0.7)

  &.is-danger
    background-color: #ff3860
    & a.nav-item,
    & .nav-item a
      color: rgba(255,255,255,0.7)

</style>
