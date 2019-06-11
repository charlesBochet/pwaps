<template>
  <div class="timeline">
    <h1>2019</h1>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 pa-1
        :key="event.id"
        v-for="event in hellos"
      >
        <v-card
          :raised="false">
          <v-card-title primary-title>
            <div>
              <h3 class="headline mb-0">{{ event.username }}</h3>
              <div> {{ event.message }} </div>
            </div>
            <div class="date-container">
              {{ formatDateTime(event.time) }}
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import { db } from '../firebase'

  export default {
    name: 'timeline',
    components: {
    },
    data() {
      return {
          hellos: [],
      }
    },
    methods: {
      formatDateTime(timestamp) {
        console.log(timestamp)
        let datetime = new Date(timestamp * 1000);
        return datetime.getFullYear() + '-' + datetime.getMonth() + '-' + datetime.getDate()
      }
    },
    firestore: {
     hellos: db.collection('hellos'),
    },
  }
</script>

<style lang="scss" scoped>
  .timeline {
    h1 {
      text-transform: uppercase;
      color: #333;
      font-size: 1.5em;
    }

    .date-container {
      position: absolute;
      right: 10px;
      top: 5px;
      color: #aaa;
      font-size: 0.9em;
    }

    padding: 15px;
    height: 100%;
  }
</style>
