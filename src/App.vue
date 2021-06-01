<template>
  <div id="app">
    
    <nav>  <button @click="$router.push({name:'aboutme'})">About Me</button> ||
 <button @click="$router.push({name:'mystore'})">Store</button> ||
  Victor Panteleev ||
  panteleevvitja32@gmail.com||
  <img src="https://sun9-51.userapi.com/impg/nlpaQkXTiseMYrUA6nBmWpvmVasDL44jW0DmKA/rPWRses46Zk.jpg?size=1920x1920&quality=96&sign=6e6bcf439d5a4d19071a823b0051ecfd&type=album" alt="" class="avatar">
  </nav>





<router-view>
  
</router-view>


  </div>
</template>

<script>



export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style >

.avatar{
  height:100px;
  width:100px;
}
</style>