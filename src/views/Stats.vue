<template>
  <div class="stats">
    <div class="credit-container">
      <img class="logo" src="../assets/pwaps.png">
      <p>
        We now have {{ usersCount }} users in our PWA community
      </p>
      <p>
        @pwaParis
      </p>
    </div>
  </div>
</template>

<script>
  import { db } from '../firebase'

  export default {
    name: 'stats',
    components: {},
    data() {
      return {
        hellos: [],
      }
    },
    computed: {
      usersCount() {
        return this.hellos.length
      }
    },
    firestore: {
        hellos: db.collection('hellos'),
    }
  }
</script>

<style lang="scss" scoped>
  .stats {
    height: 100%;
    padding: 15px;

    .credit-container {
      background-color: white;
      text-align: center;
      border: 1px solid #eee;

      .logo {
        margin-top: 50px;
        max-width: 300px;
      }
    }
  }
</style>