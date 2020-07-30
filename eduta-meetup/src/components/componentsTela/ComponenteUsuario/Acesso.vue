<template>
    <div class="container-acesso">
        <div class="title-acesso">
            <h4>Entrar</h4>
            <h5>Deseja entrar no Eduta ?</h5>
        </div>
        <div class="body-acesso">
            <form id="app"
            @submit="checkForm"
            action="https://vuejs.org/"
            method="post">
                <div class="row-form">
                    <input type="text" id="emailUsuario" v-model="emailUsuario" name="emailUsuario" placeholder="Email: ex jjortb@gmail.com">
                </div>
                <div class="row-form">
                    <input type="password" id="senhaUsuario" v-model="senhaUsuario" name="senhaUsuario" placeholder="xxxxxxxxxxx">
                </div>
                <div class="submit-form">
                    <button class="btn-form-usuario">Acessar</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name: "Acesso",
    data(){
        return{
            msg: 'Page do meetup Eduta'
        }
    },
    data:{
        emailUsuario: String,
        senhaUsuario: String,
        
    }   
}
</script>
<style scoped>
.submit-form{
    margin: 2%;
}
.container-acesso{
    float: left;
}
.row-form{
    width: 50%;
    margin: 2% 25%;
}
.row-form input, .row-form textarea{
    width: 100%;
    padding: 2% 4%;
    border-radius: 30px;
    border: 2px solid rgba(249, 239, 193, 0.77);
    opacity: 0.7;
    box-shadow: 0 0 0 0;
    outline: 0;
}
.row-form input:hover, .row-form textarea:hover{
    border: 2px solid rgba(230, 189, 0, 0.77);
}
</style>