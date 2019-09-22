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

  label {
    line-height: 14px;
    margin-bottom: 4px;
  }
}
</style>
