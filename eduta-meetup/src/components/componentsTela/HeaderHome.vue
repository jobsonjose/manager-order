<template>
  <div class="container-nave">
      <div class="row">
          <div class="title-nave"></div>
          <div class="title-nave">Equipe</div>
          <div class="title-nave">Forum</div>
          <div class="title-nave">Apresentações</div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderHome',
  data () {
    return {
      msg: 'Page do meetup Eduta'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row{
    float: left;
    width: 100%;
}
.title-nave{
    float: left;
    padding: 0.5% 9%;
    color: white;
    transition: 1s;
}
.container-nave{
    width: 100%;
    float: left;
    background: #d82e52;
}
.title-nave:hover{
  color: rgba(247, 223, 106, 0.77);

}
</style>
