<template>
  <v-dialog v-model="value" @input="value => this.$emit('input', value)" max-width="500px">
    <v-card>
      <v-card-title>
        Say Hello
      </v-card-title>
      <v-card-text>
        <v-text-field
          v-model="username"
          :rules="[v => !!v || 'Item is required']"
          label="Name"
          required
        ></v-text-field>
        <v-select
          v-model="framework"
          :items="frameworkItems"
          :rules="[v => !!v || 'Item is required']"
          label="Language / Framework"
          required
        ></v-select>
        <v-textarea
          v-model="message"
          label="Message"
          hint="Say Hello to the community"
        ></v-textarea>
      </v-card-text>
      <v-card-actions class="justify-end">
        <v-btn color="primary" aria-label="close" flat @click="closeDialogCallBack">Close</v-btn>
        <v-btn color="primary" aria-label="submit" @click="sayHello">Submit</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: 'add-dialog',
    props: ['isDisplayed'],
    data () {
      return {
        value: this.isDisplayed,
        username: null,
        framework: null,
        message: null,
        frameworkItems: ['VueJs 2', 'React 16']
      }
    },
    watch: {
      isDisplayed() {
        this.value = this.isDisplayed
      }
    },
    methods: {
      sayHello() {
        this.$emit('hello', {
          username: this.username,
          framework: this.framework,
          message: this.message
        })
      },
      closeDialogCallBack() {
        this.$emit('input', false)
      }
    }
  }
</script>

<style lang="scss">
</style>
