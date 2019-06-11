<template>
  <v-bottom-nav
    :active.sync="routeName"
    :value="true"
    absolute
  >
    <v-btn
      color="#1976d2"
      flat
      value="map"
      aria-label="map"
    >
      <span>Map</span>
      <v-icon>place</v-icon>
    </v-btn>

    <v-btn
      color="#1976d2"
      flat
      value="timeline"
      aria-label="timeline"
    >
      <span>Timeline</span>
      <v-icon>history</v-icon>
    </v-btn>

    <v-btn
      color="#1976d2"
      flat
      value="stats"
      aria-label="stats"
    >
      <span>Stats</span>
      <v-icon>trending_up</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>

<script>
  export default {
    name: 'bottom-bar',
    computed: {
      routeName: {
        get() {
            return this.$route.name
        },
        set(newValue) {
          this.$router.push(newValue)
        }
      }
    }
  }
</script>

<style lang="scss">
</style>
