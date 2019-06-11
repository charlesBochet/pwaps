<template>
  <v-toolbar dark color="primary">
      <v-toolbar-title class="white--text"><router-link aria-label="home" class="white--text" to="/"><div class="logo"></div></router-link></v-toolbar-title>

    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn aria-label="map-link" flat><router-link class="white--text" to="/">Map</router-link></v-btn>
    </v-toolbar-items>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn aria-label="timeline-link" flat><router-link class="white--text" to="/timeline">Timeline</router-link></v-btn>
    </v-toolbar-items>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn aria-label="stats-link" flat><router-link class="white--text" to="/stats">Stats</router-link></v-btn>
    </v-toolbar-items>
    <v-btn icon aria-label="go-to-code" href="https://github.com/charlesBochet/pwaps" target="_blank">
        <v-icon>code</v-icon>
    </v-btn>
  </v-toolbar>
</template>

<style lang="scss" scoped>
    a {
        text-decoration: none;
        cursor: pointer;
    }

    .logo {
        width: 90px;
        height: 35px;
        background-size: contain;
        cursor: pointer;
        vertical-align: middle;
        background-image: url("../assets/pwaps-white.png");

        &:hover {
            background-image: url("../assets/pwaps.png");
        }
    }
</style>
