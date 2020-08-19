<template>
    <div class="container-cadastro">
        <div class="title-cadastro" >
            <h4>Cadastrar no Eduta</h4>
            <h5>Deseja ser membro de nosso sistema?</h5>
        </div>
        <div class="body-cadastro" >
            <form id="app"
            @submit="checkForm"
            action="https://vuejs.org/"
            method="post">
                <div class="row-form">
                    <input type="text" id="nomeUsuario" v-model="nomeUsuario" name="nomeUsuario" placeholder="Nome: ex Jobson Jose">
                </div>
                <div class="row-form">
                    <input type="text" id="emailUsuario" v-model="emailUsuario" name="emailUsuario" placeholder="Email: ex jjortb@gmail.com">
                </div>
                <div class="row-form">
                    <input type="text" id="confirmarUsuario" v-model="confirmarUsuario" name="confirmarUsuario" placeholder="Repetir email anterior">
                </div>
                <div class="row-form">
                    <input type="password" id="senhaUsuario" v-model="senhaUsuario" name="senhaUsuario" placeholder="xxxxxxxxxxx">
                </div>
                <div class="row-form">
                    <input type="password" id="confirmarSenhaUsuario" v-model="confirmarSenhaUsuario" name="confirmarSenhaUsuario" placeholder="Repetir senha anterior">
                </div>
                <div class="submit-form">
                    <button class="btn-form-usuario">Cadastrar</button>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    name: "Cadastro",
    data(){
        return{
            msg: 'Page do meetup Eduta'
        }
    },
    data:{
        nomeUsuario: null,
        emailUsuario: null,
        confirmarUsuario: null,
        senhaUsuario: null,
        confirmarSenhaUsuario: null,
        styleObject: {
            color: 'red',
            fontSize: '13px'
        }
    },
    methods:{
        cadastroUsuario(){
            this.statusCadastro = true;
            console.log(this.statusCadastro);
        },
        checkForm(){
            return 0;
        }
    },
    computed: {
        computedDisplay: function () {
            return this.diplayStatusBody;
        }
    }   
}
</script>
<style scoped>
.submit-form{
    margin: 5% 2%;
    text-align: left;
}
.title-cadastro{
    line-height: 0;
    text-align: left;
    padding: 1% 2%;
}
.container-cadastro{
    float: left;
    width: 45%;
    padding: 5% 1%;
}
.row-form{
    width: 77%;
    margin: 2% 0% 2%;
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
.btn-form-usuario{
    width: 30%;
}
.btn-evento-cadastro{
    width: 77%;
    margin: 4% 11.5%;
}
.btn-form-usuario, .btn-evento-cadastro{
    background: rgba(230, 189, 0, 0.77);
    border: 1px solid #d82e52;
    opacity: 0.7;
    color: white;
    padding: 1%;
    transition: 0.6s;
}
.btn-form-usuario:hover, .btn-evento-cadastro:hover{
    background: white;
    color: rgba(230, 189, 0, 0.77);
    border: 1px solid rgba(230, 189, 0, 0.77);
}

</style>