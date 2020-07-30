<template>
    <div class="container-apoiador">
        <form-apoiador></form-apoiador>
    </div>
</template>
<script>
import formCadastro from '@/components/componentsTela/componenteApoiador/FormApoiador.vue';

export default {
    name: 'cadastro apoiador',
    components:{
        'form-apoiador':formCadastro
    },
    data(){
        return {
            msg: 'Page do meetup Eduta'
        }
    }
}
</script>
<style scoped>
.container-apoiador{
    background: #d82e52;
    float: left;
    width: 100%;
    margin-top: 0.5%;
}
</style>