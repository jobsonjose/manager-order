<template>
    <div class="container-footer">
        <div class="icon-footer">
            <img src="https://image.flaticon.com/icons/svg/265/265754.svg" alt="">
        </div>
        <div class="col-main">
            <ul>
                <li class="title-list">Projetistas</li>
                <li>Apoiador</li>
                <li>Projetos</li>
                <li>Como criar projetos ?</li>
            </ul>
        </div>
        <div class="col-secundary">
            <ul>
                <li class="title-list">Informações</li>
                <li>Deseja Trabalhar conosco ?</li>
                <li>Sobre</li>
                <li>Patrocinios</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: 'FooterHome',
    data(){
        return {
            msg: 'Page do meetup Eduta'
        }
    }
}
</script>
<style scoped>
.container-footer div{
    float: left;
}
.container-footer{
    width: 96%;
    float: left;
    background: #d82e52;
    padding: 2%;
    color: white;
}
li{
    list-style-type: none;
    padding: 5%
}
.col-main, .col-secundary{
    width: 25%;
    margin: 3% 5%;
}
.icon-footer{
    width: 10%;
    padding: 4%
}
.title-list{
    font-size:large;
    border-bottom: 1.8px solid white;
    padding: 3% !important;
}
</style>