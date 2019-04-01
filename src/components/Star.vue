<template>
  <div class="widget">
   <!-- Place this tag where you want the button to render. -->
    <github-button href="https://github.com/996icu/996.ICU" data-icon="octicon-star" data-size="large" data-show-count="true" aria-label="Star ntkme/github-buttons on GitHub">Star</github-button> 
   </div>
</template>



<script>

import GithubButton from 'vue-github-button'

export default {
  name: 'Star',
  components: {
    GithubButton
  },
  
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .widget {
   
    text-align: center;
}
</style>
