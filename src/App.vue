<template>
  <div id="root">
    <v-app>
      <nav-bar></nav-bar>
      <v-content>
        <v-container fluid>
          <v-slide-x-transition mode="in-out">
            <router-view></router-view>
          </v-slide-x-transition>
        </v-container>
      </v-content>
      <bottom-bar class="hidden-sm-and-up"></bottom-bar>
    </v-app>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue'
  import BottomBar from '@/components/BottomBar.vue'

  export default {
    name: 'app',
    components: {
      NavBar, BottomBar
    }
  }
</script>>

<style lang="scss">
  .container.fluid {
    height: 100%;
    padding: 0;
  }
</style>
