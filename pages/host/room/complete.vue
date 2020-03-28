<template lang="pug">
  v-container.blue-gradient
    v-row(justify="center" no-gutters)
      v-col(cols="11" sm="4")
        v-row.mt-6
          v-col
            h2.white--text
              | Room Created!
              br
              | Your room number is...
        v-row
          v-col
            v-card(tile align="center")
              v-card-title {{roomId}}
        v-row
          v-col(align="center")
            h3.white--text
              | Use the room number
              br
              | to access Host Dashboard from Home
        v-row.mt-6(justify="center")
          v-col(cols="10")
            v-btn(color="black" :block="true"
              v-clipboard:copy="roomId"
              v-clipboard:success="onCopy"
              v-clipboard:error="onError")
              span.white--text Copy
        v-row(justify="center")
          v-col(cols="10")
            v-btn(to="/" color="grey" :block="true" nuxt)
              span.white--text Home
</template>

<script>
export default {
  data () {
    return {
      roomId: this.$route.query.roomId
    }
  },
  methods: {
    onCopy () {
      alert('Copied!')
    },
    onError () {
      alert('Sorry... Copy failed.')
    }
  }
}
</script>
