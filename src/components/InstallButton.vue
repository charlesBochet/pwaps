<template>
  <v-btn icon aria-label="add-to-home-screen" v-show="deferredPrompt" @click="addToHomeScreen">
    <v-icon>add_to_home_screen</v-icon>
  </v-btn>
</template>

<script>
  export default {
    name: 'install-button',
    data () {
      return {
        deferredPrompt: null,
      }
    },
    mounted() {
      window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        this.deferredPrompt = e;
      });
    },
    methods: {
      addToHomeScreen() {
        this.deferredPrompt.prompt();
        // Wait for the user to respond to the prompt
        this.deferredPrompt.userChoice
          .then((choiceResult) => {
            if (choiceResult.outcome === 'accepted') {
              console.log('User accepted the A2HS prompt')
            } else {
              console.log('User dismissed the A2HS prompt')
            }
            this.deferredPrompt = null
          })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .install-button {
    display: none;
  }
</style>
