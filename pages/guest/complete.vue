<template lang="pug">
  v-container.blue.pt-12
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
            v-btn(to="/guest" color="grey" :block="true" nuxt)
              span.white--text Top
</template>

<script>
export default {
  data () {
    return {
      dummy: ''
    }
  },
  methods: {
    submit () {
      this.$router.push('/guest/complete')
    }
  }
}
</script>
