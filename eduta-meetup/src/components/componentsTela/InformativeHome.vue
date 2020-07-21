<template>
    <div class="container-card-home">
        <card-design description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ullam id officia animi dolorum neque mollitia a deleniti architecto ipsam et iste, 
        quisquam quod necessitatibus incidunt itaque quam! Possimus, quibusdam ab." image="https://imagens-revista-pro.vivadecora.com.br/uploads/2018/06/reuniao-de-equipe-como-fazer-768x403.jpg"></card-design>
        <card-design description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ullam id officia animi dolorum neque mollitia a deleniti architecto ipsam et iste, 
        quisquam quod necessitatibus incidunt itaque quam! Possimus, quibusdam ab." image="https://imagens-revista-pro.vivadecora.com.br/uploads/2018/06/reuniao-de-equipe-como-fazer-768x403.jpg"></card-design>
        <card-design description="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Ullam id officia animi dolorum neque mollitia a deleniti architecto ipsam et iste, 
        quisquam quod necessitatibus incidunt itaque quam! Possimus, quibusdam ab." image="https://imagens-revista-pro.vivadecora.com.br/uploads/2018/06/reuniao-de-equipe-como-fazer-768x403.jpg"></card-design>
    </div>
</template>
<script>
import CardDesign from '@/components/componentsDesign/Card.vue'
export default {
    name: 'InformativeHome',
    components:{
        'card-design': CardDesign
    },
    data(){
        return{
            msg: 'Page do meetup Eduta'
        }
    }    
}
</script>
<style scoped>
.container-card-home{
    min-width: 100%;
}
</style>