<template lang="pug">
  v-container.blue-gradient
    v-row(justify="center" no-gutters)
      v-col(cols="11" sm="4")
        v-row.mt-6
          v-col
            h2.white--text
              | Identify the room,
              br
              | you need a report for...
        v-row.mt-12
          v-col
            v-text-field(v-model="roomNo" solo label="Room Number")
        v-row.mt-6(justify="center")
          v-col(cols="10")
            v-btn(color="black" @click="submit" :block="true")
              span.white--text See the report
        v-row(justify="center")
          v-col(cols="10")
            v-btn(to="/host" color="grey" :block="true" nuxt)
              span.white--text Back
</template>

<script>
export default {
  data () {
    return {
      roomNo: ''
    }
  },
  methods: {
    submit () {
      this.$axios.$get('/sleeves/' + this.roomNo)
        .then((data) => {
          this.$router.push({ path: '/host/report/result', query: { roomId: this.roomNo } })
        })
        .catch((error) => {
          console.log(error)
          alert('No room has been found.')
        })
    }
  }
}
</script>
