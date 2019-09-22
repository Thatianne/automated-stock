<template>
  <div :class="[$style.app, {[$style.showTopBar]: showTopBar}]">
    <TopBar v-if="showTopBar"/>
    <nuxt :class="$style.container"/>
  </div>
</template>
<script>
import TopBar from '~/components/TopBar'
export default {
  components: { TopBar },
  middleware: [ 'authenticated' ],
  computed: {
    showTopBar () {      
      return this.$route.name !== 'index'
    }
  }
}
</script>

<style lang="scss" module>
.app {
  &.showTopBar {
    .container {
      height: calc(100vh - 64px);
    }  
  }

  .container {
    height: 100vh;
  }

  label {
    line-height: 14px;
    margin-bottom: 4px;
  }
}
</style>
