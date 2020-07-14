<template>
    <div class="container-linha">
      <div class="linha-design"></div>
      <div class="linha-design"></div>
      <div class="linha-design"></div>
    </div>
</template>

<script>

export default {
  name: 'Linha',
  data () {
    return {
      msg: 'Page do meetup Eduta'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-linha{
  width: 100%;
  margin-top: 2%;
  float: left;
}
.linha-design{
    width: 100%;
    height: 10px;
    float: left;
    background: #d82e52;
    margin-top: 1%;
}
</style>
