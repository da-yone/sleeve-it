<template lang="pug">
  v-container.sleeve-bg.pt-12
    v-row(justify="center" no-gutters)
      v-col(cols="10" sm="4")
        v-row.mt-12
          v-col(align="center")
            v-img(src="/logo.png" width="254" height="170")
        v-row.mt-12(justify="center")
          v-col(cols="10" align="center")
            v-text-field(v-model="roomNo" solo label="Room Number")
        v-row(justify="center")
          v-col(cols="10")
            v-btn(color="black" :block="true" @click="submit")
              span.white--text Enter
        v-row(justify="center")
          v-col(cols="10")
            v-btn(to="/" color="grey" :block="true" nuxt)
              span.white--text TOP
</template>

<script>
export default {
  data () {
    return {
      roomNo: ''
    }
  },
  methods: {
    submit (category) {
      this.$axios.$get('/sleeves/' + this.roomNo)
        .then((data) => {
          this.$router.push({
            path: '/guest/nickname',
            query: {
              roomId: this.roomNo,
              category: data.sleeves.category
            }
          })
        })
        .catch((error) => {
          alert('No room has been found.')
        })
    }
  }
}
</script>
