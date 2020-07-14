<template>
  <div class="container">
    <banner-home></banner-home>
    <linha-design></linha-design> 
  </div>
</template>

<script>
import bannerHome from '@/components/componentsTela/BannerHome.vue';
import linhaDesign from '@/components/componentsDesign/Linha.vue';

export default {
  name: 'Home',
  components: {
    'banner-home': bannerHome,
    'linha-design': linhaDesign
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
