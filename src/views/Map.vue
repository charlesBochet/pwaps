<template>
  <div class="map">
    <gmap-map
      :center="{lat: 48.883211, lng: 2.363788}"
      :zoom="5"
      :options="{
       zoomControl: false,
       mapTypeControl: false,
       scaleControl: false,
       streetViewControl: false,
       rotateControl: false,
       fullscreenControl: false,
       disableDefaultUi: false
       }"
    >
      <gmap-info-window
        :options="infoWindowOptions"
        :position="infoWindowPosition"
        :opened="infoWindowOpen"
        @closeclick="infoWindowOpen=false"
        v-if="infoWindowMarker"
      >
        <b>{{ infoWindowMarker.username }}</b>
        <div>{{ infoWindowMarker.framework }}</div>
      </gmap-info-window>
      <gmap-marker
        :key="index"
        v-for="(marker, index) in hellos"
        :position="{
          lat: parseFloat(marker.location.lat),
          lng: parseFloat(marker.location.lng)
        }"
        :clickable="true"
        :title="marker.username"
        :draggable="true"
        @click="toggleInfoWindow(marker)"
      >
      </gmap-marker>
    </gmap-map>
    <v-btn fab dark color="#1976d2" class="add-button" @click="isAddDialogDisplayed=!isAddDialogDisplayed">
      <v-icon dark>add</v-icon>
    </v-btn>
    <add-dialog
      :is-displayed="isAddDialogDisplayed"
      @input="handleDialogInput"
      @hello="addHello"
    >
    </add-dialog>
  </div>
</template>

<script>
  import { db } from '../firebase'
  import AddDialog from '../components/AddDialog'

  export default {
    name: 'maps',
    components: {
      AddDialog
    },
    data() {
      return {
        hellos: [],
        isAddDialogDisplayed: false,
        infoWindowOpen: false,
        infoWindowMarker: null,
        infoWindowOptions: {
          pixelOffset: {
            width: 0,
            height: -35
          }
        }
      }
    },
    computed: {
      infoWindowPosition: function() {
        return {
          lat: Number(this.infoWindowMarker.location.lat),
          lng: Number(this.infoWindowMarker.location.lng)
        }
      }
    },
    methods: {
      handleDialogInput(event) {
        this.isAddDialogDisplayed = event;
      },
      addHello(event) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                this.$firestoreRefs.hellos.add({
                    username: event.username,
                    framework: event.framework,
                    message: event.message,
                    time: Math.floor(Date.now() / 1000),
                    location: {
                      lat: position.coords.latitude,
                      lng: position.coords.longitude
                    }
                })
            });
        }
        this.isAddDialogDisplayed = false
      },
      toggleInfoWindow: function(marker) {
        if (this.infoWindowMarker && this.infoWindowMarker.id == marker.id) {
          this.infoWindowOpen = !this.infoWindowOpen;
        }
        else {
          this.infoWindowOpen = true
        }
        this.infoWindowMarker = marker
      }
    },
    firestore: {
      hellos: db.collection('hellos'),
    },
  }
</script>

<style lang="scss" scoped>
  .map {
    height: 100%;
  }
  .map .vue-map-container {
    height: 100%;
  }

  .add-button {
    position: absolute;
    bottom: 60px;
    right: 5px;
  }
</style>
