<template>
  <div class="container-nave">
      <div class="row">
          <div v-on:click="principal()" class="title-nave">Logo-Principal</div>
          <div v-on:click="equipes()" class="title-nave">Equipe</div>
          <div v-on:click="forum()" class="title-nave">Forum</div>
          <div v-on:click="apresentacao()" class="title-nave">Apresentações</div>
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
  },
  methods:{
    principal(){
      this.$router.push("/");
    },
    equipes(){
      this.$router.push("/equipe");
    },
    forum(){
      this.$router.push("/forum");
    },
    apresentacao(){
      this.$router.push("/apresentacao");
    }
  }
}
</script>

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
