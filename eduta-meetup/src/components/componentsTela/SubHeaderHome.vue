<template>
    <div class="container-sub-nav">
        <div class="row">
          <div class="title-sub-nave">Acessar</div>
          <div class="title-sub-nave">Tornar Apoiador</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'SubHeaderHome',
  data () {
    return {
      msg: 'Page do meetup Eduta'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container-sub-nav{
    float: right;
    width: 100%;
    background: whitesmoke;
}
.row{
    float: right;
    width: 30%;
}
.title-sub-nave{
    float: right;
    padding: 2% 4%;
    font-size: 12px;
    transition: 0.5s;
}
.title-sub-nave:hover{
  background: #f9f9c7;
  transform: scale(1.0);
}
</style>
