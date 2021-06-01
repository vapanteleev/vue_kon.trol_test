<template>
  <div class="Category1" >

    

    <h1>{{ msg }}</h1>
    <div v-for="user in users" :key="user.id">
      <div  class="picdiv"  >
        <hr>  <router-link :to="{name: 'moreAbout', params:{id:user.id}}" v-bind:class="{active:isActive, unActive:unActive}"><button class="butt"  >more</button></router-link>

      <img :src="user.url" alt="" class="pic" @mouseover="activeClass"  @click="unActiveClass" v-if="dataReady">
            <div v-else class="lds-circle"><div></div></div>


     <hr>
     </div>
      </div>

  </div>
</template>

<script>
/*
import { mapGetters } from 'vuex'; //This is 
another method for mapGetters Helper
*/
export default {
  name: "Category1",
  
  data() {
    return {
      msg: "Welcome to Category1",
      isActive:false,
      unActive:true,
      dataReady:false,
     
    };
  },
  computed: {
    
   
    users(){
        return this.$store.state.users.slice(0, 6) 
    }
  },
   async mounted(){

      
      await this.$store.dispatch("getUsers")
      setTimeout(this.isReady,500)


 
  
   },
  methods:{
    isReady(){
            this.dataReady=true

     
    },
    activeClass(e){
       


      // this.isActive=true
      // this.unActive=false
      e.target.previousElementSibling.className='isActive'





    },
    unActiveClass(e){
      // this.isActive=false
      // this.unActive=true
            e.target.previousElementSibling.className='unActive'



    },


  }

};
</script>

<style>

.butt{
height:200px;
width:200px;
  position: absolute;
  margin-left: 100px;
margin-top:100px;

}
.unActive{

 position:absolute;
 visibility:hidden;

}
.isActive {


 visibility:visible;
}

.abs{

 position:absolute;
}

img{
width:300px;
height: 300px;



}
.lds-circle {
  display: inline-block;
  transform: translateZ(1px);
}
.lds-circle > div {
  display: inline-block;
  width: 64px;
  height: 64px;
  margin: 8px;
  border-radius: 50%;
  background:coral;
  animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}
@keyframes lds-circle {
  0%, 100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }
}
</style>

