<template>
  <div id="blog">
    <hero-unit style="primary" size="medium">
      <div class="container">
        <div class="columns is-vcentered">
          <div class="column">
            <h3 class="title">Blog</h3>
            <h4 class="subtitle">Stay updated about new features, bug fixes, and releases</h4>
            <a class="button is-primary is-inverted" href="/atom.xml">
              <span class="icon">
                <i class="fa fa-rss"></i>
              </span>
              <span>Subscribe</span>
            </a>
          </div>
        </div>
      </div>
    </hero-unit>
    <router-view>
      <section v-for="post in posts" class="section">
        <div class="container">
          <div class="columns">
            <div class="column is-4">
              <h2><router-link :to="post.route" exact>{{ post.title }}</router-link></h2>
              <h5>Posted: {{ formattedDate(post.date) }}</h5>
            </div>
            <div class="column is-8">
              <div class="content">{{ post.content }}</div>
            </div>
          </div>
        </div>
      </section>
    </router-view>
  </div>
</template>

<script>
import HeroUnitComponent from '../../components/HeroUnitComponent.vue'
import moment from 'moment'

export default {
  name: 'blog',
  components: {
    'hero-unit': HeroUnitComponent
  },
  data() {
    return {
      posts: [
        {route: '/blog/05-16-2017/hello-world', title: 'Hello World!', date: '05/16/2017', content: `<h1>Hello World!</h1>`},
        {route: '/blog/05-16-2017/hello-world', title: 'Hello World!', date: '05/16/2017', content: `<h1>Hello World!</h1>`},
        {route: '/blog/05-16-2017/hello-world', title: 'Hello World!', date: '05/16/2017', content: `<h1>Hello World!</h1>`}]
    }
  },
  methods: {
    formattedDate(date) {
      return moment(date).format('MMM Do, YYYY');
    }
  }
}
</script>

<style lang="sass">
</style>
