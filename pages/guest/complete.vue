<template lang="pug">
  v-container.blue-gradient
    v-row(justify="center" no-gutters)
      v-col(cols="11" sm="4")
        v-row.mt-12(justify="center")
          v-col(align="center")
            h2.white--text
              | Successfully
              br
              | sleeved!
        v-row.mt-12(justify="center")
          v-col(cols="3")
            v-btn(color="black" :block="true")
              v-icon.white--text mdi-facebook
          v-col(cols="3")
            v-btn(color="black" :block="true")
              v-icon.white--text mdi-instagram
          v-col(cols="3")
            v-btn(color="black" :block="true")
              v-icon.white--text mdi-twitter
        v-row.mt-12(justify="center")
          v-col(cols="8")
            v-btn(to="/" color="grey" :block="true" nuxt)
              span.white--text Home
</template>

<script>
export default {
  methods: {
    submit () {
      this.$router.push('/guest/complete')
    }
  }
}
</script>
