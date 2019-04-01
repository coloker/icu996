<template>
  <div class="language-menu">
    <div @click="handleToOpen" class="current-language">
      {{currentLanguage}}
    </div>
    <ul v-if="menushow" class="other-languages" >
      <!-- <li v-for="(item,index) in otherLanguages" :key="index">{{item.text}}</li> -->
       <router-link :to="'/'+ item.name "   tag="li" v-for="(item,index) in otherLanguages" :key="index">{{item.text}}</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name : 'Menu',
  data(){
    return {
      menushow : false,
      languages : [
        { name : 'zh_CN',text : '简体中文'},
        { name : 'en_US',text : 'English'},
        { name : 'ja_JP',text : '日本語'}
      ]
    }
  },
  methods : {
    handleToOpen(){      
      if(this.menushow === false ){
        this.menushow = true;
      }else{
        this.menushow = false;
      }
    }
  },
  mounted(){
    console.log( this.$router.history.current)
  },
  computed : {
    currentLanguage(){
      return this.languages.filter((item)=>item.name === this.$router.history.current.name)[0].text || '';
    },
    otherLanguages(){
      return this.languages.filter((item)=> item.name !=  this.$router.history.current.name);
    }
  }
}
</script>
  
<style>
  .language-menu {
     position: absolute;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    top: 15px;
    text-align: right;
    right: 10px;
    list-style: none;
    cursor: pointer;
    background-color: #de335e;
    padding: 0 2px;
  }
  .other-languages {
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 40px;
  }
  .other-languages li{
    -webkit-margin-before: 1em;
    -webkit-margin-after: 1em;
    -webkit-margin-start: 0px;
    -webkit-margin-end: 0px;
    -webkit-padding-start: 40px;
  }
</style>
