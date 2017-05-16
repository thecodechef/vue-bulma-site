<template>
  <div id="docs">
    <hero-unit style="primary" size="medium" :hasFoot="true">
      <div name="heroBody" class="hero-body">
        <div class="columns is-vcentered">
          <div class="column">
            <h2 class="title">Documentation</h2>
            <h4 class="subtitle">Everything you need to create a website with Bulma</h4>
          </div>
          <div class="column is-narrow">
            <div id="carbon" class="box">
              <script async="" type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&amp;serve=C6AILKT&amp;placement=bulmaio" id="_carbonads_js"></script><div id="carbonads"><span><span class="carbon-wrap"><a href="//srv.carbonads.net/ads/click/x/GTND4237CEADL23LCAA4YKQWF6BDL2JJC6BI4Z3JCEAIV27UCW7DCK3KC6BDL23YF67DEK3EHJNCLSIZZRLCP7I35MNFV?segment=placement:bulmaio;&amp;encredirect=https%3A%2F%2Fslack.com%2Fis%3Fcvosrc%3Ddisplay.carbon.plain%20dev%26utm_source%3Dcarbon%26utm_medium%3Ddisplay%26utm_campaign%3Dplain%20dev%26c3ch%3DCarbon%20Networks%26c3nid%3DPlain%20Dev" class="carbon-img" target="_blank"><img src="https://assets.servedby-buysellads.com/p/manage/asset/id/32052" alt="" border="0" height="100" width="130" style="max-width: 130px;"></a><a href="//srv.carbonads.net/ads/click/x/GTND4237CEADL23LCAA4YKQWF6BDL2JJC6BI4Z3JCEAIV27UCW7DCK3KC6BDL23YF67DEK3EHJNCLSIZZRLCP7I35MNFV?segment=placement:bulmaio;&amp;encredirect=https%3A%2F%2Fslack.com%2Fis%3Fcvosrc%3Ddisplay.carbon.plain%20dev%26utm_source%3Dcarbon%26utm_medium%3Ddisplay%26utm_campaign%3Dplain%20dev%26c3ch%3DCarbon%20Networks%26c3nid%3DPlain%20Dev" class="carbon-text" target="_blank">All the tools your team needs in one place. Slack: Where work happens.</a></span><a href="http://carbonads.net/" class="carbon-poweredby" target="_blank">ads via Carbon</a><img src="https://slack.sp1.convertro.com/view/vt/v1/slack/0/cvo.gif?cvosrc=display.carbon.plain dev&amp;utm_source=carbon&amp;utm_medium=display&amp;utm_campaign=plain dev" border="0" height="1" width="1" style="display: none;"><img src="https://569-img.c3tag.com/v.gif?cid=569&amp;c3ch=Carbon Networks&amp;c3nid=Plain Dev" border="0" height="1" width="1" style="display: none;"></span></div>
           </div>
          </div>
        </div>
      </div>
      <div name="heroFoot" class="hero-foot">
        <nav class="tabs is-boxed">
          <ul>
            <li><router-link to="/docs/overview/start" exact>Overview</router-link></li>
            <li><router-link to="/docs/modifiers/syntax" exact>Modifiers</router-link></li>
            <li><router-link to="/docs/grid/columns" exact>Grid</router-link></li>
            <li><router-link to="/docs/elements/box" exact>Elements</router-link></li>
            <li><router-link to="/docs/components/card" exact>Components</router-link></li>
            <li><router-link to="/docs/layout/container" exact>Layout</router-link></li>
          </ul>
        </nav>
      </div>
    </hero-unit>
    <router-view></router-view>
  </div>
</template>

<script>
import HeroUnitComponent from '../../components/HeroUnitComponent.vue'

export default {
  name: 'docs',
  components: {
    'hero-unit': HeroUnitComponent
  }
}
</script>

<style lang="sass">
</style>
