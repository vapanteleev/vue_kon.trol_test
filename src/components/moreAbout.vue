<template>
  <div class="moreAbout">
    <h1>More about picture № {{url[url.length-1]}}</h1>
    <hr>
    id of this picture: {{url[url.length-1]}}

    <hr>
    title of this picture: {{users[Number(url[url.length-1])-1].title}}
    <hr>
      URL of this picture:  {{users[Number(url[url.length-1])-1].url}}
      <hr>
      this picture:
      <img :src="users[Number(url[url.length-1])-1].url" alt="">

          <!-- <img :src="user.url" alt=""> -->


    
 </div>
</template>

<script>


export default {


  name: "moreAbout",
  data() {
    return {
      msg: "moreAbout page",
    };
  },
  computed: {
    url(){
      return window.location.href.toString().split('/')

    },
   
    users(){
        return this.$store.state.users.slice(0, 24) 
    }
  },
  mounted(){
      this.$store.dispatch("getUsers")
  }

 

 
 
 
};
</script>