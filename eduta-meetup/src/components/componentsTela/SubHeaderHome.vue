<template>
    <div class="container-sub-nav">
        <div class="row">
          <div v-on:click="acessoTela()" class="title-sub-nave">Acessar</div>
          <div v-on:click="apoiadorTela()" class="title-sub-nave">Tornar Apoiador</div>
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
  },
  methods:{
    apoiadorTela(){
      this.$router.push("/apoiador");
    },
    acessoTela(){
      this.$router.push("/acesso");
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
    cursor: copy;
}
.title-sub-nave:hover{
  background: #f9f9c7;
  transform: scale(1.0);
}
</style>
