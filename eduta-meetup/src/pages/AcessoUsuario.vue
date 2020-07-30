<template>
    <div class="container-acesso">
        <div-acesso></div-acesso>
        <div-cadastro></div-cadastro>
    </div>
</template>
<script>
import Acesso from '@/components/componentsTela/ComponenteUsuario/Acesso.vue';
import Cadastro from '@/components/componentsTela/ComponenteUsuario/Cadastro.vue';

export default {
    name: "AcessoUsuario",
    components:{
        'div-acesso': Acesso,
        'div-cadastro': Cadastro
    },
    data(){
        return {
            msg: 'Page do meetup Eduta'
        }
    }    
}
</script>
<style scoped>
.container-acesso{
    background: #d82e52;
    float: left;
    width: 100%;
    margin-top: 0.5%;
}
</style>