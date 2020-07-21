<template>
  <div class="container">
    <banner-home></banner-home>
    <row-design></row-design>
    <info-home></info-home> 
    <about-home></about-home>
  </div>
</template>

<script>
import bannerHome from '@/components/componentsTela/BannerHome.vue';
import rowDesign from '@/components/componentsDesign/Row.vue';
import informativeHome from '@/components/componentsTela/InformativeHome.vue';
import aboutHome from '@/components/componentsTela/AboutHome.vue';

export default {
  name: 'Home',
  components: {
    'banner-home': bannerHome,
    'row-design': rowDesign,
    'info-home': informativeHome,
    'about-home': aboutHome
  },
  data () {
    return {
      msg: 'Page do meetup Eduta'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
