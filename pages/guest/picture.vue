<template lang="pug">
  v-container.blue.pt-12
    v-row(justify="center" no-gutters)
      v-col(cols="11" sm="4")
        v-row.mt-12
          v-col
            h2.white--text
              | This picture
              br
              | depicts how how I feel
        v-row.mt-12
          v-col(cols="4" v-for="avatar in avatars" :key="avatar")
            v-card(tile align="center")
              v-avatar(tile color="grey" width="100" height="100")
                span 100
        v-row.mt-12(justify="center")
          v-col(cols="10")
            v-btn(color="black" :block="true" @click="submit")
              span.white--text Pick
        v-row.mt-6(justify="center")
          v-col(cols="10")
            v-btn(to="/guest/nickname" color="grey" :block="true" nuxt)
              span.white--text Back
</template>

<script>
export default {
  data () {
    return {
      category: this.$route.query.category,
      avatars: ['1', '2', '3', '4', '5', '6', '7', '8', '9']
    }
  },
  methods: {
    submit () {
      this.$router.push('/guest/sleeveit')
    }
  }
}
</script>
