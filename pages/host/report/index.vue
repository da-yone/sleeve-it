<template lang="pug">
  v-container.blue(fill-height)
    v-row(justify="center" no-gutters)
      v-col(cols="11" sm="4")
        v-row
          v-col
            h2.white--text
              | Identify the room,
              br
              | you need a report for...
        v-row
          v-col
            v-text-field(v-model="roomNo" solo label="Room Number")
        v-row(justify="center")
          v-col(cols="10")
            v-btn(color="black" @click="submit" :block="true")
              span.white--text See the report
</template>

<script>
export default {
  data() {
    return {
      roomNo: ''
    }
  },
  methods: {
    submit() {
      this.$router.push('/host/report/result')
    }
  }
}
</script>
