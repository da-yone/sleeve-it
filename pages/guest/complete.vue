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
